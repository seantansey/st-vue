import { dataCall } from "./api"
import endpoints from "./endpoints"


const fetchMessage = (params) => {
    return fetch(`${endpoints.NODE_API_ENDPOINT}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
}

const postMessage = (params) => {
    return dataCall(fetchMessage, params)
}


export default postMessage
