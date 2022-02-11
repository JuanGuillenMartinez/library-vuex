//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import request from '@/api/AxiosInstance'

export const fetchCustomerList = async ( { commit } ) => {
    const { data: { data } } = await request.get('/customers')
    commit('updateCustomerList', data)
}