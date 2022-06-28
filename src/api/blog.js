import { dataCall } from "./api"

const fetchAllPosts = () => {
    return fetch(`${process.env.VUE_APP_DEV_TO_URL}?username=${process.env.VUE_APP_DEV_USERNAME}`)
}

const fetchPostBySlug = (slug) => {
    return fetch(`${process.env.VUE_APP_DEV_TO_URL}/${process.env.VUE_APP_DEV_USERNAME}/${slug}`)
}

export const getAllBlogPosts = () => {
    return dataCall(fetchAllPosts)
}

export const getBlogPostBySlug = (slug) => {
    return dataCall(fetchPostBySlug, slug)
}



