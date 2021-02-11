const INITIAL_STATE = {
    inputData: [],
}

const addInputData = (inputDatas, currentData)  => {
    let newData = [currentData, ...inputDatas];
    inputDatas = newData;
    return inputDatas;
}

const removeInputData = (inputDatas, id) => {
    const newInputDatas = inputDatas.filter(input => input.id !== id);
    return newInputDatas;
}

export const inputDataReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload);
    switch(action.type) {
        case "STORE_INPUT":
            return {
                ...state,
                inputData: addInputData(state.inputData, action.payload)
            }
        case 'REMOVE_INPUT':
            return {
                ...state,
                inputData: removeInputData(state.inputData, action.payload)
            }
        default:
            return state;
    }
}



