// los states son variables que se caracterizan por ser reactivas

export default () => ({
    userIsLoggedIn: (localStorage.getItem('isAuth') === "true"),
    currentUser: null,
    currentToken: '',
})