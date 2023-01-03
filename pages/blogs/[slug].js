import { createClient } from "contentful";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Button } from "../../components/components/src/stories/Button";

// Here I make the connction with my contentful space
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});
// Here again I use getstaticpaths function from Contentful, where I make sure all my posts are retrieved.
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });
  // Here is route through my data and make sure to fill slug, which I will use for the paths
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: { post: items[0] },
  };
}
// This is the render function, where i handle my data and decide how to render it with TailwindCSS
export default function Blogposts({ post }) {
  console.log(post);
  return (
    <div className="container px-10 m-auto rounded ">
      <Navbar></Navbar>
      <div
        className=" grid-cols-1 lg:grid-cols-6 gap-8 bg-grey-50 py-4 px-6"
        key={post.sys.id}
      >
        <p className="mb-4 text-4xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {post.fields.title}
        </p>
        <img
          className=" max-w-lg max-h-lg m-auto rounded"
          src={post.fields.coverImage.fields.file.url}
        ></img>
        <p className="text-lg font-small text-white-400 py-5  whitespace-pre-line ">
          {post.fields.description}
        </p>
        <video width="320" height="240" controls>
          <source
            src={post.fields.videoOfFoto.fields.file.url}
            type="video/mp4"
          />{" "}
          <source
            src={post.fields.videoOfFoto.fields.file.url}
            type="video/ogg"
          />{" "}
          Your browser does not support the video tag.
        </video>
        <br></br>
        <h3 className="font-medium dark:text-white">
          {post.fields.author.fields.name}
        </h3>
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={post.fields.author.fields.picture.fields.file.url}
          ></img>
          <div>
            <p className="text-sm text-black-500 font-bold">
              {post.fields.date}
            </p>
            <Link href={"/"}>
              <Button // dit is de button die uit Storybook komt, daarvoor importeren we bovenaan het bestand eerst de button uit de component folder
                text={"Terug"}
                onClick={() => {}}
                primary
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
