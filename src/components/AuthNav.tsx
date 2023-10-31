import Image from "next/image";

const AuthNav = () => {
  return (
    <div className="flex absolute top-2 left-2 lg:top-5 lg:left-10 items-center">
      <Image alt="logo" src="/images/logo.png" width={50} height={50}></Image>
      <h1 className="text-2xl font-bold ">DesignPro</h1>
    </div>
  );
};

export default AuthNav;
