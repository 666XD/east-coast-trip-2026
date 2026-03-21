'use client';

import React, { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MarkerData {
  lat: number;
  lng: number;
  name: string;
  desc?: string;
  time?: string;
  color?: string;
  cat?: string;
  number?: number;
}

interface LeafletMapProps {
  markers: MarkerData[];
  center: { lat: number; lng: number };
  zoom?: number;
  height?: number;
}

const colorMap: Record<string, string> = {
  '景點': '#3b82f6',
  '美食': '#ef4444',
  '購物': '#fbbf24',
};

// Component to handle map bounds fitting
function MapBoundsController({ markers }: { markers: MarkerData[] }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) return;

    const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [markers, map]);

  return null;
}

// Component to render legend
function MapLegend({ markers }: { markers: MarkerData[] }) {
  const hasCategories = markers.some((m) => m.cat);
  if (!hasCategories) return null;

  const categories = Array.from(new Set(markers.map((m) => m.cat).filter(Boolean))) as string[];

  return (
    <div className="leaflet-bottom leaflet-right" style={{ zIndex: 400 }}>
      <div
        className="leaflet-control"
        style={{
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 0 15px rgba(0,0,0,0.2)',
          margin: '10px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '12px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>分類</div>
        {categories.map((cat) => (
          <div key={cat} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: colorMap[cat] || '#gray',
                marginRight: '8px',
              }}
            />
            <span>{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LeafletMap({
  markers,
  center,
  zoom = 13,
  height = 300,
}: LeafletMapProps) {
  // Filter numbered markers and sort by number
  const numberedMarkers = markers
    .filter((m) => m.number !== undefined)
    .sort((a, b) => (a.number ?? 0) - (b.number ?? 0));

  // Create polyline coordinates from numbered markers
  const polylineCoordinates: [number, number][] = numberedMarkers.map((m) => [m.lat, m.lng]);

  // Create custom icon function
  const createCustomIcon = (marker: MarkerData) => {
    const backgroundColor = marker.color || colorMap[marker.cat || ''] || '#3b82f6';
    const iconHtml = marker.number
      ? `<div style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background-color: ${backgroundColor}; border-radius: 50%; color: white; font-weight: bold; font-size: 14px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">${marker.number}</div>`
      : `<div style="display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; background-color: ${backgroundColor}; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`;

    return L.divIcon({
      html: iconHtml,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16],
      className: 'custom-div-icon',
    });
  };

  return (
    <div style={{ height: `${height}px`, width: '100%', position: 'relative' }}>
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Draw polyline connecting numbered markers */}
        {polylineCoordinates.length > 1 && (
          <Polyline
            positions={polylineCoordinates}
            pathOptions={{
              color: '#666',
              weight: 2,
              opacity: 0.6,
              dashArray: '5, 5',
            }}
          />
        )}

        {/* Render all markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={createCustomIcon(marker)}
          >
            <Popup>
              <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '200px' }}>
                <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>{marker.name}</div>
                {marker.desc && <div style={{ fontSize: '12px', marginBottom: '6px' }}>{marker.desc}</div>}
                {marker.time && <div style={{ fontSize: '12px', marginBottom: '6px' }}>時間: {marker.time}</div>}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${marker.lat},${marker.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0066cc',
                    textDecoration: 'none',
                    fontSize: '12px',
                  }}
                >
                  在 Google Maps 打開
                </a>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Map bounds controller */}
        <MapBoundsController markers={markers} />

        {/* Legend */}
        <MapLegend markers={markers} />
      </MapContainer>
    </div>
  );
}
