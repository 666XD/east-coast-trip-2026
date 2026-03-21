'use client';

import { useState } from 'react';
import DynamicMap from '@/components/DynamicMap';
import { cities, itinerary, colorMap } from '@/data/cities';
import { coords } from '@/data/coords';

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

const getCityKey = (city: string): 'boston' | 'nyc' | 'flushing' | 'dc' => {
  const mapping: Record<string, 'boston' | 'nyc' | 'flushing' | 'dc'> = {
    boston: 'boston',
    '波士頓 Boston': 'boston',
    nyc: 'nyc',
    '紐約 NYC': 'nyc',
    flushing: 'flushing',
    '法拉盛 / 華埠': 'flushing',
    dc: 'dc',
    '華盛頓 DC': 'dc',
  };
  return mapping[city] || 'boston';
};

const getMarkersForCity = (cityKey: string, category: string): MarkerData[] => {
  const cityData = Object.values(cities).find((c) => {
    const key = getCityKey(c.name);
    return key === cityKey;
  });

  if (!cityData) return [];

  const markers: MarkerData[] = [];

  if (category === '全部' || category === '景點') {
    cityData.sections.see.items.forEach((item) => {
      if (item.coord && coords[item.coord]) {
        const [lat, lng] = coords[item.coord];
        markers.push({
          lat,
          lng,
          name: item.name,
          desc: item.desc,
          time: item.time,
          cat: '景點',
          color: '#3b82f6',
        });
      }
    });
  }

  if (category === '全部' || category === '美食') {
    cityData.sections.eat.items.forEach((item) => {
      if (item.coord && coords[item.coord]) {
        const [lat, lng] = coords[item.coord];
        markers.push({
          lat,
          lng,
          name: item.name,
          desc: item.desc,
          time: item.time,
          cat: '美食',
          color: '#ef4444',
        });
      }
    });
  }

  if (category === '全部' || category === '購物') {
    cityData.sections.buy.items.forEach((item) => {
      if (item.coord && coords[item.coord]) {
        const [lat, lng] = coords[item.coord];
        markers.push({
          lat,
          lng,
          name: item.name,
          desc: item.desc,
          cat: '購物',
          color: '#fbbf24',
        });
      }
    });
  }

  return markers;
};

const getMarkersForDay = (dayIndex: number): MarkerData[] => {
  const day = itinerary[dayIndex];
  if (!day) return [];

  const markers: MarkerData[] = [];
  let number = 1;

  day.schedule.forEach((item) => {
    if (item.coord && coords[item.coord]) {
      const [lat, lng] = coords[item.coord];
      const cityKey = getCityKey(day.city);
      const color = colorMap[cityKey];

      markers.push({
        lat,
        lng,
        name: item.act,
        time: item.time,
        number: number++,
        color: color,
      });
    }
  });

  return markers;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCity, setSelectedCity] = useState<'boston' | 'nyc' | 'flushing' | 'dc'>('boston');
  const [selectedCategory, setSelectedCategory] = useState('全部');

  const getCityDisplayName = (key: 'boston' | 'nyc' | 'flushing' | 'dc'): string => {
    const nameMap = {
      boston: '波士頓 Boston',
      nyc: '紐約 NYC',
      flushing: '法拉盛 / 華埠',
      dc: '華盛頓 DC',
    };
    return nameMap[key];
  };

  const getCityColor = (key: 'boston' | 'nyc' | 'flushing' | 'dc'): string => {
    return colorMap[key];
  };

  const handleOpenMaps = (coord: string) => {
    if (coords[coord]) {
      const [lat, lng] = coords[coord];
      window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white pt-6 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-4">
            <p className="text-sm font-light tracking-widest mb-2">2026 Spring</p>
            <h1 className="text-5xl font-bold mb-2">美東之旅完全攻略</h1>
            <p className="text-lg text-gray-300 mb-2">East Coast Ultimate Guide</p>
            <p className="text-base text-gray-400 font-light">波士頓 Boston → 紐約 NYC → 法拉盛 Flushing → 華盛頓 DC</p>
            <p className="text-sm text-gray-500 mt-2">3/30 - 4/5, 2026</p>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-24 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center gap-8 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`text-lg font-semibold transition-colors ${
                activeTab === 'overview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📋 總覽
            </button>
            <button
              onClick={() => setActiveTab('cities')}
              className={`text-lg font-semibold transition-colors ${
                activeTab === 'cities'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🗺️ 城市清單
            </button>
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`text-lg font-semibold transition-colors ${
                activeTab === 'itinerary'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📅 每日行程
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`text-lg font-semibold transition-colors ${
                activeTab === 'map'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              📍 地圖總覽
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Itinerary Summary Table */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">行程概覽</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                  <thead className="bg-gradient-to-r from-slate-800 to-slate-700 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">日期</th>
                      <th className="px-6 py-3 text-left font-semibold">城市</th>
                      <th className="px-6 py-3 text-left font-semibold">行程摘要</th>
                      <th className="px-6 py-3 text-left font-semibold">住宿</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itinerary.map((day, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{day.date}</td>
                        <td className="px-6 py-4">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-white text-sm font-medium"
                            style={{ backgroundColor: getCityColor(getCityKey(day.city)) }}
                          >
                            {day.city === 'boston' && '🦞'}
                            {day.city === 'nyc' && '🗽'}
                            {day.city === 'flushing' && '🥟'}
                            {day.city === 'dc' && '🏛️'}
                            {' '}
                            {getCityDisplayName(getCityKey(day.city))}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{day.title}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{day.hotel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 重要提醒 */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-amber-900 mb-4">⚠️ 重要提醒</h3>
              <ul className="space-y-2 text-amber-900">
                <li className="flex items-start">
                  <span className="mr-3 font-bold">📍</span>
                  <span>DC 博物館需提前預約 timed-entry：Air & Space Museum、NMAAHC</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">🌸</span>
                  <span>DC 櫻花季高峰期 3/28-31，建議提早前往避人潮</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">💵</span>
                  <span>Mike's Pastry、Shanghai You Garden 等餐廳只收現金</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">🚇</span>
                  <span>購買 MTA 7-day MetroCard 遊遍紐約</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 font-bold">📱</span>
                  <span>下載 Citymapper、Google Maps 離線地圖備用</span>
                </li>
              </ul>
            </div>

            {/* 城際交通 */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">🚆 城際交通</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                  <p className="font-semibold text-red-900 mb-2">✈️ 波士頓 → 紐約</p>
                  <p className="text-sm text-red-800">Amtrak 東北走廊列車 (Northeast Regional)</p>
                  <p className="text-sm text-red-700 font-semibold">🕐 3.5 小時 | 💰 $25-50</p>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
                  <p className="font-semibold text-slate-900 mb-2">🚇 紐約市區交通</p>
                  <p className="text-sm text-slate-800">購買 7-day MetroCard 無限次搭乘</p>
                  <p className="text-sm text-slate-700 font-semibold">💰 $33</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                  <p className="font-semibold text-red-900 mb-2">🚇 紐約 → 法拉盛</p>
                  <p className="text-sm text-red-800">7 號線地鐵 Queens Line (Flushing Line)</p>
                  <p className="text-sm text-red-700 font-semibold">🕐 40 分鐘 | 💰 $2.90</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">🚆 紐約 → DC</p>
                  <p className="text-sm text-blue-800">Amtrak Northeast Regional / Acela (快車)</p>
                  <p className="text-sm text-blue-700 font-semibold">🕐 3.5-4.5 小時 | 💰 $40-150</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cities Tab */}
        {activeTab === 'cities' && (
          <div className="space-y-8">
            {/* City Selector */}
            <div className="flex gap-3 flex-wrap">
              {['boston', 'nyc', 'flushing', 'dc'].map((cityKey) => (
                <button
                  key={cityKey}
                  onClick={() => {
                    setSelectedCity(cityKey as 'boston' | 'nyc' | 'flushing' | 'dc');
                    setSelectedCategory('全部');
                  }}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCity === cityKey
                      ? 'text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={
                    selectedCity === cityKey
                      ? { backgroundColor: getCityColor(cityKey as 'boston' | 'nyc' | 'flushing' | 'dc') }
                      : undefined
                  }
                >
                  {cityKey === 'boston' && '🦞'}
                  {cityKey === 'nyc' && '🗽'}
                  {cityKey === 'flushing' && '🥟'}
                  {cityKey === 'dc' && '🏛️'}
                  {' '}
                  {getCityDisplayName(selectedCity === cityKey ? selectedCity : (cityKey as 'boston' | 'nyc' | 'flushing' | 'dc'))}
                </button>
              ))}
            </div>

            {/* City Header */}
            <div
              className="rounded-lg p-8 text-white"
              style={{ backgroundColor: getCityColor(selectedCity) }}
            >
              <h2 className="text-4xl font-bold mb-2">{getCityDisplayName(selectedCity)}</h2>
              <p className="text-lg opacity-90">{cities[selectedCity].dates}</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 flex-wrap">
              {['全部', '景點', '美食', '購物'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category === '全部' && '📋'}
                  {category === '景點' && '🏛️'}
                  {category === '美食' && '🍽️'}
                  {category === '購物' && '🛍️'}
                  {' '}
                  {category}
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <DynamicMap
                markers={getMarkersForCity(selectedCity, selectedCategory)}
                center={cities[selectedCity].center}
                zoom={13}
                height={400}
              />
            </div>

            {/* Items List */}
            <div className="space-y-4">
              {selectedCategory === '全部' || selectedCategory === '景點' ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">🏛️ 看的 / 景點</h3>
                  <div className="space-y-3">
                    {cities[selectedCity].sections.see.items.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900">{item.name}</h4>
                              {item.must && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">必去</span>}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                            <div className="flex gap-4 text-sm text-gray-500">
                              {item.time && <span>⏱️ {item.time}</span>}
                            </div>
                          </div>
                          {item.coord && (
                            <button
                              onClick={() => handleOpenMaps(item.coord!)}
                              className="ml-4 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 whitespace-nowrap"
                            >
                              📍 Maps
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {selectedCategory === '全部' || selectedCategory === '美食' ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">🍽️ 吃的 / 美食</h3>
                  <div className="space-y-3">
                    {cities[selectedCity].sections.eat.items.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-bold text-gray-900">{item.name}</h4>
                              {item.must && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">必吃</span>}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                            <div className="flex gap-4 text-sm text-gray-500">
                              {item.price && <span>💰 {item.price}</span>}
                            </div>
                          </div>
                          {item.coord && (
                            <button
                              onClick={() => handleOpenMaps(item.coord!)}
                              className="ml-4 px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 whitespace-nowrap"
                            >
                              📍 Maps
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {selectedCategory === '全部' || selectedCategory === '購物' ? (
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 mt-8">🛍️ 買的 / 購物</h3>
                  <div className="space-y-3">
                    {cities[selectedCity].sections.buy.items.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-2">{item.name}</h4>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                          </div>
                          {item.coord && (
                            <button
                              onClick={() => handleOpenMaps(item.coord!)}
                              className="ml-4 px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 whitespace-nowrap"
                            >
                              📍 Maps
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        )}

        {/* Itinerary Tab */}
        {activeTab === 'itinerary' && (
          <div className="space-y-8">
            {itinerary.map((day, dayIdx) => {
              const cityKey = getCityKey(day.city);
              const dayMarkers = getMarkersForDay(dayIdx);

              return (
                <div key={dayIdx} className="border-l-4 rounded-lg overflow-hidden" style={{ borderColor: getCityColor(cityKey) }}>
                  {/* Day Header */}
                  <div
                    className="p-6 text-white"
                    style={{ backgroundColor: getCityColor(cityKey) }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{day.date}</h3>
                    <p className="text-lg opacity-90">{day.title}</p>
                    <p className="text-sm opacity-75 mt-2">🏨 {day.hotel}</p>
                  </div>

                  {/* Map for this day */}
                  <div className="bg-gray-50 p-6 rounded-b-lg">
                    <div className="rounded-lg overflow-hidden shadow-md mb-6">
                      <DynamicMap
                        markers={dayMarkers}
                        center={cities[cityKey].center}
                        zoom={13}
                        height={350}
                      />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                      {day.schedule.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                              style={{ backgroundColor: getCityColor(cityKey) }}
                            >
                              {item.icon}
                            </div>
                            {itemIdx < day.schedule.length - 1 && (
                              <div
                                className="w-1 h-12 mt-2"
                                style={{ backgroundColor: getCityColor(cityKey) }}
                              ></div>
                            )}
                          </div>
                          <div className="pb-4 flex-1">
                            <p className="font-bold text-gray-900">{item.time}</p>
                            <p className="text-gray-700 mt-1">{item.act}</p>
                            {item.coord && (
                              <button
                                onClick={() => handleOpenMaps(item.coord!)}
                                className="text-blue-500 hover:text-blue-700 text-sm mt-2"
                              >
                                📍 Google Maps
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Map Tab */}
        {activeTab === 'map' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">地圖總覽</h2>

            {/* Overview Map - All Cities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900">📍 整體路線</h3>
              </div>
              <div className="p-6">
                <DynamicMap
                  markers={['boston', 'nyc', 'flushing', 'dc'].map((cityKey) => ({
                    lat: cities[cityKey as 'boston' | 'nyc' | 'flushing' | 'dc'].center.lat,
                    lng: cities[cityKey as 'boston' | 'nyc' | 'flushing' | 'dc'].center.lng,
                    name: getCityDisplayName(cityKey as 'boston' | 'nyc' | 'flushing' | 'dc'),
                    color: getCityColor(cityKey as 'boston' | 'nyc' | 'flushing' | 'dc'),
                  }))}
                  center={{ lat: 40.0, lng: -75.5 }}
                  zoom={7}
                  height={450}
                />
              </div>
            </div>

            {/* Individual City Maps */}
            {['boston', 'nyc', 'flushing', 'dc'].map((cityKey) => {
              const key = cityKey as 'boston' | 'nyc' | 'flushing' | 'dc';
              const cityMarkers = getMarkersForCity(key, '全部');

              return (
                <div key={cityKey} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div
                    className="p-6 text-white"
                    style={{ backgroundColor: getCityColor(key) }}
                  >
                    <h3 className="text-2xl font-bold">{getCityDisplayName(key)}</h3>
                    <p className="text-sm opacity-75 mt-2">{cities[key].dates}</p>
                  </div>
                  <div className="p-6">
                    <DynamicMap
                      markers={cityMarkers}
                      center={cities[key].center}
                      zoom={13}
                      height={400}
                    />
                  </div>
                  <div className="px-6 pb-6 flex gap-3 flex-wrap">
                    {['boston', 'nyc', 'flushing', 'dc'].map((otherKey) => {
                      const otherKeyTyped = otherKey as 'boston' | 'nyc' | 'flushing' | 'dc';
                      return (
                        <button
                          key={otherKey}
                          onClick={() => setSelectedCity(otherKeyTyped)}
                          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                            selectedCity === otherKeyTyped
                              ? 'text-white'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          style={
                            selectedCity === otherKeyTyped
                              ? { backgroundColor: getCityColor(otherKeyTyped) }
                              : undefined
                          }
                        >
                          {otherKey === 'boston' && '🦞'}
                          {otherKey === 'nyc' && '🗽'}
                          {otherKey === 'flushing' && '🥟'}
                          {otherKey === 'dc' && '🏛️'}
                          {' '}
                          {getCityDisplayName(otherKeyTyped)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
