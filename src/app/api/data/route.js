import { json } from "stream/consumers"

export async function Get(req) {
  const data = {
    name: 'Azamat',
    age: 30,
    email: 'azamat@example.com',
    bio: 'bio',
  }
  return new Response(JSON.stringify(data))
} 
