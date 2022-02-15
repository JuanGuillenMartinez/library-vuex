//los getters nos ofrecen acceso a las propiedades de los state

export const books = ( state ) => {
    return state.bookList;
}

export const currentBook = ( state ) => {
    return {...state.currentBook};
}
export const isLoading = ( state ) => {
    return state.isLoading;
}
