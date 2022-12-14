This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start by cloning this repository
and installing the packages,

git clone https://github.com/YasinCap/Rotterbosch_blog
npm install
npm run dev

To run the dev server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To build the site use
npm run build

## Deploy on Netlify

Use this documentation to deploy website on Netlify
https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

A problem that occurs a lot while trying to deploy is, the fact that there are differences between the main and sub repo, make sure these have no differences.

Webhooks/Build hooks were used in this project to let Netlify communicate with Contentful, for more information on webhooks on Netlify check this doc

https://docs.netlify.com/configure-builds/build-hooks/

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
