import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "鶴巻敬大（Takahiro Tsurumaki）",
  description: "東北大学大学院でAI・機械学習・コンピュータビジョンを研究する鶴巻敬大のポートフォリオサイト。産業用画像の異常検知システム開発、PKSHAハッカソン2025優勝、研究成果とプロジェクトを紹介。",
  keywords: ["AI", "機械学習", "コンピュータビジョン", "異常検知", "画像認識", "東北大学", "研究者", "エンジニア"],
  authors: [{ name: "鶴巻敬大", url: "https://github.com/username" }],
  creator: "鶴巻敬大",
  publisher: "鶴巻敬大",
  openGraph: {
    title: "鶴巻敬大（Takahiro Tsurumaki）",
    description: "AI・機械学習・コンピュータビジョン専門の研究者。産業用画像の異常検知システム開発を行っています。",
    url: "https://yourportfolio.com",
    siteName: "鶴巻敬大 Portfolio",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "鶴巻敬大（Takahiro Tsurumaki）",
    description: "AI・機械学習・コンピュータビジョン専門の研究者",
    creator: "@username",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
