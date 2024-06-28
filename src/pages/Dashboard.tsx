import { useState, useEffect } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { projectsDao } from '../shared/dao/ProjectDao';
import { Table, Pagination } from '../shared/components';

const { getProjects: getProjectsDao } = projectsDao()

export default function Dashboard() {
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
            <h1 className='text-h1'>Projects</h1>
            <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Open Modal</button>
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
            <Table />
            <Pagination />
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>

    )
}


function Modal({ open, onClose }: { open: boolean; onClose: () => void }) {
    return <Dialog className="relative z-10" open={open} onClose={onClose}>
        <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen ">
            <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-4">
                <DialogPanel
                    transition
                    className="relative transform overflow-x-auto rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl lg:px-3 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                >
                    <div className="bg-white overflow-y-auto px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                            </div> */}
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