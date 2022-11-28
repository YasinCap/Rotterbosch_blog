import { createClient } from "contentful";
import { Button } from "../components/components/src/stories/Button";
import Link from "next/link";
import Navbar from "../components/Navbar";
import React from "react";
const dummy = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Improve your customer experience",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

// Deze functie zorgt ervoor dat next js de pagina pre-rendered en de props die meeworden gegeven worden gereturned.
export async function getStaticProps() {
  // Dit is de const waarin ik mijn persoonlijke api keys,
  // door middel van enviroment variables next js laat communiceren met contentful
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "post" });

  return {
    props: {
      posts: res.items,
    },
  };
}

export default function Blogposts({ posts }) {
  console.log(posts);

  return (
    <div className="container px-10 mb-8 rounded">
      <Navbar />
      {/* {posts.map((posts) => (
        <div
          className=" grid-cols-1 lg:grid-cols-6 gap-8 py-4 hover:bg-gray-200 transition duration-300 ease-in-out"
          key={posts.sys.id}
        >
          <Link
            className="text-3xl m-auto hover:bg-slate-200 hover:text-[#FAF9F6] rounded transition duration-300 ease-in-out "
            href={"/blogs/" + posts.fields.slug}
          >
            {posts.fields.title}
          </Link>

          <img
            className="object-cover h-48 w-96 m-auto rounded py-1 hover:opacity-90 transition duration-300 ease-in-out "
            src={posts.fields.coverImage.fields.file.url}
          ></img>
          <h3 className="text-sm">{posts.fields.author.fields.name}</h3>
          <img
            className="w-10 rounded"
            src={posts.fields.author.fields.picture.fields.file.url}
          ></img>
          <br></br>
          <Link href={"/blogs/" + posts.fields.slug}>
            <Button label={posts.fields.title} onClick={() => {}} primary />
          </Link>
        </div>
      ))} */}
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Gemeente Rotterbosch
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4"></p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.fields.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
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
                    <p className="text-sm font-medium text-indigo-600">
                      <Link href={"/blogs/" + post.fields.slug}>
                        <Button
                          label={post.fields.title}
                          onClick={() => {}}
                          primary
                        />
                      </Link>
                    </p>
                    <a href={post.fields.title} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.fields.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.fields.title}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.fields.title}>
                        <span className="sr-only">
                          {post.fields.author.fields.name}
                        </span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={
                            post.fields.author.fields.picture.fields.file.url
                          }
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.fields.title} className="hover:underline">
                          {post.fields.author.fields.name}
                        </a>
                      </p>
                      {/* <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.fields.title}>
                          {post.fields.date}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.fields.title} read</span>
                      </div> */}
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
