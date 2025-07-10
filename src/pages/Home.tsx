import { useEffect } from 'react';
import { useToast } from '../common/ToastNotification';

const Home = () => {
  const {showToast} = useToast();
  useEffect(() => {
      const justLoggedIn = sessionStorage.getItem("justLoggedIn");
    if (justLoggedIn) {
      showToast("Login successful", "success");
      sessionStorage.removeItem("justLoggedIn"); 
    }
  },[]);
  return (
    <div className=" h-screen flex justify-center items-center bg-gray-100 ">
      <div className="p-2  w-full text-center">
       <h1 className="text-xl italic ">Home page</h1>
      </div>
    </div>
  )
}

export default Home
