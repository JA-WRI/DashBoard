import Image from "next/image";

export default function TopBar() {
    return (
        <div className="h-12 flex items-center justify-between px-4 border-b">
            <div className="flex items-center gap-2">
                <Image
                    src="/Bombardier_logo.png"  // Path relative to the public folder
                    alt="Bombardier logo"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <button className="px-3 py-1 border rounded-md text-sm">Something</button>
                    <button className="px-3 py-1 border rounded-md text-sm">Else</button>
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
        </div>
    );
}