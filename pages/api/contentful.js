import { createClient } from "contentful";

const client = createClient({
  space: "a73wq06jywpg",
  accessToken: "kARetvcem1cJvcst3jD1KpWCtH9Zywz5TbXb-l6MGpw",
});

export default async function handler(req, res) {
  const entries = await client.getEntries();
  res.status(200).json(entries.items);
}
