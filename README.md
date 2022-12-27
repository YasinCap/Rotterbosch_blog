This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start by cloning this repository
and installing the packages,

git clone https://github.com/YasinCap/Rotterbosch_blog
npm install
Because your project is cloned with a submodule, you will get an empty "components" folder, make sure that these two commands are executed: git submodule init to you initialize the local configuration file, and git submodule update to you get all the data from the subproject .
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

## Enviroment variabelen

Voor dit project moet je gebruik maken van Enviroment Variabelen, normaal gesproken zaten je API keys in de code van het project dit is echter niet veilig.

1. Maak een nieuw bestand aan genaamd .env.local
2. CONTENTFUL_SPACE_ID="Jou Space ID"
   CONTENTFUL_ACCESS_KEY="Jou access key"

3. Zorg ervoor dat
   //# local env files
   .env\*.local// in je git ignore staat

4. Bij het gebruik van de api keys vul je de titels van de variabelen in ipv de letterlijke keys.

## Activate submodule after cloning

For this project you have to use environment variables, normally your API keys are in the code of the project but this is not secure.

1. Create a new file called .env.local
2. CONTENTFUL_SPACE_ID="Your space ID"
   CONTENTFUL_ACCESS_KEY="Your access key"

   put this in your file

3. Make sure
   //# local env files
   .env\*.local// in your .gitignore

4. When using the api keys, enter the titles of the variables instead of the literal keys.

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
