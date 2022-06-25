

export const fetchHome = async (id) => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/nodes?category=18`)
    let data = res.json()
    return data
}

export const fetchAbout = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/nodes?category=14`)
    let data = res.json()
    return data
}
export const fetchPortfoilo = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/nodes?section=16`)
    let data = res.json()
    return data
}
export const fetchPortfoiloCats = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/categories?section=16`)
    let data = res.json()
    return data
}
export const fetchServices = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/nodes?category=38`)
    let data = res.json()
    return data
}
export const fetchSections = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/sections?page=5`)
    let data = res.json()
    return data
}
export const fetchPosts = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/nodes?section=23`)
    let data = res.json()
    return data
}
export const fetchPostsCats = async () => {

    let res = await fetch(`http://backend.test.ikoniks.de/api/website/categories?section=23`)
    let data = res.json()
    return data
}
