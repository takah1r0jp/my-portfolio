export const translations = {
  ja: {
    // Navigation
    nav: {
      education: "学歴",
      projects: "プロジェクト", 
      experience: "経験",
      achievements: "実績",
      skills: "スキル",
      contact: "連絡先"
    },
    
    // Hero Section
    hero: {
      title: "鶴巻 敬大",
      subtitle: "AI Research & Development",
      description: "Computer Vision · Anomaly Detection · Machine Learning",
      affiliation: "東北大学大学院 情報科学研究科",
      location: "仙台, 日本",
      introduction: "画像認識・コンピュータビジョン専門のAI研究者として、産業用画像の異常検知手法の開発に取り組んでいます。東北大学工学部で3.5年での早期卒業を経て、現在は東北大学大学院情報科学研究科の修士課程で最先端の研究を行っています。"
    },

    // Education Section
    education: {
      title: "学歴",
      subtitle: "学術的な経歴と専門分野",
      items: [
        {
          degree: "修士課程",
          school: "東北大学大学院",
          field: "情報科学研究科 システム情報科学専攻",
          period: "2024年10月 - 現在",
          specialization: "画像認識・コンピュータビジョン",
          description: "コンピュータビジョンと異常検知を専門とし、産業応用に向けた実用的な手法の開発に取り組んでいます。"
        },
        {
          degree: "学士（早期卒業）",
          school: "東北大学",
          field: "工学部 機械知能・航空工学科",
          period: "2021年4月 - 2024年9月",
          note: "3.5年で早期卒業",
          description: "機械学習とデータサイエンスの基礎を学び、優秀な成績で早期卒業を達成しました。"
        }
      ]
    },

    // Projects Section
    projects: {
      title: "プロジェクト",
      subtitle: "研究開発プロジェクトと技術実装",
      items: [
        {
          title: "産業用画像異常検知システム",
          description: "深層学習を用いた製造業向けの異常検知システムの開発。リアルタイムでの欠陥検出が可能。",
          technologies: ["PyTorch", "OpenCV", "Python", "Streamlit"],
          category: "研究",
          status: "進行中",
          features: [
            "論理的異常を対象",
            "LLMを活用した学習不要の異常検知フレームワーク",
            "従来手法比較で20%精度向上を達成"
          ],
          link: "https://github.com/takah1r0jp/LLM4AD"
        },
        {
          title: "PKSHAハッカソン2025 優勝作品",
          description: "旅行プランを生成するAIシステムのアルゴリズム部分を担当。チームでの協力により最優秀賞を受賞。",
          technologies: ["Python", "Machine Learning", "API Integration"],
          category: "ハッカソン",
          status: "完了",
          achievement: "最優秀賞受賞",
          role: "アルゴリズムエンジニア",
          features: [
            "自然言語処理による要求理解",
            "最適化アルゴリズムによるプラン生成",
            "リアルタイム推薦システム"
          ]
        },
        {
          title: "異常検知体験アプリケーション",
          description: "研究成果をデモンストレーション用に一般向けに公開したWebアプリケーション。",
          technologies: ["Streamlit", "PyTorch", "Python"],
          category: "デモ",
          status: "完了",
          features: [
            "ドラッグ&ドロップでの画像アップロード",
            "異常検知プログラムの自動生成体験",
            "結果の可視化"
          ],
          demo: "https://takah1r0jp-streamlit-ad-app-appmain-ghw67a.streamlit.app"
        }
      ]
    },

    // Work Experience Section
    workExperience: {
      title: "職歴",
      subtitle: "インターンシップと職務経験",
      items: [
        {
          company: "株式会社 zero-to-one",
          position: "データサイエンスインターン",
          period: "2024年10月 - 現在",
          description: "AIの講義教材の作成やコンテンツ作成に従事",
          responsibilities: [
            "AI教育コンテンツの制作",
            "技術文書の執筆",
            "講義資料の作成"
          ]
        },
        {
          company: "株式会社 onecareer",
          position: "3days ビジネスインターンシップ",
          period: "2025年3月",
          description: "データ分析・ビジネス課題解決",
          responsibilities: [
            "ビジネス課題の分析",
            "データドリブンな解決策の提案",
            "チームでの協力とプレゼンテーション"
          ]
        },
        {
          company: "PKSHA Technology",
          position: "3days ハッカソン参加",
          period: "2025年6月",
          description: "最優秀賞受賞",
          responsibilities: [
            "アルゴリズム設計・実装",
            "機械学習モデルの開発",
            "システム統合"
          ]
        }
      ]
    },

    // Achievements Section
    achievements: {
      title: "実績",
      subtitle: "学術成果と受賞歴",
      academic: {
        title: "学術成果",
        items: [
          {
            title: "東北大学工学部 3.5年早期卒業",
            year: "2024年3月",
            description: "優秀な成績により通常より半年早い卒業を達成"
          },
          {
            title: "PKSHA HACKATHON 2025 最優秀賞",
            year: "2025年6月",
            description: "旅行プラン生成AIの開発でアルゴリズム部分を担当し、チーム優勝に貢献"
          }
        ]
      },
      leadership: {
        title: "組織運営",
        items: [
          {
            title: "東北地区大学軟式野球連盟 連盟委員長",
            year: "2023年度",
            description: "東北地区の大学軟式野球連盟において委員長を務め、大会運営と組織統率を担当"
          }
        ]
      },
      publications: {
        title: "発表論文",
        items: [
          {
            title: "大規模言語モデルを用いたプログラム自動生成による論理的異常の画像検知",
            authors: ["鶴巻敬大", "細矢悠介", "岡谷貴之"],
            venue: "MIRU2025",
            type: "ポスター発表",
            year: "2025"
          }
        ]
      }
    },

    // Skills Section
    skills: {
      title: "スキル",
      subtitle: "技術スタックと専門知識",
      certifications: {
        title: "資格・認定",
        items: [
          {
            name: "G検定",
            organization: "日本ディープラーニング協会",
            year: "2024年11月",
            description: "深層学習の基礎知識を証明する資格"
          },
          {
            name: "E資格",
            organization: "日本ディープラーニング協会", 
            year: "2025年2月（予定）",
            description: "深層学習エンジニアとしての実装スキルを証明する資格"
          }
        ]
      },
      programming: {
        title: "プログラミング言語",
        items: [
          { name: "Python", level: 90, description: "PyTorch, TensorFlow, scikit-learn" },
          { name: "JavaScript/TypeScript", level: 75, description: "React, Next.js, Node.js" },
          { name: "R", level: 60, description: "統計解析・データ可視化" }
        ]
      },
      frameworks: {
        title: "フレームワーク・ライブラリ",
        items: [
          { name: "PyTorch", level: 85 },
          { name: "TensorFlow", level: 75 },
          { name: "React/Next.js", level: 80 },
          { name: "OpenCV", level: 85 },
          { name: "scikit-learn", level: 90 }
        ]
      },
      tools: {
        title: "ツール・インフラ",
        items: [
          { name: "Git", level: 85 },
          { name: "Docker", level: 70 },
          { name: "AWS", level: 65 },
          { name: "Linux", level: 75 },
          { name: "Jupyter", level: 90 }
        ]
      }
    },

    // Common
    common: {
      readMore: "詳細を見る",
      viewProject: "プロジェクトを見る",
      viewDemo: "デモを見る",
      viewCode: "コードを見る",
      period: "期間",
      technologies: "使用技術",
      features: "主な機能",
      achievements: "実績",
      responsibilities: "担当業務",
      status: "ステータス",
      ongoing: "進行中",
      completed: "完了"
    }
  },

  en: {
    // Navigation
    nav: {
      education: "Education",
      projects: "Projects",
      experience: "Experience", 
      achievements: "Achievements",
      skills: "Skills",
      contact: "Contact"
    },

    // Hero Section
    hero: {
      title: "Takahiro Tsurumaki",
      subtitle: "AI Research & Development",
      description: "Computer Vision · Anomaly Detection · Machine Learning",
      affiliation: "Graduate School of Information Sciences, Tohoku University",
      location: "Sendai, Japan",
      introduction: "As an AI researcher specializing in image recognition and computer vision, I am engaged in developing anomaly detection methods for industrial images. After early graduation from Tohoku University's Faculty of Engineering in 3.5 years, I am currently conducting cutting-edge research in the master's program at Tohoku University's Graduate School of Information Sciences."
    },

    // Education Section
    education: {
      title: "Education",
      subtitle: "Academic background and specialization",
      items: [
        {
          degree: "Master's Program",
          school: "Tohoku University Graduate School",
          field: "Information Sciences, Systems Information Science",
          period: "Oct 2024 - Present",
          specialization: "Image Recognition & Computer Vision",
          description: "Specializing in computer vision and anomaly detection, working on developing practical methods for industrial applications."
        },
        {
          degree: "Bachelor's (Early Graduation)",
          school: "Tohoku University",
          field: "Faculty of Engineering, Mechanical and Aerospace Engineering",
          period: "Apr 2021 - Sep 2024",
          note: "Early graduation in 3.5 years",
          description: "Studied fundamentals of machine learning and data science, achieving early graduation with excellent grades."
        }
      ]
    },

    // Projects Section
    projects: {
      title: "Projects",
      subtitle: "Research & development projects and technical implementations",
      items: [
        {
          title: "Industrial Image Anomaly Detection System",
          description: "Development of anomaly detection system for manufacturing using deep learning. Capable of real-time defect detection.",
          technologies: ["PyTorch", "OpenCV", "Python", "Streamlit"],
          category: "Research",
          status: "Ongoing",
          features: [
            "Targeting logical anomalies",
            "Training-free anomaly detection framework utilizing LLM",
            "Achieved 20% accuracy improvement compared to conventional methods"
          ],
          link: "https://github.com/takah1r0jp/LLM4AD"
        },
        {
          title: "PKSHA Hackathon 2025 Winner",
          description: "Responsible for algorithm development of AI system for travel plan generation. Won the grand prize through team collaboration.",
          technologies: ["Python", "Machine Learning", "API Integration"],
          category: "Hackathon",
          status: "Completed",
          achievement: "Grand Prize Winner",
          role: "Algorithm Engineer",
          features: [
            "Natural language processing for requirement understanding",
            "Plan generation using optimization algorithms",
            "Real-time recommendation system"
          ]
        },
        {
          title: "Anomaly Detection Experience Application",
          description: "Web application published for general use to demonstrate research results.",
          technologies: ["Streamlit", "PyTorch", "Python"],
          category: "Demo",
          status: "Completed",
          features: [
            "Drag & drop image upload",
            "Automatic generation experience of anomaly detection programs",
            "Result visualization"
          ],
          demo: "https://takah1r0jp-streamlit-ad-app-appmain-ghw67a.streamlit.app"
        }
      ]
    },

    // Work Experience Section
    workExperience: {
      title: "Work Experience", 
      subtitle: "Internships and professional experience",
      items: [
        {
          company: "zero-to-one Inc.",
          position: "Data Science Intern",
          period: "Oct 2024 - Present",
          description: "Engaged in creating AI lecture materials and content creation",
          responsibilities: [
            "Production of AI educational content",
            "Technical documentation writing",
            "Lecture material creation"
          ]
        },
        {
          company: "onecareer Inc.",
          position: "3-day Business Internship",
          period: "Mar 2025",
          description: "Data analysis and business problem solving",
          responsibilities: [
            "Business problem analysis",
            "Data-driven solution proposals",
            "Team collaboration and presentations"
          ]
        },
        {
          company: "PKSHA Technology",
          position: "3-day Hackathon Participation",
          period: "Jun 2025",
          description: "Grand Prize Winner",
          responsibilities: [
            "Algorithm design and implementation",
            "Machine learning model development",
            "System integration"
          ]
        }
      ]
    },

    // Achievements Section
    achievements: {
      title: "Achievements",
      subtitle: "Academic accomplishments and awards",
      academic: {
        title: "Academic Achievements",
        items: [
          {
            title: "Early Graduation from Tohoku University Faculty of Engineering",
            year: "Mar 2024",
            description: "Achieved graduation 6 months earlier than usual due to excellent academic performance"
          },
          {
            title: "PKSHA HACKATHON 2025 Grand Prize",
            year: "Jun 2025",
            description: "Contributed to team victory by handling algorithm development for travel plan generation AI"
          }
        ]
      },
      leadership: {
        title: "Leadership",
        items: [
          {
            title: "Chairman of Tohoku Regional University Softball Baseball Federation",
            year: "2023",
            description: "Served as chairman of the Tohoku Regional University Softball Baseball Federation, responsible for tournament operation and organizational leadership"
          }
        ]
      },
      publications: {
        title: "Publications",
        items: [
          {
            title: "Image Detection of Logical Anomalies through Automatic Program Generation Using Large Language Models",
            authors: ["Takahiro Tsurumaki", "Yusuke Hosoya", "Takayuki Okatani"],
            venue: "MIRU2025",
            type: "Poster",
            year: "2025"
          }
        ]
      }
    },

    // Skills Section
    skills: {
      title: "Skills",
      subtitle: "Technical stack and expertise",
      certifications: {
        title: "Certifications",
        items: [
          {
            name: "G Test (JDLA Deep Learning for GENERAL)",
            organization: "Japan Deep Learning Association",
            year: "Nov 2024",
            description: "Certification proving fundamental knowledge of deep learning"
          },
          {
            name: "E Test (JDLA Deep Learning for ENGINEER)",
            organization: "Japan Deep Learning Association",
            year: "Feb 2025 (Expected)",
            description: "Certification proving implementation skills as a deep learning engineer"
          }
        ]
      },
      programming: {
        title: "Programming Languages",
        items: [
          { name: "Python", level: 90, description: "PyTorch, TensorFlow, scikit-learn" },
          { name: "JavaScript/TypeScript", level: 75, description: "React, Next.js, Node.js" },
          { name: "R", level: 60, description: "Statistical analysis & data visualization" }
        ]
      },
      frameworks: {
        title: "Frameworks & Libraries",
        items: [
          { name: "PyTorch", level: 85 },
          { name: "TensorFlow", level: 75 },
          { name: "React/Next.js", level: 80 },
          { name: "OpenCV", level: 85 },
          { name: "scikit-learn", level: 90 }
        ]
      },
      tools: {
        title: "Tools & Infrastructure",
        items: [
          { name: "Git", level: 85 },
          { name: "Docker", level: 70 },
          { name: "AWS", level: 65 },
          { name: "Linux", level: 75 },
          { name: "Jupyter", level: 90 }
        ]
      }
    },

    // Common
    common: {
      readMore: "Read More",
      viewProject: "View Project",
      viewDemo: "View Demo",
      viewCode: "View Code",
      period: "Period",
      technologies: "Technologies",
      features: "Key Features",
      achievements: "Achievements",
      responsibilities: "Responsibilities",
      status: "Status",
      ongoing: "Ongoing",
      completed: "Completed"
    }
  }
};

export type TranslationKey = keyof typeof translations.ja;

export function getTranslation(language: 'ja' | 'en', key: string): string {
  const keys = key.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}