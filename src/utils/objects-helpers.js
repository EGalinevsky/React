export const  updateObjectInArray = (items, itemsId, objPropName, newObject) => {
    return items.map(u => {
        if (u[objPropName] === itemsId) {
            return { ...u, ...newObject}
        }
        return u;
    })
}

// state.users.map((u) => {
//     if (u.id === action.userId) {
//         return { ...u, followed: false }
//     }
//     return u;
// })