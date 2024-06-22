import { useEffect } from 'react'

const token = 'Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjZlNGQyMGQtMDBmOC00N2U4LTg3MmEtNzM2NjMyNzE4NTQzIiwiaWF0IjoxNzE4OTYwNTk5LCJleHAiOjE3MTk1NjUzOTl9.U3M-mN9NrLqnH98WFJdu0u5ZiPAsRbdQBxZGp4Z9_os'

export default function Dashboard() {
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const { data }: { data: unknown } = await fetch(`/projects`, { signal: controller.signal, headers: { Authorization: token, 'Content-Type': 'application/json' } }).then(res => res.json())
                console.log('result: ', data)
            } catch (error) {
                console.log(error)
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
