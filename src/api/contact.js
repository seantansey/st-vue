import { dataCall } from "./api"


const fetchMessage = (params) => {
    return fetch(`${process.env.VUE_APP_NODE_API}/message`, {
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
