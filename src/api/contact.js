import { baseUrl, dataCall } from "./api"


const postMessageFetch = (params) => {
    return fetch(`${baseUrl}/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
}

const postMessage = (params) => {
    return dataCall(postMessageFetch, params)
}


export default postMessage
