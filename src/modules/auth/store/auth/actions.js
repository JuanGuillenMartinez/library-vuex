//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http
import { post, get } from '@/requests/Request'

export const fetchUserCredentials = async ( { commit }, credentials ) => {
    let authSuccess = false
    try {
        const { data: { success, data } } = await post('/user/login', credentials)
        if( success ) {
            const { user, token } = data
            commit('changeUserAuth', true)
            commit('setCurrentUser', user)
            commit('setCurrentToken', token)
            localStorage.setItem('currentToken', token)
            localStorage.setItem('user', user)
            authSuccess = true
        } else {
            alert( 'Credenciales incorrectas: ', data.error )
        }
        return authSuccess
    } catch ( error ) {
        alert('Ha occurido un error')
        console.log( error )
    }
}

export const fetchLogoutUser = async ( { commit } ) => {
    try {
        await get('/user/logout')
        commit('changeUserAuth', false)
        localStorage.clear()
    } catch ( error ) {
        alert('Ha occurido un error')
        console.log( error )
    }
}