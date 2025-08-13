import React from "react";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-4 text-white shadow-md ">
      <img src="/logo.svg" alt="Logo"  />
      {isSignedIn ? 
        <div className="flex items-center gap-4">
          <Link to={'/dashboard'}>
          <Button>Dashboard</Button>
          </Link>
          
          <UserButton/>
          
        </div>:
       <Link to={'/auth/sign-in'}>
        <Button className="bg-primary">Get Started</Button>
        </Link>
      }
    </div>
  );
}

export default Header;
