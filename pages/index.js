import { createClient } from "contentful";
// import { Button } from '../components/components/src/stories/Button';

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
          <img src={posts.fields.coverImage.fields.file.url}></img>
          {/* <Button
            label= {posts.fields.title}
            onClick={() => { }}
            primary
          /> */}
        </div>
      ))}
    </div>
  )
}