// las mutations se encargan de modificar el estado de las variables ya que estas no pueden ser modificadas de forma directa.

// export const myMutation = ( state ) => {
//      
// }

export const updateBookList = ( state, data ) => {
    state.bookList = data
}
export const setCurrentBook = ( state, data ) => {
    state.currentBook = data
}
export const setIsLoading = ( state, data ) => {
    state.isLoading = data
}