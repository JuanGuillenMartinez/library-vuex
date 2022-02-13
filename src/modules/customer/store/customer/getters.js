//los getters nos ofrecen acceso a las propiedades de los state

export const customers = ( state ) => {
    return state.customerList;
}

export const currentCustomer = ( state ) => {
    return state.currentCustomer;
}
export const isLoading = ( state ) => {
    return state.isLoading;
}