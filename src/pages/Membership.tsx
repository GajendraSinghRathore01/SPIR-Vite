import DynamicContent from "../components/membership/DynamicContent"
import HappyCustomers from "../components/membership/HappyCustomers"
import SpirMembership from "../components/membership/SpirMembership"
import VideoSection from "../components/membership/VideoSection"

const Membership = () => {
  return (
    <div>
        <SpirMembership/>
        <DynamicContent/>
        <VideoSection/>
        <HappyCustomers/>
    </div>
  )
}

export default Membership
