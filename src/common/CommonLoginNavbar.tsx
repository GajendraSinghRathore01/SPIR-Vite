import { logo } from "../assets"

const CommonLoginNavbar = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto py-4 flex justify-between items-center">
        {/* <img src={logo} /> */}
         <h1 className="text-5xl font-bold text-blue-400 cursor-pointer" >SPIR</h1>
        <div className="flex space-x-2 text-xl font-semibold">
            <p className="hover:text-[#fa8232]">Login</p>
            <p>|</p>
            <p className="hover:text-[#fa8232]">Signup</p>
        </div>
      </div>
    </div>
  )
}

export default CommonLoginNavbar
