# ConvHub - 格式转换中转站

> 聚合热门格式转换工具，快速找到并访问目标网站

![ConvHub](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple)

## 功能特点

- 🔍 **实时搜索** - 支持中英文关键词模糊搜索
- 📁 **6 大分类** - 图片、文档、视频、音频、压缩、开发工具
- 🌐 **中英切换** - 一键切换语言
- ⭐ **收藏功能** - 本地收藏常用工具
- 🎨 **暗色主题** - 护眼毛玻璃设计
- 📱 **响应式** - 适配桌面/平板/手机

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 技术栈

| 技术 | 用途 |
|------|------|
| React 18 | 前端框架 |
| TypeScript | 类型安全 |
| Vite | 构建工具 |
| Tailwind CSS | 样式方案 |
| Zustand | 状态管理 |
| Fuse.js | 客户端搜索 |
| i18next | 国际化 |
| Framer Motion | 动画效果 |

## 项目结构

```
src/
├── components/     # UI 组件
│   ├── common/     # 通用组件 (GlassCard, SearchBar, etc.)
│   ├── features/   # 功能组件 (ToolCard, CategoryNav, etc.)
│   └── layout/     # 布局组件 (Header, Footer)
├── hooks/          # 自定义 hooks
├── store/          # Zustand 状态管理
├── i18n/           # 国际化翻译
├── data/           # 工具数据
├── pages/          # 页面组件
└── types/          # TypeScript 类型
```

## 设计规范

- **背景色**: `#0a0a0f`
- **毛玻璃**: `backdrop-filter: blur(20px)`
- **主题色**: `#6366f1` (Indigo) → `#8b5cf6` (Purple)
- **圆角**: 12-24px

## 许可证

MIT
