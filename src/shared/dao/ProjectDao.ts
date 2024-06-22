type Projects = unknown[]

const APP_URL = import.meta.env.VITE_APP_URL
const APP_VERSION = import.meta.env.VITE_APP_VERSION

function urlParams(path: string, params?: Record<string, string | number>) {
    const ENDPOINT = APP_URL + APP_VERSION + path
    const baseUrl = new URL(ENDPOINT)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && baseUrl.searchParams.append(k, v + '')
    })
    return baseUrl.toString()
}


const path = urlParams('/projects')

export const getProjects = async (signal: AbortSignal): Promise<Projects> => {
    try {
        const { data } = await fetch<{ message: string; data: Projects }>(path, { signal })
        return data as Projects
    } catch (error: unknown) {
        throw error as ApiError
    }
}