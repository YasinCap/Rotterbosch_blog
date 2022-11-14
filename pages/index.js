import { createClient } from "contentful";
import { Button } from '../components/components/src/stories/Button';
import Link from "next/link";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "post" })

  return {
    props: {
      posts: res.items
    }
  }
}

export default function Blogposts({ posts }) {
  console.log(posts)

  return (
    <div className="blogposts">
      {posts.map(posts => (
        <div key={posts.sys.id}>

          <h1>{posts.fields.title}</h1>
          <Link href={'/blog/' + posts.fields.title}>
          {posts.fields.title}
          </Link>
          
          <img src={posts.fields.coverImage.fields.file.url}></img>
          <p>{test123}</p>
          <h3>{posts.fields.author.fields.name}</h3>
          <img src={posts.fields.author.fields.picture.fields.file.url}></img>
          <br></br>
          <Button
            label= {posts.fields.title}
            onClick={() => { }}
            primary
          />
        </div>
      ))}
    </div>
  )
}