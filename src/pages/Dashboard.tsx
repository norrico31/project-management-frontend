import { useEffect } from 'react'
import { projectsDao } from '../shared/dao/ProjectDao';
import { Table } from '../shared/components';

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
        <div>
            {/* <button className="btn btn-primary">Primary</button> */}
            <Table />
        </div>

    )
}
