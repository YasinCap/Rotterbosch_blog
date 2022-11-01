import * as contentful from "contentful"

var client = contentful.createClient({
    space: 'a73wq06jywpg',
    accessToken: 'kARetvcem1cJvcst3jD1KpWCtH9Zywz5TbXb-l6MGpw',
  });

export default function ProductPage(props) {
    return <h1>{props.heading}</h1>
}

export async function getServerSideProps() {
    //haal data op uit Contentful
    const blog = await client.getEntry('6vyrBxiMA3QlAGzzhWNJxv')

    return {
      props: {
        heading: blog.fields
      }, 
    }
  }