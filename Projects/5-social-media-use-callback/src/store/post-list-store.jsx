import {
  Children,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitailPosts: () => {},
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

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

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

  return (
    <PostList.Provider
      value={{ postList, addPost, addInitailPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
