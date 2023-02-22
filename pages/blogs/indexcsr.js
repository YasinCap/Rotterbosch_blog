import { createClient } from "contentful";
import { Button } from "../../components/components/src/stories/Button";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import React, { useState, useEffect } from "react";

export default function Blogposts() {
  const [posts, setPosts] = useState([]);
  // keys aanpassen
  useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    client
      .getEntries({ content_type: "post" })
      .then((res) => setPosts(res.items))
      .catch((error) => console.error(error));
  }, []);

  console.log(posts);

  return (
    <div className="container px-auto m-auto rounded">
      <Navbar />
      <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 ">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl " title="cards">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Client side rendering
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition ease-in-out"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.fields.coverImage.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={"/blogs/" + post.fields.slug}>
                      <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                        text={post.fields.excerpt}
                        onClick={() => {}}
                        primary
                      />
                    </Link>
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>
                    <video
                      autoPlay
                      muted
                      style={{ width: "500px", height: "500px" }}
                    >
                      <source
                        src={posts[0].fields.videoOfFoto.fields.file.url}
                      />
                    </video>
                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.cliffhanger}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post.fields.author.fields.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.fields.author.fields.picture.fields.file.url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.fields.author.fields.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl " title="cards">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition ease-in-out"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.fields.coverImage.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={"/blogs/" + post.fields.slug}>
                      <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                        text={post.fields.excerpt}
                        onClick={() => {}}
                        primary
                      />
                    </Link>
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>

                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.cliffhanger}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post.fields.author.fields.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.fields.author.fields.picture.fields.file.url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.fields.author.fields.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl " title="cards">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition ease-in-out"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.fields.coverImage.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={"/blogs/" + post.fields.slug}>
                      <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                        text={post.fields.excerpt}
                        onClick={() => {}}
                        primary
                      />
                    </Link>
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>

                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.cliffhanger}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post.fields.author.fields.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.fields.author.fields.picture.fields.file.url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.fields.author.fields.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl " title="cards">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition ease-in-out"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.fields.coverImage.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={"/blogs/" + post.fields.slug}>
                      <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                        text={post.fields.excerpt}
                        onClick={() => {}}
                        primary
                      />
                    </Link>
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>

                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.cliffhanger}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post.fields.author.fields.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.fields.author.fields.picture.fields.file.url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.fields.author.fields.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl " title="cards">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition ease-in-out"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={post.fields.coverImage.fields.file.url}
                    alt=""
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={"/blogs/" + post.fields.slug}>
                      <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                        text={post.fields.excerpt}
                        onClick={() => {}}
                        primary
                      />
                    </Link>
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>

                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.cliffhanger}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">
                        {post.fields.author.fields.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.fields.author.fields.picture.fields.file.url}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.fields.author.fields.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
