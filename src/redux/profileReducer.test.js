import profileReducer, { addPostActionCreator,deletePost } from "./profileReducer";
import React from "react";

let state = {
  postData: [
    { message: "hi", id: 1, likes: "15" },
    { message: "how is your name", id: 2, likes: "15" },
    { message: "what are you doing", id: 3, likes: "15" },
  ],
};

it('new post should be added', () => {
  let action = addPostActionCreator("it-camasutra.com");

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(4);
});


it('message of new post should be correct', () => {
  let action = addPostActionCreator("it-camasutra.com"); 

  let newState = profileReducer(state, action);

  expect(newState.postData[3].message).toBe("it-camasutra.com");
});


it('after deleting length of messages should be decrement', () => {

  let action = deletePost(1)

  let newState = profileReducer(state, action);

  expect(newState.postData.length).toBe(2);
});

