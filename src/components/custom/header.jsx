import React from "react";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const {user,isSignedIn}= useUser()
  return (
    <header className="flex justify-between shadow-md">
      <img alt="" src="src/assets/resume_logo.png" className="h-20 w-auto" />
      {isSignedIn ?
        <div className="flex gap-5 m-5 item-center">
          <Link to={'/'}>
            <Button variant="outline" >Dashboard</Button>
          </Link>
         
         <UserButton/>
        </div>:
        <Link to={'auth/signin'}>
          <Button className="m-5">Get Started</Button>
        </Link>
      }
  
    </header>
  );
}

export default Header;
