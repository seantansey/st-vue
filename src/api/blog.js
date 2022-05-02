import { dataCall } from "./api"

const DEV_TO_URL = 'https://dev.to/api/articles'

const DEV_USERNAME = 'stansey92'

const getAllDevBlogPosts = () => {
    return fetch(`${DEV_TO_URL}?username=${DEV_USERNAME}`)
}

const getDevBlogPostBySlug = (slug) => {
    return fetch(`${DEV_TO_URL}/${DEV_USERNAME}/${slug}`)
}

export const getAllBlogPosts = () => {
    return dataCall(getAllDevBlogPosts)
}

export const getBlogPostBySlug = (slug) => {
    return dataCall(getDevBlogPostBySlug, slug)
}



