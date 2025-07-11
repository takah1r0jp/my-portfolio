export const profileData = {
  name: "鶴巻敬大",
  nameEn: "Takahiro Tsurumaki",
  title: "AI Research & Development",
  subtitle: "Computer Vision · Anomaly Detection · Machine Learning",
  affiliation: "東北大学大学院 情報科学研究科",
  location: "仙台, 日本",
  
  about: {
    introduction: "画像認識・コンピュータビジョン専門のAI研究者として、産業用画像の異常検知手法の開発に取り組んでいます。東北大学大学院で3.5年での学部早期卒業を経て、現在は修士課程で最先端の研究を行っています。",
    education: [
      {
        degree: "修士課程",
        school: "東北大学大学院 情報科学研究科",
        field: "システム情報科学専攻",
        period: "2024年4月 - 現在",
        specialization: "画像認識・コンピュータビジョン"
      },
      {
        degree: "学士（早期卒業）",
        school: "東北大学",
        field: "情報科学部",
        period: "2020年4月 - 2024年3月",
        note: "3.5年で早期卒業"
      }
    ],
    certifications: [
      {
        name: "G検定",
        organization: "日本ディープラーニング協会",
        year: "2023"
      },
      {
        name: "E資格",
        organization: "日本ディープラーニング協会",
        year: "2024"
      }
    ]
  },

  techStack: {
    aiMl: ["PyTorch", "TensorFlow", "OpenCV", "scikit-learn", "NumPy", "Pandas"],
    programming: ["Python", "JavaScript", "TypeScript", "C++", "MATLAB"],
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
        "リアルタイム異常検知",
        "高精度な欠陥分類",
        "ユーザーフレンドリーなインターフェース"
      ],
      github: "https://github.com/username/anomaly-detection",
      demo: "https://anomaly-detection-demo.streamlit.app"
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
        "リアルタイム異常検知",
        "結果の可視化"
      ],
      demo: "https://anomaly-detection-demo.streamlit.app"
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
      title: "深層学習を用いた製造業向け異常検知システムの開発",
      authors: ["鶴巻敬大", "指導教授"],
      venue: "MIRU2025",
      type: "poster",
      year: "2025",
      status: "accepted"
    }
  ],

  experience: [
    {
      company: "株式会社zero to one",
      position: "インターン",
      period: "2024年10月 - 現在",
      description: "AIの講義教材の作成やコンテンツ作成に従事",
      responsibilities: [
        "AI教育コンテンツの企画・制作",
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
    email: "takahiro.tsurumaki@example.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username"
  }
};