import { dataCall } from "./api"
import endpoints from "./endpoints"

const fetchAllPosts = () => {
    return fetch(`${endpoints.DEV_TO_ENDPOINT}?username=${endpoints.DEV_TO_USERNAME}`)
}

const fetchPostBySlug = (slug) => {
    return fetch(`${endpoints.DEV_TO_ENDPOINT}/${endpoints.DEV_TO_USERNAME}/${slug}`)
}

export const getAllBlogPosts = () => {
    return dataCall(fetchAllPosts)
}

export const getBlogPostBySlug = (slug) => {
    return dataCall(fetchPostBySlug, slug)
}



