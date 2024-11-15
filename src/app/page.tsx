import Link from "next/link";

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Main Page
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {posts?.map((item: Post) => (
          <div key={item.id} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-500 mb-4">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.body.substring(0, 200)}...</p>
            <Link 
              href={"/post/" + item.id} 
              className="inline-block bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              See More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
