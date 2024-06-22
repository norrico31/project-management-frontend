import { useEffect } from 'react'
import { projectsDao } from '../shared/dao/ProjectDao';

const { getProjects: getProjectsDao } = projectsDao()

export default function Dashboard() {
    useEffect(() => {
        const controller = new AbortController();
        getProjects(controller.signal)
        return function () {
            controller.abort()
        }
    }, [])

    async function getProjects(signal: AbortSignal) {
        try {
            const data = await getProjectsDao(signal)
            console.log('result: ', data)
        } catch (error: unknown) {
            const { message } = error as ApiError
            console.log('error: ', message)
        }
    }

    return (
        <div>Dashboard</div>
    )
}
