const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { message: "hi", id: 1, likes: "15" },
    { message: "how is your name", id: 1, likes: "15" },
    { message: "what are you doing", id: 1, likes: "15" },
  ],
  newPostText: "Вот этот тексfт",
}

const profileReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
            };
            state.postData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

};

export const addPostActionCreator = () =>{
    return {
      type: ADD_POST
    }    
  }
  export const updateNewPostTextActionCreator = (newPostText) =>{
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: newPostText
    }    
  }

export default profileReducer;