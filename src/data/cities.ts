// City data, itinerary, and color mappings for the East Coast Trip

export interface Center {
  lat: number;
  lng: number;
}

export interface SectionItem {
  name: string;
  desc: string;
  must?: boolean;
  price?: string;
  time?: string;
  coord?: string;
}

export interface Section {
  title: string;
  items: SectionItem[];
}

export interface Sections {
  see: Section;
  eat: Section;
  buy: Section;
}

export interface CityData {
  name: string;
  dates: string;
  color: string;
  emoji: string;
  center: Center;
  sections: Sections;
}

export interface ScheduleItem {
  time: string;
  act: string;
  icon: string;
  coord?: string;
}

export interface ItineraryDay {
  date: string;
  city: string;
  title: string;
  hotel: string;
  schedule: ScheduleItem[];
}

export type ColorMapType = Record<string, string>;

export const cities: Record<string, CityData> = {
  boston: {
    name: "波士頓 Boston",
    dates: "3/30-3/31 (兩天)",
    color: "#B33A3A",
    emoji: "🦞",
    center: { lat: 42.358, lng: -71.06 },
    sections: {
      see: {
        title: "🏛️ 看的 / 景點",
        items: [
          {
            name: "Freedom Trail 自由之路",
            desc: "2.5英里紅磚步道串聯16個革命歷史景點",
            must: true,
            time: "3-4hr",
            coord: "Freedom Trail",
          },
          {
            name: "Boston Common & Public Garden",
            desc: "全美最古老公園 + Swan Boats",
            must: true,
            time: "1hr",
            coord: "Boston Common",
          },
          {
            name: "Beacon Hill 燈塔山",
            desc: "紅磚建築、煤氣街燈、Acorn Street",
            must: true,
            time: "1hr",
            coord: "Beacon Hill",
          },
          {
            name: "Quincy Market / Faneuil Hall",
            desc: "歷史市集，50+商店、40+美食攤位",
            must: true,
            time: "1-2hr",
            coord: "Quincy Market",
          },
          {
            name: "North End 小義大利",
            desc: "波士頓最古老街區，義大利餐廳&麵包店集散地",
            must: true,
            time: "1-2hr",
            coord: "North End",
          },
          {
            name: "🎓 Harvard 哈佛大學",
            desc: "Johnston Gate → John Harvard Statue (摸左腳 All Pass!) → Widener Library → Memorial Church",
            must: true,
            time: "1-1.5hr",
            coord: "Harvard University",
          },
          {
            name: "Harvard Square 哈佛廣場",
            desc: "Harvard Coop 買紀念品 T-shirt",
            must: true,
            time: "30min",
            coord: "Harvard Coop",
          },
          {
            name: "🔬 MIT 麻省理工",
            desc: "Great Dome + Stata Center (Frank Gehry) + Infinite Corridor",
            must: true,
            time: "40-60min",
            coord: "MIT",
          },
          {
            name: "Fenway Park 芬威球場",
            desc: "1912年，紅襪隊主場 Green Monster",
            time: "1-2hr",
            coord: "Fenway Park",
          },
          {
            name: "View Boston",
            desc: "Prudential 52樓觀景台",
            time: "1hr",
            coord: "View Boston",
          },
          {
            name: "Bunker Hill Monument",
            desc: "294階可登頂看全景",
            time: "45min",
            coord: "Bunker Hill",
          },
          {
            name: "Newbury Street",
            desc: "Back Bay 精品購物街",
            time: "1-2hr",
            coord: "Newbury Street",
          },
          {
            name: "Seaport District",
            desc: "新興潮流區 + ICA 當代藝術館",
            time: "1-2hr",
            coord: "Seaport",
          },
          {
            name: "The Skinny House",
            desc: "只有10.4英尺寬的超窄房子，隱藏彩蛋",
            time: "5min",
            coord: "Skinny House",
          },
        ],
      },
      eat: {
        title: "🍽️ 吃的 / 美食",
        items: [
          {
            name: "Neptune Oyster",
            desc: "最有名 lobster roll (暖奶油版)，排隊1hr+",
            must: true,
            price: "$$$",
            coord: "Neptune Oyster",
          },
          {
            name: "Union Oyster House",
            desc: "全美最古老餐廳 (1826)，clam chowder",
            must: true,
            price: "$$",
            coord: "Union Oyster House",
          },
          {
            name: "Row 34",
            desc: "Seaport 生蠔 + 精釀啤酒",
            must: true,
            price: "$$$",
            coord: "Row 34",
          },
          {
            name: "Mike's Pastry",
            desc: "North End cannoli 名店，Cash Only！ricotta 口味",
            must: true,
            price: "$",
            coord: "Mike's Pastry",
          },
          {
            name: "Mamma Maria",
            desc: "North End 高檔義大利",
            price: "$$$$",
            coord: "Mamma Maria",
          },
          {
            name: "Saltie Girl",
            desc: "高檔海鮮 tinned fish + 龍蝦",
            price: "$$$$",
            coord: "Saltie Girl",
          },
          {
            name: "L.A. Burdick",
            desc: "Best of Boston 最佳 hot chocolate",
            price: "$",
            coord: "L.A. Burdick",
          },
          { name: "Clam Chowder", desc: "波士頓靈魂食物，到處都要喝一碗", must: true, price: "$" },
        ],
      },
      buy: {
        title: "🛍️ 買的 / 購物",
        items: [
          { name: "Newbury Street", desc: "Back Bay 精品購物大道", coord: "Newbury Street" },
          { name: "Faneuil Hall Marketplace", desc: "紀念品 + 小店", coord: "Faneuil Hall" },
          { name: "Harvard Coop", desc: "哈佛紀念品 T-shirt 帽子馬克杯", coord: "Harvard Coop" },
        ],
      },
    },
  },
  nyc: {
    name: "紐約 NYC",
    dates: "3/31-4/2 (三晚)",
    color: "#1a1a2e",
    emoji: "🗽",
    center: { lat: 40.748, lng: -73.985 },
    sections: {
      see: {
        title: "🏛️ 看的 / 景點",
        items: [
          {
            name: "Statue of Liberty",
            desc: "搭渡輪，$25，搭 9AM 第一班避人潮",
            must: true,
            time: "3-4hr",
            coord: "Statue of Liberty",
          },
          {
            name: "Empire State Building",
            desc: "86樓+102樓觀景台",
            must: true,
            time: "1-2hr",
            coord: "Empire State Building",
          },
          {
            name: "Top of the Rock",
            desc: "三層露天無玻璃！Empire State + Central Park 同框",
            must: true,
            time: "1-2hr",
            coord: "Top of the Rock",
          },
          {
            name: "Central Park",
            desc: "Bethesda Fountain、Bow Bridge、春天超美",
            must: true,
            time: "2-3hr",
            coord: "Central Park",
          },
          {
            name: "Times Square",
            desc: "觀光聖地，不用待太久",
            must: true,
            time: "30-60min",
            coord: "Times Square",
          },
          {
            name: "Brooklyn Bridge",
            desc: "Brooklyn→Manhattan 方向走，日落最美",
            must: true,
            time: "1hr",
            coord: "Brooklyn Bridge",
          },
          {
            name: "9/11 Memorial",
            desc: "世貿遺址紀念館",
            must: true,
            time: "2hr",
            coord: "9/11 Memorial",
          },
          {
            name: "The High Line",
            desc: "空中鐵道花園步道 1.5英里",
            must: true,
            time: "1-2hr",
            coord: "High Line",
          },
          {
            name: "Chelsea Market",
            desc: "歷史工廠改建美食市集 35+攤",
            must: true,
            time: "1-2hr",
            coord: "Chelsea Market",
          },
          {
            name: "The Met 大都會博物館",
            desc: "5,000年人類藝術史",
            time: "3-4hr",
            coord: "The Met",
          },
          { name: "DUMBO", desc: "Manhattan Bridge 經典拍照角度", time: "1-2hr", coord: "DUMBO" },
          {
            name: "Summit One Vanderbilt",
            desc: "沉浸式鏡面觀景台",
            time: "1-2hr",
            coord: "Summit One Vanderbilt",
          },
          { name: "Wall Street + 銅牛", desc: "金融區地標", time: "30min", coord: "Wall Street" },
          { name: "Grand Central Terminal", desc: "天花板星空畫", time: "30min", coord: "Grand Central" },
          { name: "Broadway 百老匯", desc: "必看一場！Wicked、Hamilton", time: "3hr", coord: "Broadway" },
          { name: "Little Island", desc: "Hudson River 鬱金香型人造公園島", time: "1hr", coord: "Little Island" },
          { name: "SoHo", desc: "鑄鐵建築 + 精品 + 藝廊", time: "1-2hr", coord: "SoHo" },
          { name: "Flatiron Building", desc: "三角形地標建築", time: "15min", coord: "Flatiron Building" },
        ],
      },
      eat: {
        title: "🍽️ 吃的 / 美食",
        items: [
          {
            name: "Peter Luger Steak",
            desc: "百年牛排名店",
            must: true,
            price: "$$$$",
            coord: "Peter Luger",
          },
          {
            name: "Joe's Pizza",
            desc: "Greenwich Village 經典 pizza slice",
            must: true,
            price: "$",
            coord: "Joe's Pizza",
          },
          {
            name: "Los Tacos No.1",
            desc: "Chelsea Market 最受歡迎 taco",
            must: true,
            price: "$",
            coord: "Los Tacos No.1",
          },
          {
            name: "Katz's Deli",
            desc: "1888年 pastrami sandwich",
            must: true,
            price: "$$",
            coord: "Katz's Deli",
          },
          {
            name: "Russ & Daughters",
            desc: "1914年 lox bagel 紐約早餐之王",
            must: true,
            price: "$$",
            coord: "Russ & Daughters",
          },
          {
            name: "Levain Bakery",
            desc: "巨大半熟 chocolate chip cookie",
            must: true,
            price: "$",
            coord: "Levain Bakery",
          },
          {
            name: "Atomix",
            desc: "北美50最佳 #1，韓式 fine dining",
            price: "$$$$",
            coord: "Atomix",
          },
          {
            name: "Le Bernardin",
            desc: "三星米其林法式海鮮",
            price: "$$$$",
            coord: "Le Bernardin",
          },
          {
            name: "Mama's Too!",
            desc: "2026世界最佳 pizza",
            must: true,
            price: "$$",
            coord: "Mama's Too",
          },
        ],
      },
      buy: {
        title: "🛍️ 買的 / 購物",
        items: [
          { name: "SoHo", desc: "精品街 Prada、Chanel 等", coord: "SoHo" },
          { name: "Fifth Avenue", desc: "Tiffany、Saks、Nike 旗艦", coord: "Fifth Avenue" },
          { name: "Strand Bookstore", desc: "二手書天堂 18英里書架", coord: "Strand Bookstore" },
        ],
      },
    },
  },
  flushing: {
    name: "法拉盛 / 華埠",
    dates: "4/2 (一晚)",
    color: "#C41E3A",
    emoji: "🥟",
    center: { lat: 40.7596, lng: -73.831 },
    sections: {
      see: {
        title: "🏛️ 看的 / 景點",
        items: [
          {
            name: "法拉盛大街",
            desc: "紐約最大華人社區，街頭像在亞洲",
            must: true,
            time: "隨意",
            coord: "Flushing Main St",
          },
          {
            name: "New World Mall 新世界",
            desc: "地下美食廣場 32 個品牌",
            must: true,
            time: "1-2hr",
            coord: "New World Mall",
          },
          {
            name: "Tangram 天景",
            desc: "24,000sqft Food Hall + 購物",
            time: "1hr",
            coord: "Tangram",
          },
          {
            name: "Manhattan Chinatown",
            desc: "Mott St、Canal St 華人歷史街區",
            must: true,
            time: "1-2hr",
            coord: "Chinatown",
          },
          {
            name: "Doyers Street",
            desc: "唐人街最有名彎曲小巷",
            time: "30min",
            coord: "Doyers Street",
          },
          {
            name: "Columbus Park",
            desc: "老人打太極下棋打麻將",
            time: "20min",
            coord: "Columbus Park",
          },
          {
            name: "大乘寺 Mahayana Temple",
            desc: "16英尺佛像，免費參觀",
            time: "20min",
            coord: "Mahayana Temple",
          },
        ],
      },
      eat: {
        title: "🍽️ 吃的 / 美食",
        items: [
          {
            name: "南翔小籠包 Nan Xiang",
            desc: "彩虹色外皮多口味，皮薄湯多",
            must: true,
            price: "$$",
            coord: "Nan Xiang",
          },
          {
            name: "上海小館 Shanghai You Garden",
            desc: "10種小籠包！Cash only",
            must: true,
            price: "$$",
            coord: "Shanghai You Garden",
          },
          {
            name: "江南 Jiang Nan",
            desc: "米其林推薦，北京烤鴨招牌",
            must: true,
            price: "$$$",
            coord: "Jiang Nan",
          },
          {
            name: "白熊 White Bear",
            desc: "紅油抄手，經典中的經典",
            must: true,
            price: "$",
            coord: "White Bear",
          },
          {
            name: "Corner 28",
            desc: "超便宜燒臘飯 $10以下",
            must: true,
            price: "$",
            coord: "Corner 28",
          },
          {
            name: "New World Mall 地下美食",
            desc: "蘭州拉麵、煎包、烤串、煎餅果子",
            must: true,
            price: "$",
            coord: "New World Mall",
          },
          {
            name: "金皇庭 Asian Jewels",
            desc: "港式推車飲茶",
            price: "$$",
            coord: "Asian Jewels",
          },
          {
            name: "秀八珍 Eight Jane",
            desc: "煎餅果子+油條+豆漿",
            price: "$",
            coord: "Eight Jane Foods",
          },
          {
            name: "豆花莊 Soy Bean Chan",
            desc: "超滑嫩豆花",
            price: "$",
            coord: "Soy Bean Chan",
          },
          {
            name: "Nom Wah Tea Parlor",
            desc: "唐人街最古老茶樓 (1920)",
            must: true,
            price: "$$",
            coord: "Nom Wah Tea Parlor",
          },
          {
            name: "美麗華 Mei Li Wah",
            desc: "唐人街最好叉燒包",
            price: "$",
            coord: "Mei Li Wah",
          },
          {
            name: "Hwa Yuan 華園",
            desc: "唐人街北京烤鴨+麻辣",
            price: "$$$",
            coord: "Hwa Yuan",
          },
        ],
      },
      buy: {
        title: "🛍️ 買的 / 購物",
        items: [
          { name: "New World Mall", desc: "亞洲商品零食", coord: "New World Mall" },
          { name: "Pearl River Mart", desc: "華人百貨公司", coord: "Pearl River Mart" },
          { name: "Canal Street", desc: "唐人街紀念品街", coord: "Canal Street" },
        ],
      },
    },
  },
  dc: {
    name: "華盛頓 DC",
    dates: "4/3-4/4 (兩晚)",
    color: "#002147",
    emoji: "🏛️",
    center: { lat: 38.893, lng: -77.028 },
    sections: {
      see: {
        title: "🏛️ 看的 / 景點",
        items: [
          { name: "National Mall", desc: "串聯所有紀念碑和博物館", must: true, time: "全天", coord: "National Mall" },
          {
            name: "Lincoln Memorial",
            desc: "I Have a Dream 演說地點",
            must: true,
            time: "30-60min",
            coord: "Lincoln Memorial",
          },
          {
            name: "Washington Monument",
            desc: "555英尺方尖碑",
            must: true,
            time: "30-60min",
            coord: "Washington Monument",
          },
          {
            name: "U.S. Capitol",
            desc: "需預約導覽",
            must: true,
            time: "1-2hr",
            coord: "U.S. Capitol",
          },
          { name: "White House", desc: "外觀拍照", must: true, time: "30min", coord: "White House" },
          {
            name: "Air & Space Museum",
            desc: "免費！⚠️ 需預約 timed-entry",
            must: true,
            time: "2-3hr",
            coord: "Air & Space Museum",
          },
          {
            name: "Natural History Museum",
            desc: "免費！恐龍 + Hope Diamond",
            must: true,
            time: "2-3hr",
            coord: "Natural History Museum",
          },
          {
            name: "NMAAHC",
            desc: "免費！⚠️ 需預約 timed-entry",
            must: true,
            time: "3-4hr",
            coord: "NMAAHC",
          },
          {
            name: "🌸 Tidal Basin 櫻花",
            desc: "Cherry Blossom Festival 3/20-4/12！Peak Bloom 3/28-31",
            must: true,
            time: "1hr",
            coord: "Tidal Basin",
          },
          { name: "Georgetown", desc: "M Street 購物 + 水岸", time: "2-3hr", coord: "Georgetown" },
          {
            name: "Library of Congress",
            desc: "全球最大圖書館",
            time: "1-2hr",
            coord: "Library of Congress",
          },
          {
            name: "Arlington Cemetery",
            desc: "JFK 墓地 + 衛兵換崗",
            time: "2hr",
            coord: "Arlington Cemetery",
          },
          {
            name: "Vietnam Memorial",
            desc: "58,000+陣亡名字",
            time: "30min",
            coord: "Vietnam Memorial",
          },
          {
            name: "Spy Museum",
            desc: "互動間諜博物館 $25",
            time: "2-3hr",
            coord: "Spy Museum",
          },
          {
            name: "National Gallery",
            desc: "免費！2026 Semiquincentennial 特展",
            time: "2-3hr",
            coord: "National Gallery",
          },
        ],
      },
      eat: {
        title: "🍽️ 吃的 / 美食",
        items: [
          {
            name: "Old Ebbitt Grill",
            desc: "白宮旁最古老餐廳 (1856)",
            must: true,
            price: "$$$",
            coord: "Old Ebbitt Grill",
          },
          {
            name: "Ben's Chili Bowl",
            desc: "DC 靈魂食物 half-smoke",
            must: true,
            price: "$",
            coord: "Ben's Chili Bowl",
          },
          {
            name: "Zaytinya (José Andrés)",
            desc: "地中海 tapas，Bib Gourmand",
            must: true,
            price: "$$$",
            coord: "Zaytinya",
          },
          {
            name: "Jaleo (José Andrés)",
            desc: "西班牙 tapas",
            price: "$$$",
            coord: "Jaleo",
          },
          {
            name: "Albi",
            desc: "DC #1 餐廳！石榴釉燒雞",
            must: true,
            price: "$$$",
            coord: "Albi",
          },
          {
            name: "Moon Rabbit",
            desc: "越南 fusion，DC 美食家最愛",
            must: true,
            price: "$$$",
            coord: "Moon Rabbit",
          },
          {
            name: "The Dabney",
            desc: "木炭爐火 farm-to-table",
            price: "$$$$",
            coord: "The Dabney",
          },
          { name: "Maketto", desc: "柬埔寨+台灣 fusion", price: "$$", coord: "Dukem" },
          {
            name: "Ethiopian 衣索比亞料理",
            desc: "全美最大衣索比亞社區！推薦 Dukem",
            must: true,
            price: "$$",
            coord: "Dukem",
          },
        ],
      },
      buy: {
        title: "🛍️ 買的 / 購物",
        items: [
          { name: "Georgetown M Street", desc: "150+時尚專門店", coord: "Georgetown" },
          { name: "Smithsonian Gift Shops", desc: "博物館紀念品 + 太空食物", coord: "Air & Space Museum" },
          { name: "Eastern Market", desc: "週末農夫市集 + 手工藝品", coord: "Eastern Market" },
        ],
      },
    },
  },
};

export const itinerary: ItineraryDay[] = [
  {
    date: "3/30 (一)",
    city: "boston",
    title: "抵達波士頓 → Freedom Trail + North End",
    hotel: "波士頓住宿",
    schedule: [
      { time: "11:41", act: "✈️ 飛機降落 Logan Airport", icon: "✈️", coord: "Logan Airport" },
      { time: "12:30", act: "搭地鐵到住處 check in 放行李", icon: "🚇" },
      { time: "13:30", act: "Quincy Market 午餐，喝碗 Clam Chowder", icon: "🍲", coord: "Quincy Market" },
      {
        time: "14:00-17:00",
        act: "Freedom Trail：Boston Common → Beacon Hill (Acorn St) → Faneuil Hall",
        icon: "🚶",
        coord: "Freedom Trail",
      },
      {
        time: "17:00-18:30",
        act: "Neptune Oyster lobster roll 🦞 或 Mamma Maria",
        icon: "🦞",
        coord: "Neptune Oyster",
      },
      { time: "18:30-19:00", act: "Mike's Pastry cannoli (Cash Only!)", icon: "🍰", coord: "Mike's Pastry" },
      {
        time: "19:00-19:30",
        act: "Skinny House 拍照 → Bunker Hill 外觀",
        icon: "📸",
        coord: "Skinny House",
      },
      { time: "19:30-20:00", act: "L.A. Burdick hot chocolate", icon: "☕", coord: "L.A. Burdick" },
      { time: "20:00", act: "回飯店休息，明天早起！", icon: "🌙" },
    ],
  },
  {
    date: "3/31 (二)",
    city: "boston",
    title: "Harvard & MIT → 火車到紐約",
    hotel: "Arlo NoMad (NYC)",
    schedule: [
      { time: "06:45", act: "搭紅線到 Harvard 站 (~25min)", icon: "🚇" },
      {
        time: "07:15-08:05",
        act: "🎓 Harvard：Johnston Gate → John Harvard Statue → Widener Library → Memorial Church",
        icon: "🎓",
        coord: "Harvard University",
      },
      { time: "08:05-08:15", act: "Harvard Coop 買紀念品", icon: "🛍️", coord: "Harvard Coop" },
      {
        time: "08:20-08:55",
        act: "🔬 MIT：Great Dome + Stata Center 拍照",
        icon: "🔬",
        coord: "Stata Center",
      },
      { time: "09:00-09:20", act: "紅線到 South Station", icon: "🚇", coord: "South Station" },
      { time: "09:30", act: "Amtrak → NYC Penn Station (~3.5hr)", icon: "🚆" },
      { time: "13:00", act: "抵達 NYC → check in Arlo NoMad", icon: "🏨", coord: "Arlo NoMad" },
      {
        time: "14:00-15:30",
        act: "Empire State Building 觀景台",
        icon: "🏙️",
        coord: "Empire State Building",
      },
      {
        time: "15:30-16:00",
        act: "散步 Flatiron + Madison Square Park",
        icon: "🚶",
        coord: "Flatiron Building",
      },
      {
        time: "16:30-18:00",
        act: "Chelsea Market + Los Tacos No.1 🌮",
        icon: "🌮",
        coord: "Chelsea Market",
      },
      { time: "18:00-19:00", act: "High Line 日落 → Little Island", icon: "🌅", coord: "High Line" },
      {
        time: "19:30-21:00",
        act: "Atomix 韓式 fine dining (需訂位)",
        icon: "🍽️",
        coord: "Atomix",
      },
      { time: "21:00", act: "Times Square 夜景", icon: "✨", coord: "Times Square" },
    ],
  },
  {
    date: "4/1 (三)",
    city: "nyc",
    title: "自由女神 → Brooklyn Bridge → Broadway",
    hotel: "M Social Times Square",
    schedule: [
      {
        time: "07:00-08:00",
        act: "Russ & Daughters lox bagel 🥯 或 Katz's pastrami",
        icon: "🥯",
        coord: "Russ & Daughters",
      },
      { time: "08:30", act: "Battery Park 搭 9AM 渡輪 → Statue of Liberty", icon: "⛴️", coord: "Battery Park" },
      {
        time: "09:00-12:00",
        act: "🗽 Liberty Island + Ellis Island",
        icon: "🗽",
        coord: "Statue of Liberty",
      },
      { time: "12:30", act: "Wall Street + Charging Bull 拍照", icon: "🐂", coord: "Wall Street" },
      { time: "13:00", act: "The Oculus 建築朝聖", icon: "🕊️", coord: "The Oculus" },
      {
        time: "13:30-14:30",
        act: "走 Brooklyn Bridge → DUMBO 拍照",
        icon: "🌉",
        coord: "Brooklyn Bridge",
      },
      {
        time: "14:30-15:15",
        act: "DUMBO 午餐 + Manhattan Bridge 網美照",
        icon: "🍕",
        coord: "DUMBO",
      },
      {
        time: "15:30-17:00",
        act: "Top of the Rock 觀景台 (日落時段)",
        icon: "🌆",
        coord: "Top of the Rock",
      },
      {
        time: "17:00-17:30",
        act: "St. Patrick's Cathedral + 第五大道",
        icon: "⛪",
        coord: "St. Patrick's Cathedral",
      },
      { time: "18:00-20:30", act: "🎭 Broadway 看秀", icon: "🎭", coord: "Broadway" },
      { time: "21:00", act: "check in M Social Hotel", icon: "🏨", coord: "M Social Hotel" },
    ],
  },
  {
    date: "4/2 (四)",
    city: "flushing",
    title: "The Met → 法拉盛掃街 → 唐人街",
    hotel: "Flushing 住宿",
    schedule: [
      {
        time: "08:00-08:30",
        act: "Levain Bakery 巨大 cookie 🍪",
        icon: "🍪",
        coord: "Levain Bakery",
      },
      {
        time: "08:30-09:30",
        act: "Central Park (Bethesda → Bow Bridge)",
        icon: "🌳",
        coord: "Bethesda Fountain",
      },
      { time: "10:00-12:00", act: "🖼️ The Met 大都會博物館", icon: "🖼️", coord: "The Met" },
      { time: "12:15", act: "搭 7 號線 → Flushing (~40min)", icon: "🚇" },
      {
        time: "13:00",
        act: "🥟 南翔小籠包 或 Shanghai You Garden",
        icon: "🥟",
        coord: "Nan Xiang",
      },
      {
        time: "13:45",
        act: "New World Mall 地下美食廣場掃街",
        icon: "🍜",
        coord: "New World Mall",
      },
      {
        time: "14:30",
        act: "White Bear 紅油抄手 + 豆花莊",
        icon: "🥡",
        coord: "White Bear",
      },
      {
        time: "15:00-16:00",
        act: "法拉盛閒逛：珍奶🧋、糖葫蘆、Yeh's 蛋糕",
        icon: "🧋",
        coord: "Flushing Main St",
      },
      { time: "16:00-17:30", act: "Check in / 休息消化", icon: "🏨" },
      {
        time: "18:30",
        act: "🥮 Nom Wah Tea Parlor + Doyers Street",
        icon: "🥮",
        coord: "Nom Wah Tea Parlor",
      },
      {
        time: "19:30-20:30",
        act: "唐人街：Mott St → Columbus Park → 大乘寺",
        icon: "🏮",
        coord: "Chinatown",
      },
      {
        time: "20:30",
        act: "Chinatown Ice Cream 黑芝麻冰淇淋 🍦",
        icon: "🍦",
        coord: "Chinatown Ice Cream Factory",
      },
      { time: "21:30", act: "回 Flushing 休息", icon: "🌙" },
    ],
  },
  {
    date: "4/3 (五)",
    city: "dc",
    title: "火車到 DC → 🌸 櫻花 + 紀念碑巡禮",
    hotel: "AC Hotel DC",
    schedule: [
      {
        time: "06:30",
        act: "Eight Jane 煎餅果子 最後早餐",
        icon: "🥞",
        coord: "Eight Jane Foods",
      },
      { time: "08:00", act: "Penn Station Amtrak → DC (~3.5hr)", icon: "🚆" },
      {
        time: "11:30",
        act: "抵達 Union Station → AC Hotel check in",
        icon: "🏨",
        coord: "Union Station DC",
      },
      {
        time: "12:30",
        act: "🌭 Ben's Chili Bowl half-smoke",
        icon: "🌭",
        coord: "Ben's Chili Bowl",
      },
      { time: "13:30", act: "🌸 Tidal Basin 櫻花散步！", icon: "🌸", coord: "Tidal Basin" },
      {
        time: "14:00",
        act: "Jefferson Memorial + FDR Memorial",
        icon: "🏛️",
        coord: "Jefferson Memorial",
      },
      { time: "14:30", act: "MLK Memorial", icon: "🏛️", coord: "MLK Memorial" },
      {
        time: "15:00",
        act: "Lincoln Memorial 林肯紀念堂",
        icon: "🏛️",
        coord: "Lincoln Memorial",
      },
      {
        time: "15:30",
        act: "Vietnam Veterans Wall + Korean War Memorial",
        icon: "🏛️",
        coord: "Vietnam Memorial",
      },
      { time: "16:00", act: "Washington Monument", icon: "🗼", coord: "Washington Monument" },
      { time: "16:30", act: "White House 外觀拍照", icon: "🏛️", coord: "White House" },
      {
        time: "17:30-19:00",
        act: "晚餐：Zaytinya 或 Moon Rabbit",
        icon: "🍽️",
        coord: "Zaytinya",
      },
      {
        time: "19:30-20:30",
        act: "🌙 National Mall 夜景（紀念碑打燈超美）",
        icon: "🌙",
        coord: "Lincoln Memorial",
      },
    ],
  },
  {
    date: "4/4 (六)",
    city: "dc",
    title: "Smithsonian 博物館 + Georgetown + 大餐",
    hotel: "AC Hotel DC",
    schedule: [
      {
        time: "09:00-11:30",
        act: "🚀 Air & Space Museum (需預約)",
        icon: "🚀",
        coord: "Air & Space Museum",
      },
      {
        time: "11:30-13:30",
        act: "💎 Natural History Museum (恐龍+Hope Diamond)",
        icon: "💎",
        coord: "Natural History Museum",
      },
      {
        time: "13:30",
        act: "Old Ebbitt Grill 午餐 (1856)",
        icon: "🦪",
        coord: "Old Ebbitt Grill",
      },
      {
        time: "14:30",
        act: "Capitol + Library of Congress",
        icon: "📚",
        coord: "Library of Congress",
      },
      {
        time: "16:00-17:30",
        act: "Georgetown M Street 購物 + 水岸",
        icon: "🛍️",
        coord: "Georgetown",
      },
      {
        time: "17:30",
        act: "Baked & Wired 咖啡+cupcake",
        icon: "☕",
        coord: "Baked and Wired",
      },
      {
        time: "18:30-20:00",
        act: "🔥 大餐：Albi (DC#1) / The Dabney / Rose's Luxury",
        icon: "🔥",
        coord: "Albi",
      },
      {
        time: "20:00-21:00",
        act: "Ethiopian 咖啡 @ Dukem",
        icon: "☕",
        coord: "Dukem",
      },
      { time: "21:00", act: "回飯店收行李 🧳", icon: "🧳" },
    ],
  },
  {
    date: "4/5 (日)",
    city: "dc",
    title: "DC → 火車回喬治亞州",
    hotel: "—",
    schedule: [
      { time: "08:00", act: "如有時間：Spy Museum 或 NMAAHC", icon: "🏛️", coord: "Spy Museum" },
      { time: "09:00", act: "Eastern Market 農夫市集", icon: "🛒", coord: "Eastern Market" },
      {
        time: "10:30",
        act: "Union Station 搭火車回家 🚆",
        icon: "🚆",
        coord: "Union Station DC",
      },
      { time: "路上", act: "回味美東之旅！🎉", icon: "🎉" },
    ],
  },
];

export const colorMap: ColorMapType = {
  boston: "#B33A3A",
  nyc: "#1a1a2e",
  flushing: "#C41E3A",
  dc: "#002147",
};
