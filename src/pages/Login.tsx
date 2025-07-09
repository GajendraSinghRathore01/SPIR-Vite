import { loginImage } from "../assets";
import CommonButton from "../common/CommonButton";
import CommonLoginNavbar from "../common/CommonLoginNavbar";
import InputField from "../common/InputField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";


const loginValidation = yup.object().shape({
  email: yup.string().required().email("please enter a valid email"),
  password: yup.string().required().min(6, "please enter atleast 6 characters"),
});
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    localStorage.setItem("login", data);
    navigate("/home");
  };
  return (
    <div className="h-screen md:overflow-y-hidden">
      <CommonLoginNavbar />
      <div className="flex justify-center items-center h-[93%]  bg-gray-100">
        <div className="py-20 w-[90%] h-full mx-auto flex justify-between  gap-10">
          <div className="w-[50%] bg-white rounded-lg   ">
            <img className="w-full h-full" src={loginImage} />
          </div>
          <div className="w-[50%] flex justify-center items-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[80%] pl-[15%] float-end mx-auto p-4  space-y-12   "
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <h1 className="text-2xl font-semibold">Log In</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Please enter your details
                </span>
              </div>
              <div className="space-y-4">
                <InputField
                  label="Email ID"
                  styleLabel="font-semibold"
                  name="email"
                  placeholder="enter your email"
                  styleInput="px-2 py-1 border  bg-white "
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Password"
                  styleLabel="font-semibold"
                  name="password"
                  placeholder="enter your password"
                  type="password"
                  styleInput="px-2 py-1 border bg-white "
                  register={register}
                  errors={errors}
                />
                <div className="text-xs text-blue-500 flex justify-between   ">
                  <p className="cursor-pointer">Sign In With OTP</p>
                  <p className="cursor-pointer">Forgot Password?</p>
                </div>
              </div>
              <CommonButton
                label="LOG IN"
                type="submit"
                styleLabel="text-lg text-white font-semibold"
                styleButton="w-28 px-2 py-1 rounded-lg bg-[#fa8232] cursor-pointer shadow-xl hover:bg-green-500"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
