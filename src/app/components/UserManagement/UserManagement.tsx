'use client'

export const UserManagement = () => {
    return(
        <>
        <section className='mx-auto w-full flex flex-col justify-center items-center p-8'>
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