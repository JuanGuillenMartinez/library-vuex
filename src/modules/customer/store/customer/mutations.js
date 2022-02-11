// las mutations se encargan de modificar el estado de las variables ya que estas no pueden ser modificadas de forma directa.

// export const myMutation = ( state ) => {
//      
// }

export const updateCustomerList = ( state, data ) => {
    state.customerList = data
}