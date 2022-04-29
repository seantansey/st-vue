
// note this should be imported from env
export const baseUrl = 'http://localhost:3000'

const errorHandler = (error) => console.error(error)

export const dataCall = (fetchApiCall, params) => {
    return fetchApiCall(params).catch(errorHandler)
}