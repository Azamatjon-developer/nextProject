interface PostProps {
  params: {
    id: string
  }
}

async function fetchPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch post')
  const result = await res.json()
  return result
}

const Post = async ({ params: { id } }: PostProps) => {
  const post = await fetchPost(id)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 px-6">
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
         {post.title}
      </h2>
      <h3>{post.body}</h3>
      <strong> Avtor id : {post.userId}</strong>
    </div>
  )
}

export default Post
