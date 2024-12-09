import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Dock } from "@/components/dock";
import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <CreateWorkspaceModal />
            {/* Navbar */}
            <div className="flex top-0 left-0 w-full">
                <Navbar />
            </div>

            {/* Main layout container */}
            <div className="flex w-full pt-[64px]">
                {/* Sidebar */}
                <div className="hidden lg:block">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="flex-1 lg:ml-[calc(7rem+1rem)] py-8 mx-8">
                    <main>{children}</main>
                </div>
            </div>

            {/* Dock */}
            <div className="fixed bottom-0 left-0 w-full z-10">
                <Dock />
            </div>
        </div>
    );
};

export default DashboardLayout;