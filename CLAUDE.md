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

### カラーパレット
- **プライマリ**: 深いブルー系（学術的で信頼感）
- **セカンダリ**: グレー系（洗練された印象）
- **アクセント**: 明るいブルーまたはグリーン（技術的な印象）

### タイポグラフィ
- **見出し**: Inter または Noto Sans JP
- **本文**: システムフォント + 日本語対応

### レイアウト
- **単一ページ**: スムーズなスクロールナビゲーション
- **セクション分け**: 明確な区切りとホワイトスペース
- **レスポンシブ**: モバイルファーストアプローチ

## 主要機能

### 1. 多言語対応
- 日本語/英語の切り替え
- URLパラメータまたはローカルストレージでの言語記憶

### 2. スムーズナビゲーション
- アンカーリンクによるセクション間移動
- スクロールスパイ機能

### 3. アニメーション
- フェードイン・スライドインアニメーション
- ホバーエフェクト
- スクロールトリガーアニメーション

### 4. SEO対策
- 適切なメタタグ設定
- 構造化データの実装
- 最適化されたパフォーマンス

## ファイル構成

```

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

