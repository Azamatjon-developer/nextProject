import Link from 'next/link';

interface PostProps {
  post: Post;  
}

interface Post {
  title: string;
  body: string;
  userId: number;
}

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <div className="bg-gray-900 rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
        <Link
          className="inline-block bg-green-500 text-white py-2 px-6 rounded-md mb-6 hover:bg-green-600 transition duration-300"
          href={'/'}
        >
          Back Home
        </Link>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
          {post.title}
        </h2>

        <p className="text-lg text-gray-300 mb-4">{post.body}</p>

        <div className="text-sm text-gray-500">
          <strong>Author ID:</strong> {post.userId}
        </div>
      </div>
    </div>
  );
};

export default Post;
