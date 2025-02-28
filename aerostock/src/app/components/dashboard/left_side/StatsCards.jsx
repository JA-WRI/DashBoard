import Image from "next/image";
import Link from "next/link";
export default function StatsCard({ name }) {
  return (
    <div className='rounded-2xl odd:bg-sky-200 even:bg-sky-900 p-4 flex-1'>
      <div className='flex justify-between items-center mb-4'>
        <span className='text-[10px] bg-white px-2 py-1 rounded-full text-sky-900'>2025/02</span>
        <Link href="/anotherPage">
          {/* Link component wraps the Image directly, no <a> needed */}
          <Image class="mix-blend-multiply"src="/three_dots.jpg" alt="three dots" width={20} height={10} />
        </Link>
      </div>
      <h1 className='text-2xl font-semibold my-4'>1283</h1>
      <h1 className='capitalize text-sm font-medium text-grey-500'>{name}</h1>
    </div>
  );
}