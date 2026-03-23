// Sub-location walking routes for large areas

export interface SubLocation {
  name: string;
  coord: string;
  desc?: string;
}

export interface SubLocationRoute {
  label: string;
  color: string;
  stops: SubLocation[];
}

// Keys match ScheduleItem.coord values from the itinerary
export const subLocations: Record<string, SubLocationRoute> = {
  "Harvard University": {
    label: "Harvard 校園路線",
    color: "#A51C30",
    stops: [
      { name: "Johnston Gate", coord: "Johnston Gate", desc: "哈佛正門入口" },
      { name: "John Harvard Statue", coord: "John Harvard Statue", desc: "摸左腳 All Pass!" },
      { name: "Widener Library", coord: "Widener Library", desc: "哈佛最大圖書館" },
      { name: "Memorial Church", coord: "Memorial Church", desc: "Harvard Yard 地標" },
      { name: "Harvard Art Museum", coord: "Harvard Art Museum", desc: "免費入場" },
      { name: "Harvard Coop", coord: "Harvard Coop", desc: "紀念品 T-shirt" },
    ],
  },
  "Stata Center": {
    label: "MIT 校園路線",
    color: "#750014",
    stops: [
      { name: "Great Dome", coord: "Great Dome", desc: "MIT 經典圓頂地標" },
      { name: "Infinite Corridor", coord: "Infinite Corridor", desc: "825英尺長廊" },
      { name: "Stata Center", coord: "Stata Center", desc: "Frank Gehry 解構主義建築" },
    ],
  },
  "Bethesda Fountain": {
    label: "Central Park 路線",
    color: "#2d6a4f",
    stops: [
      { name: "Bethesda Fountain", coord: "Bethesda Fountain", desc: "Central Park 心臟，天使雕像" },
      { name: "Bow Bridge", coord: "Bow Bridge", desc: "最浪漫的鑄鐵橋，拍照聖地" },
      { name: "Strawberry Fields", coord: "Strawberry Fields", desc: "John Lennon 紀念地，Imagine 馬賽克" },
      { name: "Sheep Meadow", coord: "Sheep Meadow", desc: "大草坪野餐勝地" },
    ],
  },
  "Freedom Trail": {
    label: "Freedom Trail 步道",
    color: "#B33A3A",
    stops: [
      { name: "Boston Common", coord: "Boston Common", desc: "Freedom Trail 起點" },
      { name: "State House", coord: "Massachusetts State House", desc: "金色圓頂地標" },
      { name: "Faneuil Hall", coord: "Faneuil Hall", desc: "革命的搖籃" },
      { name: "Quincy Market", coord: "Quincy Market", desc: "美食市集，必喝 Chowder" },
      { name: "Paul Revere House", coord: "Paul Revere House", desc: "波士頓最古老住宅" },
      { name: "Old North Church", coord: "Old North Church", desc: "One if by land, two if by sea" },
    ],
  },
};
