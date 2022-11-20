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
    <div className="container mx-auto px-10 mb-8 rounded ">
      
      {posts.map(posts => (
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 bg-gray-100" key={posts.sys.id}>
          <Link className="text-3xl m-auto" href={'/blogs/' + posts.fields.slug}>
          {posts.fields.title}
          </Link>
          
          <img className="object-cover h-48 w-96 m-auto rounded" src={posts.fields.coverImage.fields.file.url}></img>
          {/* <p>{posts.fields.content.content[0].content[0].value}</p> */}
          <h3 className="text-sm">{posts.fields.author.fields.name}</h3>
          <img className="w-10 rounded" src={posts.fields.author.fields.picture.fields.file.url}></img>
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