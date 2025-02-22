import StatsCard from './left_side/StatsCards';
import CountChart from './left_side/countChart'
import AnotherChart from './left_side/AnotherChart';
import EventCalendar from './right_side/EventCalendar';
import Announcements from './right_side/Announcements';
import WorldMapDemo from './left_side/map/MapDemo';
export default function DashboardGrid() {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left Side*/}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        <div className='flex gap-4 justify-between flex-wrap'>
          <StatsCard name='Planes out'></StatsCard>
          <StatsCard name='Eco Savings'></StatsCard>
          <StatsCard name='shipments'></StatsCard>
        </div>
        {/*Middle Charts*/}
        <div className='w-full h-[500px]'>
          <WorldMapDemo/>
        </div>
        {/*Bottom charts*/}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/*Chart 1*/}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/*Chart 2*/}
          <div className='w-full lg:w-2/3 h-[450px]'>
          <AnotherChart />
          </div>
        </div>
      </div>
      {/* Right Side*/}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalendar/>
      <Announcements/>
      </div>
    </div>
  );
}