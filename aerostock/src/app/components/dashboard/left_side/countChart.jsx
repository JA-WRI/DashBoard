'use client'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
    {
        name: 'Total',
        count: 6000,
        fill: 'white',
    },
    {
        name: 'Planes in service',
        count: 1460,
        fill: 'red',
    },
    {
        name: 'Planes out',
        count: 5643,
        fill: '#83a6ed',
    },
  
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

const countChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/*tite*/}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-seminold'>Number Planes</h1>
                <Image class="mix-blend-multiply" src="/three_dots.jpg" alt="three dots" width={20} height={10} />
            </div>
            {/*Chart*/}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="count"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/airplane-icon.jpg' alt='airplane icon' width={100} height={100} className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mix-blend-multiply'/>
            </div>
            {/*Bottom*/}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1' >
                    <div className='w-5 h-5 bg-sky-200 rounded-full'></div>
                    <h1 className='font-bold'>2837</h1>
                    <h2 className='text-xs text-grey-300'>Planes (55%)</h2>
                </div>
                <div className='flex flex-col gap-1' >
                    <div className='w-5 h-5 bg-yellow-200 rounded-full'></div>
                    <h1 className='font-bold'>2837</h1>
                    <h2 className='text-xs text-grey-300'>Planes OUt(12%)</h2>
                </div>


            </div>
        </div>
    )
}
export default countChart
