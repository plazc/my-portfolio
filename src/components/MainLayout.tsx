import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <MobileNav />
            <Sidebar />
            <div className="p-4 sm:ml-64">
                <div className="p-4 rounded-lg mt-14 sm:mt-0 max-w-4xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
