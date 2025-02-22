export default function DashboardHeader() {
    return (
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-sm text-gray-500">OVERVIEW</div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-3 py-1 border rounded-md text-sm">Do somthing</button>
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm">
            Do something
          </button>
        </div>
      </div>
    );
  }