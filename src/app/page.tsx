import Link from "next/link"

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await res.json()
  return result
}
interface post {
  userId : number;
  id:number;
  title: string;
  body: string;
}
export default async function Home() {
  const posts = await fetchData()
  console.log(posts.length)
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Main Page
      </h2>
        <div>
          {posts?.map((item:post) => (
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link className="pt-[6px] pl-[12px] pb-[4px] pr-[22px] bg-green-500 mt-10 rounded-md" href={"/post/" + item.id}>See more </Link>
              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}
