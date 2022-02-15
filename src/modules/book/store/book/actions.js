//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { fetchList } from "../test";

const url = '/books';

export const fetchBookList = async ( { commit } ) => {
    const config = {
        url,
        commitName: 'updateBookList'
    }
    return await fetchList( commit, config )
}