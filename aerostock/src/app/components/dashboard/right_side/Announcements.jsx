import React from 'react'

const Announcements = () => {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-gray-200 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>This is a mock announcement</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                            date
                        </span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>random description</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-gray-200 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-black font-medium'>This is a mock announcement</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                            date
                        </span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>random description</p>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-gray-200 rounded-md p-4'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-medium'>This is a mock announcement</h2>
                        <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>
                            date
                        </span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>random description</p>
                </div>
            </div>
        </div>
    )
}
export default Announcements
