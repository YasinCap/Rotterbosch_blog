import { createClient } from "contentful";
import { Button } from '../components/components/src/stories/Button';
import Link from "next/link";
import Navbar from '../components/Navbar'

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
    <div className="container px-10 mb-8 rounded ">
      <Navbar/>
      {posts.map(posts => (
        <div className=" grid-cols-1 lg:grid-cols-6 gap-8 py-4 hover:bg-gray-200 transition duration-300 ease-in-out" key={posts.sys.id}>
          <Link className="text-3xl m-auto hover:bg-slate-200 hover:text-[#FAF9F6] rounded transition duration-300 ease-in-out " href={'/blogs/' + posts.fields.slug}>
          {posts.fields.title}
          </Link>
          
          <img className="object-cover h-48 w-96 m-auto rounded py-1 hover:opacity-90 transition duration-300 ease-in-out " src={posts.fields.coverImage.fields.file.url}></img>
          <h3 className="text-sm">{posts.fields.author.fields.name}</h3>
          <img className="w-10 rounded" src={posts.fields.author.fields.picture.fields.file.url}></img>
          <br></br>
          <Link href={'/blogs/' + posts.fields.slug}>
          <Button
            label= {posts.fields.title}
            onClick={() => { }}
            primary
          /></Link>
        </div>
        
      ))}
    </div>
  )
}