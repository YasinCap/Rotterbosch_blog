# Introduction

This is a Next.js project with a Storybook submodule (with its own readme)

# Getting Started

Clone this repository and install the packages:

git clone https://github.com/YasinCap/Rotterbosch_blog

npm install

Initialize the submodule and get all the data from the subproject:

git submodule init

git submodule update

Start the dev server:

npm run dev

Open http://localhost:3000 in your browser to view the app.

# To build the site:

npm run build

# Setting up Contentful

Create a file called .env.local

Add the following environment variables to the file:

CONTENTFUL_SPACE_ID="Your space ID"

CONTENTFUL_ACCESS_KEY="Your access key"

Make sure the following is included in your .gitignore file:

# local env files

.env\*.local
When using the API keys, use the titles of the variables instead of the literal keys.
Deploying on Netlify
Use the following documentation to deploy the website on Netlify:
https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/

If you encounter problems while trying to deploy, make sure there are no differences between the main and sub repositories.

This project uses webhooks/build hooks to allow Netlify to communicate with Contentful. For more information on Netlify webhooks, see the following documentation:
https://docs.netlify.com/configure-builds/build-hooks/

Next.js Documentation - https://nextjs.org/docs
Learn Next.js - https://nextjs.org/learn/foundations/about-nextjs
Next.js GitHub repository - https://github.com/vercel/next.js/
