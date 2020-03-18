import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
  Set_View_Post,
  Clear_View_Post,
  Get_Requested_Post
} from "./postActions.js";

const PostState = props => {
  const initialState = {
    filterPost: false,
    viewRequestedPost: null, // contains requested post id
    requestedPost: null, // contains requested post
    posts: [
      {
        _id: 1,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis diam, pulvinar at ex at, mollis dictum justo. Aenean at aliquam ipsum. Duis tristique, lectus sodales pulvinar finibus, justo libero convallis ligula, ac bibendum magna mauris eget arcu. Sed suscipit augue at turpis rutrum rutrum. Nulla nec diam ut massa congue mollis finibus at tortor. Nunc suscipit elit ut elit lobortis maximus. Nulla facilisis euismod orci sed vulputate. Nulla posuere neque eu tellus pharetra, vitae tincidunt libero pellentesque. Vestibulum elit est, commodo id sapien sed, sodales vestibulum ante. Quisque eleifend, libero a hendrerit dictum, risus eros sagittis magna, ut mattis odio quam at odio. Curabitur vestibulum tincidunt erat sed ullamcorper. Aenean erat magna, lobortis sit amet risus non, hendrerit dapibus ex Duis sed leo in enim ultrices volutpat vel vel arcu. Pellentesque faucibus blandit condimentum. Aenean augue tellus, maximus vitae libero quis, tincidunt faucibus tellus. Fusce viverra ultrices feugiat. Nam non justo vel eros lobortis interdum eu maximus justo. Morbi et semper lectus, et dignissim quam. Pellentesque venenatis nisl nec blandit finibus. Donec laoreet, mauris eget commodo gravida, ipsum ipsum semper quam, in consectetur urna sapien id massa. Aenean condimentum viverra augue, ut interdum purus lobortis ac. Praesent at neque id massa consectetur congue quis in nibh. Nunc commodo at nisi non gravida. Morbi congue tincidunt nunc, vel mollis massa ultrices posuere. Integer feugiat urna ac orci auctor, nec consequat lectus consectetur. In cursus nisi commodo convallis sagittis.Ut nisi leo, pharetra quis laoreet a, hendrerit tempus enim. In at laoreet nisl. Maecenas vehicula, leo non condimentum tempus, libero ante suscipit dolor, sed venenatis purus tellus nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit, mauris sed volutpat scelerisque, libero purus finibus massa, et facilisis eros ex consequat risus. Curabitur nulla augue, interdum vel urna sit amet, ultrices interdum libero. Donec a risus commodo, porttitor ante et, finibus sem. Morbi sagittis quam vel massa venenatis posuere. Vivamus ullamcorper, est at venenatis fermentum, ante nisl vehicula mi, nec tristique diam sem at mauris. Vivamus odio ligula, tristique eget magna ut, ultricies rhoncus magna. Aliquam quis lectus fringilla, sollicitudin tellus vitae, dignissim diam.",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Varun",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 2,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tags: ["WEB", "CSS", "JavaScript"],
        postAuthor: "Sayuj",
        thumbnail: "",
        avatar: ""
      },
      {
        _id: 3,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.google.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Ram",
        thumbnail: "",
        avatar: ""
      },
      {
        _id: 4,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        postTitle: "Here we Go!",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Rohan",
        thumbnail: "",
        avatar: ""
      },
      {
        _id: 5,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Shakir",
        thumbnail: "",
        avatar: ""
      },
      {
        _id: 6,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Sayuj",
        thumbnail: "",
        avatar: ""
      },
      {
        _id: 7,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Varun",
        thumbnail: "",
        avatar: ""
      }
    ]
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  const setViewPost = postId => {
    dispatch(Set_View_Post(postId));
  };

  const clearViewPost = () => {
    dispatch(Clear_View_Post());
  };

  const getRequestedPost = postId => {
    dispatch(Get_Requested_Post(postId));
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        viewRequestedPost: state.viewRequestedPost,
        requestedPost: state.requestedPost,
        setViewPost: setViewPost,
        clearViewPost: clearViewPost,
        getRequestedPost: getRequestedPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
