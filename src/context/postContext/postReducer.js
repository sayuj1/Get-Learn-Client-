import {
  SET_LOADING,
  REMOVE_LOADING,
  TOGGLE_POST_FILTER,
  GET_POSTS,
  SET_VIEW_POST,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  SET_USER_POSTS,
  DELETE_USER_POSTS,
  SAVE_IMG,
  REMOVE_IMG,
  SAVE_POST_TAG,
  REMOVE_POST_TAG,
  SAVE_NEW_POST,
  CLEAR_CREATE_NEW_POST
} from "./postTypes";
import { Save_New_Post } from "./postActions";

const postReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case REMOVE_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case TOGGLE_POST_FILTER:
      return { ...state, filterPost: !state.filterPost };
    case GET_POSTS:
      return { ...state };
    case SET_VIEW_POST:
      return { ...state, viewPostId: action.payload };
    case GET_VIEW_POST:
      return {
        ...state,
        viewPost: state.posts.filter(post => post._id === action.payload)
      };
    case CLEAR_VIEW_POST:
      return {
        ...state,
        viewPostId: null,
        viewPost: null
      };
    case SET_USER_POSTS:
      return {
        ...state
      };
    case DELETE_USER_POSTS:
      return {
        ...state,
        userPosts: state.userPosts.filter(
          userPost => userPost._id !== action.payload
        ),
        posts: state.posts.filter(userPost => userPost._id !== action.payload)
      };
    case SAVE_IMG:
      return {
        ...state,
        createPost: { ...state.createPost, postImg: action.payload }
      };
    case REMOVE_IMG:
      return {
        ...state,
        createPost: { ...state.createPost, postImg: "" }
      };
    case SAVE_POST_TAG:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          tags: [...state.createPost.tags, action.payload]
        }
      };
    case REMOVE_POST_TAG:
      return {
        ...state,
        createPost: {
          ...state.createPost,
          tags: state.createPost.tags.filter(tag => tag !== action.payload)
        }
      };
    case SAVE_NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        userPosts: [action.payload, ...state.userPosts]
      };
    case CLEAR_CREATE_NEW_POST:
      return {
        ...state,
        createPost: {
          postImg: "",
          tags: []
        }
      };
    default:
      return state;
  }
};

export default postReducer;
