const INITIAL_STATE = {
    inputData: [],
}

const addInputData = (inputDatas, currentData)  => {
    let newData = [currentData, ...inputDatas];
    inputDatas = newData;
    return inputDatas;
}

export const inputDataReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch(action.type) {
        case "STORE_INPUT":
            return {
                ...state,
                inputData: addInputData(state.inputData, action.payload)
            }
        default:
            return state;
    }
}



