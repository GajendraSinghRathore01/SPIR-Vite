import { useEffect } from 'react';
import { useToast } from '../../common/ToastNotification';

const Home = () => {
  const {showToast} = useToast();
  useEffect(() => {
      const justLoggedIn = sessionStorage.getItem("justLoggedIn");
    if (justLoggedIn) {
      showToast("Login successful 👍", "success");
      sessionStorage.removeItem("justLoggedIn"); 
    }

  },[]);


  
  return (
    <div className=" h-screen p-5  bg-[url(/src/assets/progress.jpg)] bg-no-repeat bg-center bg-cover w-full">
      <div className="p-2 w-full text-center mt-16">
       <h1 className="text-xl italic text-[#456fff]">We're building something amazing behind the scenes!</h1>
       <h1 className="text-xl italic text-[#456fff]">But good news — you can still explore Schemes, Industrial Solutions, and Membership features!</h1>
      </div>
    </div>
  )
}

export default Home
  