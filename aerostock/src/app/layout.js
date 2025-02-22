import "./globals.css";
import TopBar from './components/navigation/TopBar';
import Navigation from './components/navigation/Navigation';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex flex-col">
          {/* Top Navigation Area */}
          <div className="h-24 border-b flex flex-col">
            <TopBar />
            <Navigation />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-gray-50 p-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
