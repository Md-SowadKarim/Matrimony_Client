import Banner from "../../components/Home/Banner";
import HowToWork from "../../components/Home/HowToWork";
import PremiumBios from "../../components/Home/PremiumBios"
import { Helmet } from 'react-helmet-async';
import States from "../../components/Home/States";
import Story from "../../components/Home/Story";
import Spinner from "../../components/Shared/Spinner";

const Home = () => {
  return (
    
    <div className="container mx-auto bg-gray-100 dark:bg-blue-950 py-4">
      <Helmet>
        <title>Home | Marry</title>
      </Helmet>
      <Banner/>
      <PremiumBios/>
      <HowToWork/>
      <States/>
      <Story/>
     
    </div>
  )
}

export default Home
