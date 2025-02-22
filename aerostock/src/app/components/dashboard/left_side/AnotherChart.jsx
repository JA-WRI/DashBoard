'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
    {
        name: 'Mon',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Tue',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Wed',
        uv: -1000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Thur',
        uv: 500,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Fri',
        uv: -2000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Sat',
        uv: -250,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Sun',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const AnotherChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-seminold pb-6'>Carbon Emissions</h1>
                <Image src="/three_dots.jpg" alt="three dots" width={20} height={10} />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <AreaChart
                    width={300}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="green" stopOpacity={1} />
                            <stop offset={off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default AnotherChart