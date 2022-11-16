// const client = require("contentful").createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });


// export async function getStaticPaths (){
//  let data = await client.getEntries({
//     content_type: 'post'
    
//  })

// return {
//     paths: data.items.map((item) => ({
//         params: { slug: item.fields.slug },
//     })),
//   };

// }
// export async function getStaticProps (){
    
// }

export default function Blogs() {
    return <div>hello</div>
}