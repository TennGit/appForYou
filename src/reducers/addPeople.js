
export function addName(name){
    console.log(`ssss ${name}`)
    return {
        type:"ADD",
        payload: name,
    }
}

const addPeople = (state=[], action) => {
    switch (action.type){
        case 'ADD':
            return [
                ...state,
                action.payload
            ]
        default: return state
    }
}

export default addPeople