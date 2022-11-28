import { createClient } from "contentful";
import Link from "next/link";
import Navbar from "../../components/Navbar";

//Hier wordt opnieuw de connectie gemaakt met mijn contentful space
export async function getStaticPaths() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  //Hier wordt de exclusieve functie van Contentful getEntries gebruikt, waarmee alle entries van het id post worden opgehaald.
  const allEntries = await client.getEntries({ content_type: "post" });
  return {
    paths: allEntries.items.map((entry) => {
      return {
        params: {
          slug: entry.fields.slug,
          id: entry.sys.id,
        },
      };
    }),

    fallback: false, // can also be true or 'blocking'
  };
}
//hierin krijg je de specifieke data voor de al gemaakte specifieke path
export async function getStaticProps(context) {
  console.log(context);
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const entry = await client.getEntry(context.params);

  return {
    props: {
      post: entry ?? null,
    },
  };
}

//dit is de render functie
export default function Blogposts({ post }) {
  console.log(post);
  return (
    <div className="container px-10 mb-8 rounded ">
      <Navbar></Navbar>
      <div
        className=" grid-cols-1 lg:grid-cols-6 gap-8 bg-grey-50 py-4"
        key={post.sys.id}
      >
        <p className="text-3xl m-auto">{post.fields.title}</p>
        <img
          className="object-cover h-48 w-96 m-auto rounded py-1"
          src={post.fields.coverImage.fields.file.url}
        ></img>
        <p>{post.fields.content.content[0].content[0].value}</p>
        <br></br>
        <h3 className="text-sm">{post.fields.author.fields.name}</h3>
        <img
          className="w-10 rounded"
          src={post.fields.author.fields.picture.fields.file.url}
        ></img>{" "}
        <p className="text-sm">{post.fields.date}</p>
        <br></br>
      </div>
    </div>
  );
}
