//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { getAll, get } from '@/requests/Request'

export const fetchCustomerList = async ( { commit } ) => {
    const { data: { data } } = await getAll('/customers')
    commit('updateCustomerList', data)
}
export const fetchCustomerById = async ( { commit }, id ) => {
    commit('setIsLoading', true)
    const { data: { data } } = await get(`/customers/${id}`)
    commit('setCurrentCustomer', data)
    commit('setIsLoading', false)
}