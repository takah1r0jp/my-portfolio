export const profileData = {
  name: "鶴巻 敬大",
  nameEn: "Takahiro Tsurumaki",
  title: "AI Research & Development",
  subtitle: "Computer Vision · Anomaly Detection · Machine Learning",
  affiliation: "東北大学大学院 情報科学研究科",
  location: "仙台, 日本",
  
  about: {
    introduction: "画像認識・コンピュータビジョン専門のAI研究者として、産業用画像の異常検知手法の開発に取り組んでいます。東北大学工学部で3.5年での早期卒業を経て、現在は東北大学大学院情報科学研究科の修士課程で最先端の研究を行っています。",
    education: [
      {
        degree: "修士課程",
        school: "東北大学大学院 情報科学研究科",
        field: "システム情報科学専攻",
        period: "2024年10月 - 現在",
        specialization: "画像認識・コンピュータビジョン"
      },
      {
        degree: "学士（早期卒業）",
        school: "東北大学",
        field: "工学部 機械知能・航空工学科",
        period: "2021年4月 - 2024年9月",
        note: "3.5年で早期卒業"
      }
    ],
    certifications: [
      {
        name: "G検定",
        organization: "日本ディープラーニング協会",
        year: "2024"
      },
      {
        name: "E資格",
        organization: "日本ディープラーニング協会",
        year: "2025"
      }
    ]
  },

  techStack: {
    aiMl: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "NumPy", "Pandas"],
    programming: ["Python", "JavaScript", "TypeScript"],
    webDev: ["React", "Next.js", "Streamlit", "HTML/CSS", "Tailwind CSS"],
    tools: ["Git", "Docker", "AWS", "Jupyter", "Linux", "PostgreSQL"]
  },

  projects: [
    {
      id: 1,
      title: "産業用画像異常検知システム",
      description: "深層学習を用いた製造業向けの異常検知システムの開発。リアルタイムでの欠陥検出が可能。",
      technologies: ["PyTorch", "OpenCV", "Python", "Streamlit"],
      category: "research",
      status: "ongoing",
      features: [
        "論理的異常を対象",
        "LLMを活用した学習不要の異常検知フレームワーク"
      ],
      github: "https://github.com/takah1r0jp/LLM4AD",
    },
    {
      id: 2,
      title: "PKSHAハッカソン2025 優勝作品",
      description: "旅行プランを生成するAIシステムのアルゴリズム部分を担当。チームでの協力により最優秀賞を受賞。",
      technologies: ["Python", "Machine Learning", "API Integration"],
      category: "hackathon",
      status: "completed",
      achievement: "最優秀賞受賞",
      role: "アルゴリズムエンジニア",
      features: [
        "自然言語処理による要求理解",
        "最適化アルゴリズムによるプラン生成",
        "リアルタイム推薦システム"
      ]
    },
    {
      id: 3,
      title: "異常検知体験アプリケーション",
      description: "研究成果をデモンストレーション用に一般向けに公開したWebアプリケーション。",
      technologies: ["Streamlit", "PyTorch", "Python"],
      category: "demo",
      status: "completed",
      features: [
        "ドラッグ&ドロップでの画像アップロード",
        "異常検知プログラムの自動生成体験",
        "結果の可視化"
      ],
      demo: "https://takah1r0jp-streamlit-ad-app-appmain-ghw67a.streamlit.app"
    }
  ],

  research: [
    {
      title: "産業用画像の異常検知手法の開発",
      description: "製造業における品質管理の自動化を目指した異常検知システムの研究開発",
      status: "ongoing",
      period: "2024年4月 - 現在",
      keywords: ["異常検知", "コンピュータビジョン", "深層学習", "品質管理"]
    }
  ],

  publications: [
    {
      title: "大規模言語モデルを用いたプログラム自動生成による論理的異常の画像検知",
      authors: ["鶴巻敬大", "細矢悠介", "岡谷貴之"],
      venue: "MIRU2025",
      type: "poster",
      year: "2025",
    }
  ],

  experience: [
    {
      company: "株式会社zero to one",
      position: "インターン",
      period: "2024年10月 - 現在",
      description: "AIの講義教材の作成やコンテンツ作成に従事",
      responsibilities: [
        "AI教育コンテンツの制作",
        "技術文書の執筆",
        "講義資料の作成"
      ]
    }
  ],

  achievements: [
    {
      title: "PKSHAハッカソン2025",
      result: "最優秀賞",
      year: "2025",
      description: "旅行プラン生成AIの開発でアルゴリズム部分を担当"
    }
  ],

  contact: {
    email: "takahiro.cvdev@gmail.com",
    github: "https://github.com/takah1r0jp",
    x: "https://x.com/TCvlab78380",
    qiita: "https://qiita.com/takah1r0_tt",
  }
};