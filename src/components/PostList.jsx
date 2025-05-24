import Post from './Post';

function PostList() {
  const posts = [
    { title: "Post 1", body: "This is the body of post 1" },
    { title: "Post 2", body: "This is the body of post 2" },
    { title: "Post 3", body: "This is the body of post 3" },
  ];

  return (
    <div className="postList">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;