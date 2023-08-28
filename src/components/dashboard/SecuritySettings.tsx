'use client'
import Link from 'next/link'
import { MdEdit } from "react-icons/md"

export default function SecuritySettings() {
    return (
        <form>
            <div className="">
                <div className="pb-6 border-b border-gray-900/10">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Security Settings</h2>
                    <p className="text-sm leading-6 text-gray-600">Secure your account below</p>

                    <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Sign-in Email
                            </label>
                            <Link href={'/auth/reset-password'} className="text-primary font-semibold text-sm flex items-center gap-2">
                                kartik100100@gmail.com
                                <MdEdit />
                            </Link>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                Password
                            </label>
                            <Link href={'/auth/reset-password'} className="text-primary font-semibold text-sm flex items-center gap-2">
                                Change Password
                                <MdEdit />
                            </Link>
                        </div>

                        <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                Phone Number
                            </label>
                            <Link href={'/auth/reset-password'} className="text-primary font-semibold text-sm flex items-center gap-2">
                                Add Phone
                                <MdEdit />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-3 py-2 text-sm font-semibold text-white transition-all rounded-md shadow-sm bg-primary hover:bg-primary400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
