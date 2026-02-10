export type Project = {
    id: string;
    title: string;
    category: string;
    role: string;
    description: string;
    impact: string;
    tags: string[];
    image: string; // We'll use color gradients for now as placeholders
    date: string; // Project date range
    github?: string;
    demo?: string;
    prompt?: string;
    video?: string;
    videoLink?: string;
    videoPassword?: string;
    note?: string;
};

export const projects: Project[] = [
    {
        id: "1",
        title: "2025年中国现制咖啡行业发展分析",
        category: "行业研究项目",
        role: "Data Analyst",
        description: "基于企业财报和社交媒体数据，从消费降级和情绪经济两个维度分析中国现制咖啡行业竞争格局，总结品牌通过情绪价值实现差异化与用户粘性的产品策略路径。",
        impact: "Comprehensive market insights.",
        tags: ["行业研究", "数据分析", "Python"],
        image: "/images/analysis-of-coffee.png",
        date: "2025.10-2025.12",
        github: "https://github.com/yyyyyyylll/Analysis_of_the_Coffee_Industry_in_China",
        demo: "https://coffee-g3last.vercel.app/",
    },
    {
        id: "2",
        title: "垂直话题（安乐死）问答Chatbot",
        category: "Chatbot",
        role: "Prompt Engineer",
        description: "基于 Coze 平台搭建垂直话题问答 Chatbot，通过 Prompt Engineering 与 RAG 实现特定话题的可控、操纵性回答，实践了垂直场景下 AI 问答产品的设计与落地。",
        impact: "Providing specialized knowledge and support.",
        tags: ["Coze", "Prompt Engineering", "RAG"],
        image: "/projects/coze-anlesi.png",
        date: "2025.4-2025.6",
        demo: "https://www.coze.cn/s/bkYLZ9qOs4o/",
        prompt: "https://dcn6skoytsyu.feishu.cn/wiki/OTtswEZpmij3uIkAj1hcFeMQngh?from=from_copylink",
    },
    {
        id: "3",
        title: "DeepSeek社交媒体用户态度调研",
        category: "数据分析项目",
        role: "Researcher",
        description: "爬取10万+条社媒数据，构建高质量标注数据集，微调 Bert 模型，实现用户数据的细粒度情感分析与功能场景分类，用结构化数据洞察用户对AI产品的需求分布与真实使用态度。",
        impact: "Comprehensive user insights.",
        tags: ["Bert模型微调", "爬虫", "用户画像分析"],
        image: "/projects/analysis-of-ds.png",
        date: "2024.9-2025.6",
        github: "https://github.com/yyyyyyylll/deepseek_social_attitude_analysis",
        demo: "https://readymag.website/u7210292/5621581/3/",
    },

    {
        id: "4",
        title: "价值观研究RAG系统",
        category: "RAG 项目",
        role: "Full Stack Developer",
        description: "面向价值观学术研究场景，搭建 RAG 工程结构，设计文档切分策略、数据库索引策略与用户检索链路，完成 RAG 问答系统的开发与优化。",
        impact: "Enhanced research efficiency.",
        tags: ["RAG", "策略", "Python"],
        image: "from-blue-200 to-cyan-200",
        date: "2025.12-2026.1",
        note: "(知识产权保护)",
    },
    {
        id: "5",
        title: "大学生AI技术采纳历程调研",
        category: "用户调研项目",
        role: "Lead Researcher",
        description: "通过深度访谈法，追踪用户 AI 使用行为的动态变化过程，累计完成 12 场访谈与编码分析，梳理用户使用场景与使用方式的演变路径，为 AI 产品功能设计提供依据。",
        impact: "Informed educational policy recommendations.",
        tags: ["用户调研", "深度访谈", "用户故事"],
        image: "/projects/ai-adoption-cover.png",
        date: "2024.12-2025.12",
        note: "(论文投稿中)",
    },
    {
        id: "6",
        title: "《茅龙墨韵，牵丝飞白》非遗宣传片",
        category: "视频作品",
        role: "Director & Editor",
        description: "作为项目负责人，主导非遗宣传片的全流程制作，完成选题调研、叙事设计、脚本编写、前期拍摄、后期剪辑与特效制作等核心环节，积累了内容策划与影像叙事的实战经验。",
        impact: "Promoting cultural heritage.",
        tags: ["视频制作", "内容策划", "影像叙事"],
        image: "/projects/maolong-video-cover.png",
        date: "2024.1-2024.3",
        videoLink: "https://pan.baidu.com/s/1k9EeRjSx9kCHYO2O3vcczw?pwd=6g7q",
        videoPassword: "6g7q",
    },
];
