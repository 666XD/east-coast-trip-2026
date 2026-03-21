import dynamic from 'next/dynamic';

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

interface DynamicMapProps {
  markers: MarkerData[];
  center: { lat: number; lng: number };
  zoom?: number;
  height?: number;
}

const LeafletMapComponent = dynamic(
  () => import('./LeafletMap'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
        }}
      >
        Loading map...
      </div>
    ),
  }
);

export default function DynamicMap(props: DynamicMapProps) {
  return <LeafletMapComponent {...props} />;
}
