import { blackLogo, blueLogo } from "../assets"

const CommonLoginNavbar = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
         <img src={blackLogo} className="w-24 cursor-pointer" />
        <div className="flex space-x-2 text-xl font-semibold">
            <p className="hover:text-[orange]">Login</p>
            <p>|</p>
            <p className="hover:text-[orange]">Signup</p>
        </div>
      </div>
    </div>
  )
}

export default CommonLoginNavbar
