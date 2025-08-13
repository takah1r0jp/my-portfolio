# AI研究者ポートフォリオサイト

東北大学大学院でAI・機械学習・コンピュータビジョンを研究する鶴巻敬大のポートフォリオサイトです。

## 🌍 Web Page

**[https://takah1r0.vercel.app/](https://takah1r0.vercel.app/)**

## 🌟 特徴

- **モダンなデザイン**: Next.js 15 + TypeScript + Tailwind CSSで構築
- **レスポンシブ対応**: モバイルファースト設計
- **アニメーション**: Framer Motionによるスムーズなアニメーション
- **SEO最適化**: 完全なメタデータ設定
- **アクセシビリティ**: WCAG準拠のアクセシブルなUI

## 📂 プロジェクト構成

```
src/
├── app/
│   ├── globals.css     # グローバルスタイル
│   ├── layout.tsx      # レイアウト・メタデータ
│   └── page.tsx        # メインページ
├── components/
│   ├── Header.tsx      # ヘッダー・ナビゲーション
│   ├── Hero.tsx        # ヒーローセクション
│   ├── About.tsx       # 自己紹介・経歴
│   ├── Projects.tsx    # プロジェクト一覧
│   ├── Research.tsx    # 研究・論文
│   ├── Experience.tsx  # 職歴・受賞歴
│   └── Contact.tsx     # 連絡先
├── data/
│   └── profile.ts      # プロフィールデータ
└── lib/
    └── utils.ts        # ユーティリティ関数
```

## 🔧 技術スタック

### フロントエンド
- **Next.js 15**: React フレームワーク
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **Framer Motion**: アニメーション
- **Lucide React**: アイコン

### 開発・品質管理
- **ESLint**: コード品質チェック
- **TypeScript**: 型チェック
- **Responsive Design**: 全デバイス対応

## 🚀 開発手順

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、[http://localhost:3000](http://localhost:3000)でアクセス可能です。

### 3. プロダクションビルド

```bash
npm run build
```

### 4. コード品質チェック

```bash
npm run lint
```

## 📝 カスタマイズ方法

### プロフィール情報の更新

`src/data/profile.ts`ファイルを編集してプロフィール情報を更新できます：

```typescript
export const profileData = {
  name: "あなたの名前",
  title: "あなたの専門分野",
  // ... その他の情報
}
```

### 新しいプロジェクトの追加

`profile.ts`の`projects`配列に新しいプロジェクトを追加：

```typescript
{
  id: 4,
  title: "新しいプロジェクト",
  description: "プロジェクトの説明",
  technologies: ["Python", "React"],
  category: "research",
  status: "completed",
  github: "https://github.com/username/project",
  demo: "https://demo.com"
}
```

### 研究成果の追加

`publications`配列に新しい論文・発表を追加：

```typescript
{
  title: "論文のタイトル",
  authors: ["著者名"],
  venue: "学会名",
  type: "paper",
  year: "2025",
  status: "published"
}
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: Blue (600-800)
- **セカンダリ**: Purple (600-800)
- **アクセント**: Green, Yellow, Orange
- **グレースケール**: Gray (50-900)

### タイポグラフィ
- **見出し**: Geist Sans (600-700)
- **本文**: Geist Sans (400-500)
- **コード**: Geist Mono

### アニメーション
- **入場**: Fade in + Slide up
- **ホバー**: Scale + Shadow
- **スクロール**: Smooth scroll behavior

## 📱 レスポンシブ対応

- **Mobile**: 320px-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px以上

## 🔍 SEO最適化

- **メタタグ**: タイトル、説明、キーワード
- **Open Graph**: SNSでの共有最適化
- **Twitter Cards**: Twitter専用メタデータ
- **構造化データ**: 検索エンジン最適化

## 🌐 デプロイ

### Vercel (推奨)

```bash
npm install -g vercel
vercel
```

### Netlify

1. プロジェクトをGitHubにプッシュ
2. Netlifyでリポジトリを接続
3. ビルドコマンド: `npm run build`
4. 公開ディレクトリ: `.next`

## 🤝 コントリビューション

1. フォークしてクローン
2. 新しいブランチを作成
3. 変更をコミット
4. プルリクエストを送信

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [Framer Motion](https://www.framer.com/motion/) - アニメーションライブラリ
- [Lucide](https://lucide.dev/) - アイコンライブラリ

---

**作成者**: 鶴巻敬大  
**Portfolio**: [https://takah1r0.vercel.app/](https://takah1r0.vercel.app/)  
**GitHub**: https://github.com/takah1r0jp
