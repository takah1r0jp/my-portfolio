# AI研究者ポートフォリオサイト

## 概要
東北大学大学院のAI研究者のための、シンプルで洗練されたポートフォリオサイトです。コンピュータビジョンと異常検知を専門とする研究者の学術的成果とプロジェクトを効果的に紹介します。

## 技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **デプロイ**: Vercel
- **アニメーション**: Framer Motion (必要に応じて)

## サイト構成

### ヘッダー (Header)
- ナビゲーションメニュー
- 日本語/英語の切り替え機能
- レスポンシブデザイン

### ヒーロー (Hero)
- 名前（英語）と自己紹介文の表示
- プロフィール画像

### Education
- 東北大学工学部 機械知能・航空工学科
- 東北大学大学院 情報科学研究科 システム情報科学専攻

### Projects
- 産業用画像の異常検知手法の研究
- 異常検知体験アプリケーション
- PKSHAハッカソン2025 優勝作品

### Work Experience
- Intership: 株式会社 zero-to-one
  - 2024/10〜現在
- 3days Bussines Intership: 株式会社 onecarrer
  - 2025/3
- 3days Hackathon: PKSHA Technology
  - 2025/6

### 実績
- 東北地区大学軟式野球連盟 連盟委員長
  - 2023年度
- 東北大学工学部 3.5年の早期卒業
- PKSHA HACKATHON 2025 最優秀賞

### 5. Skill
資格
- G検定：2024年11月
- E資格 : 2025年2月
言語
- python
- Javascript
フレームワーク
- react
- Next.js


## デザイン方針

### カラーパレット（厳格に制限）
- **プライマリ**: 純粋な黒 (#000000) - 文字、境界線、アクセント
- **セカンダリ**: 白 (#FFFFFF) - 背景、カード
- **グレー系**: 
  - Light Gray (#F5F5F5) - 全体背景
  - Medium Gray (#666666, #999999) - セカンダリテキスト
  - Dark Gray (#333333) - サブテキスト
- **透明度**: rgba(0,0,0,0.1-0.8) - 影、ボーダー、オーバーレイ

**重要**: 青、緑、赤など他の色は一切使用禁止。モノクロームデザインを厳守。

### タイポグラフィ階層
- **Display**: font-weight: 300, letter-spacing: -0.025em (大見出し)
- **Heading**: font-weight: 500, letter-spacing: -0.02em (見出し)
- **Body**: font-weight: 400, letter-spacing: 0.01em (本文)
- **Caption**: font-weight: 400, letter-spacing: 0.05em, uppercase (キャプション)
- **フォントファミリー**: Inter + Noto Sans JP

### レイアウト設計
- **カードベース**: 各セクションを角丸の白いカードで囲む
- **最大幅**: 1200px中央寄せレイアウト
- **余白システム**: 
  - Desktop: 64px
  - Large Tablet: 48px  
  - Tablet: 32px
  - Mobile: 24px
- **カード間隔**: 2rem (32px) 縦方向
- **レスポンシブ**: モバイルファーストアプローチ

## 主要機能

### 1. 多言語対応
- 日本語/英語の切り替え
- URLパラメータまたはローカルストレージでの言語記憶

### 2. スムーズナビゲーション
- アンカーリンクによるセクション間移動
- スクロールスパイ機能

### 3. アニメーション（ミニマル）
- **エントランス**: フェードイン・スライドアップ (0.8s ease-out)
- **ホバーエフェクト**: 透明度変化 (opacity: 0.5-0.7)
- **カードホバー**: 微細な影の変化とtranslateY(-2px)
- **トランジション**: 0.3s ease (色、背景、境界線、変形、影、透明度)
- **原則**: 装飾的でなく機能的なアニメーションのみ

### 4. SEO対策
- 適切なメタタグ設定
- 構造化データの実装
- 最適化されたパフォーマンス

## ファイル構成

```
src/
├── app/
│   ├── globals.css          # グローバルスタイル（モノクローム制限）
│   ├── layout.tsx           # レイアウト設定
│   └── page.tsx             # メインページ（カードレイアウト）
├── components/
│   ├── Header.tsx           # ヘッダー（グラデーション、ナビゲーション）
│   ├── Hero.tsx             # ヒーローセクション（大型タイポグラフィ）
│   ├── Education.tsx        # 教育歴（タイムライン形式）
│   ├── Projects.tsx         # プロジェクト（番号付きレイアウト）
│   ├── WorkExperience.tsx   # 職歴（グリッドレイアウト）
│   ├── Achievements.tsx     # 実績（クリーンプレゼンテーション）
│   ├── Skills.tsx           # スキル（カテゴリ分け）
│   ├── LanguageProvider.tsx # 多言語プロバイダー
│   └── ui/
│       ├── Card.tsx         # カードコンポーネント
│       ├── Button.tsx       # ボタンコンポーネント
│       └── LanguageSwitch.tsx # 言語切り替え
├── data/
│   ├── content.ts           # 多言語コンテンツ
│   └── profile.ts           # プロフィールデータ
├── hooks/
│   └── useLanguage.ts       # 言語フック
└── utils/
    └── cn.ts                # クラス名ユーティリティ
```

## Vercelデプロイ設定

### 環境変数
```
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

### build設定
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## パフォーマンス最適化

### 1. 画像最適化
- Next.js Image コンポーネントの使用
- WebP形式の活用
- 遅延読み込み

### 2. コード分割
- 動的インポート
- React.lazy とSuspense

### 3. SEO
- sitemap.xml の生成
- robots.txt の設定
- Open Graph メタタグ

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番環境での起動
npm start

# 型チェック
npm run typecheck

# リント
npm run lint
```

## デザイン制約

### 🚫 禁止事項
- **カラー**: 青、緑、赤、黄色など一切の色彩使用禁止
- **装飾**: 不必要なグラデーション、パターン、テクスチャ禁止
- **アニメーション**: 過度な動き、回転、拡縮エフェクト禁止

### ✅ 許可されるスタイル
- **色**: 黒 (#000000)、白 (#FFFFFF)、グレー系のみ
- **影**: rgba(0,0,0,0.05-0.1) の微細な影のみ
- **境界線**: 1px solid rgba(0,0,0,0.1-0.2)
- **透明度**: ホバー時の opacity 変化のみ
- **変形**: translateY(-2px) 程度の微細な移動のみ

### 🎯 デザイン原則
1. **ミニマリズム**: 要素を最小限に絞る
2. **機能性重視**: 見た目より使いやすさを優先
3. **一貫性**: 全セクションで統一されたスタイル
4. **読みやすさ**: 十分なコントラストと余白の確保
5. **プロフェッショナル**: 学術的で信頼感のある印象

