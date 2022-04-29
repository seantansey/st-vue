import { baseUrl, dataCall } from "./api"


const baseApiCall = async (params) => {
    const response = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    const json = await response.json()
    return json
}

const postMessage = (params) => {
    return dataCall(baseApiCall, params)
}


export default postMessage