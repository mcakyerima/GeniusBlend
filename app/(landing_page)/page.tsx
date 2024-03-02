import { Button } from "@/components/ui/button";
import Link  from "next/link";

const LandingPage = () => {
    return ( 
        <div>
            <h2>THIS IS LANDING PAGE</h2>
            <Link href="/sign-in">
                <Button>
                    Login
                </Button>
            </Link>
            <Link href="/sign-up">
                <Button>
                    Register
                </Button>
            </Link>
        </div>
     );
}
 
export default LandingPage;