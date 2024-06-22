type Projects = unknown[]

type ProjectDao = { message: string; data: Projects }

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

export const projectsDao = () => {
    const getProjects = async (signal: AbortSignal) => {
        const { data } = await fetch<ProjectDao>(urlParams(`/projects`), { signal })
        return data
    }

    const getProject = async (id: string) => {
        const { data } = await fetch<ProjectDao>(urlParams(`/projects${id ? ('/' + id) : ''}`))
        return data
    }

    return {
        getProjects,
        getProject,
    }
}