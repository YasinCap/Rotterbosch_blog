import { createClient } from "contentful";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "post",
  });

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
export default function Blogposts({ post }) {
  console.log(post);
  return (
    <div className="container px-10 mb-8 rounded ">
      <Navbar></Navbar>
      <div
        className=" grid-cols-1 lg:grid-cols-6 gap-8 bg-grey-50 py-4"
        key={post.sys.id}
      >
        <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          {post.fields.title}
        </p>
        <img
          className="object-contain h-48 w-96"
          src={post.fields.coverImage.fields.file.url}
        ></img>
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          {post.fields.description}
        </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

//Hier wordt opnieuw de connectie gemaakt met mijn contentful space
// export async function getStaticPaths() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });
//   //Hier wordt de exclusieve functie van Contentful getEntries gebruikt, waarmee alle entries van het id post worden opgehaald.
//   const allEntries = await client.getEntries({ content_type: "post" });
//   return {
//     paths: allEntries.items.map((entry) => {
//       return {
//         params: {
//           slug: entry.fields.slug,
//           id: entry.sys.id,
//         },
//       };
//     }),

//     fallback: false, // can also be true or 'blocking'
//   };
// }

//hierin krijg je de specifieke data voor de al gemaakte specifieke path
// export async function getStaticProps(context) {
//   console.log(context);
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });

//   const entry = await client.getEntry(context.params);

//   return {
//     props: {
//       post: entry ?? null,
//     },
//   };
// }

//dit is de render functie
