import post from "../assets/posts";
import LazyLoad from "react-lazyload";

const LazyLoadDemo = () => {
  return (
    <div>
      <h2>Lazy Load Demo</h2>
      {post.map((p) => {
        return (
          <LazyLoad key={post.id} placeholder={<Loading />}>
            <Post key={p.id} {...p} />
          </LazyLoad>
        );
      })}
    </div>
  );
};

const Post = ({ id, title, body }) => {
  return (
    <div className="post">
      <div>
        <img src={`https://picsum.photos/id/${id}/200/200 `} />
      </div>
      <div className="post-body">
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

const Loading = () => (
  <div>
    <h5>Loading....</h5>
  </div>
);

export default LazyLoadDemo;
