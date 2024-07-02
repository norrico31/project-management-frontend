import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Link, } from 'react-router-dom';
import { projectsDao } from '../../shared/dao/ProjectDao';
import { Pagination } from '../../shared/components';
import { MdAdd } from "react-icons/md";

const { getProjects: getProjectsDao } = projectsDao()

export default function ProjectLists() {
    const [isModalOpen, setIsModalOpen] = useState(false)
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
            <h1 className="heading-1">Projects</h1>
            {/* <Loading /> */}
            <div className="flex justify-between items-center">
                <div className="mb-4">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                    </div>
                </div>
                <button className="btn create inline-flex items-center" onClick={() => setIsModalOpen(true)}>
                    Create
                    <MdAdd size={24} />
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 max-h-[600px] overflow-auto shadow-lg'>
                {new Array(50).fill(null).map((_, i) => <ProjectCard key={i} idx={i} />)}
            </div>
            {/* <Table /> */}
            <Pagination />
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    )
}

function ProjectCard({ idx }: { idx: number }) {
    return (
        <Link to={`/${idx}`} className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 max-w-full cursor-pointer">
            <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Project {idx + 1}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
            <p className="inline-flex font-medium items-center text-blue-600 hover:underline">
                View
                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                </svg>
            </p>
        </Link>
    )
}

function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return <Dialog className="relative z-10" open={open} onClose={onClose}>
        <DialogBackdrop transition className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />
        <div className="fixed inset-0 z-10 w-screen ">
            <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-4">
                <DialogPanel
                    transition
                    className="relative transform overflow-x-auto rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl lg:px-3 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className="bg-white overflow-y-auto px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                    Deactivate account
                                </DialogTitle>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={onClose}
                        >
                            Deactivate
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={onClose}
                            data-autofocus
                        >
                            Cancel
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </div>
    </Dialog>
}