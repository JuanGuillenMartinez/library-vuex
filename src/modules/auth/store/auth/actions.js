//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http
import axios from '@/api/AxiosInstance'

export const fetchUserCredentials = async ( { commit }, credentials ) => {
    let authSuccess = false
    try {
        const { data: { success, data } } = await axios.post('/user/login', credentials)
        if( success ) {
            const { user, token } = data
            commit('changeUserAuth', true)
            commit('setCurrentUser', user)
            commit('setCurrentToken', token)
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