import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postData: [
      { message: "hi", id: 1, likes: "15" },
      { message: "how is your name", id: 1, likes: "15" },
      { message: "what are you doing", id: 1, likes: "15" }
    ],
  },

  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Eugene" },
      { id: 2, name: "Sasha" },
      { id: 3, name: "Igor" },
      { id: 4, name: "lex" },
      { id: 5, name: "Ilya" }
    ],
    messageData: [
      { say: "hi", id: 1 },
      { say: "how is your name", id: 2 },
      { say: "what are you doing", id: 3 },
      { say: "how old are you", id: 3 },
      { say: "hello, my friend", id: 3 },
      { say: "Londan is it ", id: 3 }
    ],
  },

  friendsPage: {
    friendsData: [
      { id: 1, name: "Mars" },
      { id: 1, name: "Mercury" },
      { id: 1, name: "Jupiter" }
    ],
  },
}; 
export let addPost = (postMessage) =>{
 
  let newPost = {
    id: 5,
    message: postMessage,
    likes: 0
  };
  state.profilePage.postData.push(newPost);

  rerenderEntireTree(state);
}




export default state;

