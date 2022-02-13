// las mutations se encargan de modificar el estado de las variables ya que estas no pueden ser modificadas de forma directa.

// export const myMutation = ( state ) => {
//      
// }

export const changeUserAuth = ( state, isAuth ) => {
    state.userIsLoggedIn = isAuth
}

export const setCurrentUser = ( state, user ) => {
    state.currentUser = user
}

export const setCurrentToken = ( state, token ) => {
    state.currentToken = token
}