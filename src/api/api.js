
// note this should be imported from env
export const baseUrl = 'http://localhost:3000'

export const dataCall = async (apiCall, params) => {
    return apiCall(params)
        .then((response) => {
            if (!response.ok) throw Error (response.statusText)
            return response.json()
        })
        .catch((error) => { 
            return { error } 
        })
}