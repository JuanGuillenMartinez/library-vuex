//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { getAll } from '@/requests/Request'

export const fetchCustomerList = async ( { commit } ) => {
    const { data: { data } } = await getAll('/customers')
    commit('updateCustomerList', data)
}