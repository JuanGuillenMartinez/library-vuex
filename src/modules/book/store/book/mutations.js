// las mutations se encargan de modificar el estado de las variables ya que estas no pueden ser modificadas de forma directa.

// export const myMutation = ( state ) => {
//      
// }

export const updateCustomerList = ( state, data ) => {
    state.customerList = data
}
export const setCurrentCustomer = ( state, data ) => {
    state.currentCustomer = data
}
export const setIsLoading = ( state, data ) => {
    state.isLoading = data
}