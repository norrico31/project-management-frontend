import { useEffect } from 'react'
import { getProjects } from '../shared/dao/ProjectDao';


export default function Dashboard() {
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const data = await getProjects(controller.signal)
                console.log('result: ', data)
            } catch (error: unknown) {
                const { message } = error as ApiError
                console.log('error: ', message)
            }
        })();
        return function () {
            controller.abort()
        }
    }, [])

    return (
        <div>Dashboard</div>
    )
}
