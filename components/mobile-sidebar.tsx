"use client"
import { Menu } from "lucide-react/";
import { Button } from "@/components/ui/button";
import { 
    Sheet,
    SheetTrigger,
    SheetContent,
 } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

const MobileSidebar = () => {
    const [isMounted , setIsMouted] = useState(false);

    useEffect(() => {
        setIsMouted(true);
    }, []);

    if(!isMounted) return false;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar;