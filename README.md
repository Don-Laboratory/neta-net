[![Netlify Status](https://api.netlify.com/api/v1/badges/b96dc336-2041-419b-b863-d62beeb32712/deploy-status)](https://app.netlify.com/sites/neta-net/deploys)

# neta-net

nota-net を実装するリポジトリ

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Stack

- next.js
- prisma
- next-auth

# Deploy

[Netlify]（netlify.com）にデプロイしています。

## Deploy Sub Domain

| サブドメイン | アクセス URL                         | 使途                               |
| :----------- | :----------------------------------- | :--------------------------------- |
| -            | [neta-net.com](https://neta-net.com) | 本番ブランチ、一般公開してる       |
| staging      | []()                                 | 本番環境にデプロイする前の最終確認 |
