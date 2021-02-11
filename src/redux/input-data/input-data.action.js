export const storeInput = (input) => ({
    type: 'STORE_INPUT',
    payload: input
});


export const removeInput = (id) => ({
    type: 'REMOVE_INPUT',
    payload: id
});