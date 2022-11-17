import { createClient } from "contentful";
import { Button } from '../components/components/src/stories/Button';
import Link from "next/link";

// Deze functie zorgt ervoor dat next js de pagina pre-rendered en de props die meeworden gegeven worden gereturned.
export async function getStaticProps() {
// Dit is de const waarin ik mijn persoonlijke api keys, 
// door middel van enviroment variables next js laat communiceren met contentful
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
          <Link href={'/blogs/' + posts.fields.slug}>
          {posts.fields.title}
          </Link>
          
          <img src={posts.fields.coverImage.fields.file.url}></img>
          <p>{posts.fields.content.content[0].content[0].value}</p>
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