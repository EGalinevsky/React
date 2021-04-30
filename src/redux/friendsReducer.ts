
export type friendsDataType ={
    id: number,
    name:string
}

let initialState = {
    friendsData: [
        { id: 1, name: "Mars" },
        { id: 2, name: "Mercury" },
        { id: 3, name: "Jupiter" },
    ] as Array<friendsDataType>,
}

type initialStateType =  typeof initialState

const friendsReducer = (state = initialState, action:any):initialStateType => {

    return state;
};

export default friendsReducer;