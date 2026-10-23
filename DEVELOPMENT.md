# 开发与构建

在项目根目录运行以下命令。

## 安装依赖

```bash
npm ci
```

`npm ci` 根据已提交的 `package-lock.json` 安装依赖，适合首次检出项目后使用。

## 本地开发

```bash
npm run dev
```

打开终端显示的本地地址查看练习页面。

## 构建与预览

```bash
npm run build
npm run preview
```

先构建，再预览生成的 `dist/` 内容。预览服务用于本地检查构建结果。
