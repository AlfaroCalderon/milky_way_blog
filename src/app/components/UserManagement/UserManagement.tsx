'use client'
import { SearchIcon } from 'lucide-react';
export const UserManagement = () => {
    return(
        <>
        <section className='mx-auto w-full flex flex-col justify-center items-center p-8'>
            <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl bg-white rounded-lg shadow-sm p-4 gap-4">
                <h2 className="text-xl font-semibold text-gray-700">User Management</h2>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                    <div className="relative w-full sm:w-[400px] md:w-[500px]">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <SearchIcon className="h-5 w-5" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            className="pl-14 py-3 pr-3 w-full rounded-lg bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border border-blue-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 shadow-sm text-lg"
                        />
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                        Search
                    </button>
                </div>
            </div>
            <div className="w-full max-w-7xl overflow-auto rounded-lg bg-white">
            <table className="border-collapse min-w-[600px] w-full border border-gray-400 table-auto md:table-fixed"> 
                <thead className="bg-gray-100 text-gray-600">
                <tr>
                    <th className="border border-gray-300 p-4 text-left">USER</th>
                    <th className="border border-gray-300 p-4 text-left">ROLE</th>
                    <th className="border border-gray-300 p-4 text-left">STATUS</th>
                    <th className="border border-gray-300 p-4 text-left">JOINED</th>
                    <th className="border border-gray-300 p-4 text-left">ACTIONS</th>
                </tr>
                </thead>
                <tbody className="bg-white">
                <tr>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                    <td className="border border-gray-300 p-2">-</td>
                </tr>
                </tbody>
            </table>
            </div>
        </section>
        </>
    )
}