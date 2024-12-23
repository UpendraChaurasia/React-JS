import {
  Children,
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITAIL_POSTS") {
    newPostList = action.payload.products;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    console.log(post);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  // const addPost = (userId, postTitle, postBody, reactions, tags) => {
  //   dispatchPostList({
  //     type: "ADD_POST",
  //     payload: {
  //       id: Date.now(),
  //       title: postTitle,
  //       body: postBody,
  //       reactions: reactions,
  //       userId: userId,
  //       tags: tags,
  //     },
  //   });
  // };

  const addInitailPosts = (products) => {
    dispatchPostList({
      type: "ADD_INITAIL_POSTS",
      payload: {
        products,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitailPosts(data.products);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning up UseEffect.");
      //controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
