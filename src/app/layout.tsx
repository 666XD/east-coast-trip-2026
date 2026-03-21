import type { Metadata } from "next";
import { Noto_Sans_TC, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Leo's 2026 美東之旅完全攻略",
  description: "Boston → NYC → Flushing → Washington DC ・ 7天6夜東岸之旅",
  icons: { icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎒</text></svg>" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-gray-900 font-[var(--font-noto-sans-tc)]">
        {children}
      </body>
    </html>
  );
}
