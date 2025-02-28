import Image from "next/image";
import Link from "next/link";

export default function StatsCard({ name }) {
  return (
    <div className='rounded-2xl odd:bg-sky-200 even:bg-sky-900 p-4 flex-1 group'>
      <div className='flex justify-between items-center mb-4'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-sky-900'>2025/02</span>
        <Link href="/anotherPage">
          <Image className="mix-blend-multiply" src="/three_dots.jpg" alt="three dots" width={20} height={10} />
        </Link>
      </div>
      <h1 className='text-2xl font-semibold my-4 text-black group-even:text-white'>
        {/* Apply text-white if background is sky-900 (even), otherwise black */}
        1283
      </h1>
      <h1 className='capitalize font-medium text-grey-500 group-even:text-white'>
        {/* Apply text-white if background is sky-900 (even), otherwise black */}
        {name}
      </h1>
    </div>
  );
}
