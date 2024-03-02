import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashBoard = ({
    children
} : {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full relative">
            <div className="hidden h-full z-20 md:flex md:w-[260px] md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                <Sidebar/>
            </div>
            <main className="md:pl-[260px]">
                <Navbar/>
                {children}
            </main>
        </div>
    ) 
}

export default DashBoard;
