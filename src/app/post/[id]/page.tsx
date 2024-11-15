import Post from '@/app/components/Post'

interface PostProps {
  params: {
    id: string
  }
}

async function fetchPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const result = await res.json()
  return result
}

const PagePost = async ({ params: { id } }: PostProps) => {
  const post = await fetchPost(id)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 px-6">
      <Post post={post} />
    </div>
  )
}

export default PagePost
