# React 待办事项应用

一个功能完整、界面简洁的React待办事项应用，支持任务分类和深色主题。

## 功能特性

### 核心功能
- ✅ 添加新的待办事项
- ✅ 标记任务为已完成/未完成
- ✅ 删除任务
- ✅ 空状态提示

### 分类功能
- 🏢 **工作** - 工作相关任务
- 👤 **个人** - 个人生活任务
- 📚 **学习** - 学习提升任务
- 🔍 按分类过滤显示任务
- 🎨 不同分类有独特的颜色标识

### 界面设计
- 🌙 深色主题，减少视觉疲劳
- 📱 响应式设计，适配各种屏幕尺寸
- 🎯 简洁直观的用户界面
- ⚡ 流畅的交互体验

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **CSS3** - 样式设计
- **JavaScript (ES6+)** - 编程语言

## 安装和运行

### 环境要求
- Node.js 16.x 或更高版本
- npm 或 yarn 或 pnpm

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 项目结构

```
tdl/
├── src/                    # 源代码目录
│   ├── App.jsx            # 主应用组件
│   ├── index.css          # 全局样式
│   └── main.jsx           # React应用入口
├── index.html             # HTML入口文件
├── package.json           # 项目配置和依赖
├── package-lock.json      # 依赖版本锁定
├── vite.config.js         # Vite配置文件
├── .gitignore             # Git忽略文件配置
└── README.md              # 项目说明文档
```

## 使用说明

1. **添加任务**
   - 在输入框中输入任务内容
   - 选择任务分类（工作/个人/学习）
   - 点击「添加」按钮或按回车键

2. **管理任务**
   - 点击复选框标记任务为已完成/未完成
   - 点击「删除」按钮移除任务
   - 已完成的任务会显示删除线

3. **分类管理**
   - 点击上方的分类按钮过滤显示对应分类的任务
   - 每个任务项右侧显示分类标签
   - 不同分类有不同的颜色标识

## 部署说明

### 部署到 Vercel
1. 访问 [Vercel](https://vercel.com/) 并登录
2. 点击 "New Project"，导入项目仓库
3. 配置构建设置：
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 点击 "Deploy" 完成部署

### 部署到 Netlify
1. 访问 [Netlify](https://www.netlify.com/) 并登录
2. 点击 "Add new site" > "Import an existing project"
3. 连接项目仓库
4. 配置构建设置：
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. 点击 "Deploy site"

### 手动部署
1. 运行 `npm run build` 生成生产构建
2. 将 `dist` 目录中的所有文件上传到服务器
3. 配置服务器静态文件服务，指向 `dist` 目录

## 许可证

MIT License

## 开发说明

### 代码风格
- 使用函数组件和 Hooks
- 采用语义化 HTML
- 模块化 CSS 设计
- 清晰的代码注释

### 扩展建议
- 添加任务编辑功能
- 实现任务拖拽排序
- 添加任务优先级
- 实现数据持久化（localStorage 或后端API）
- 添加主题切换功能

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**享受高效的任务管理体验！** 🚀
