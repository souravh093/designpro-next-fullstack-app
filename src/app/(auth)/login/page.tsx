import AuthNav from "@/components/AuthNav";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="h-screen">
      <AuthNav />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Image
            alt="side login image"
            src="/images/design.svg"
            width={100}
            height={100}
            className="h-screen w-full"
          />
        </div>

        <div className="flex justify-center items-center mt-20 lg:mt-0">
          <div className="px-10 lg:px-32 w-full">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
