import ApplyForms from "../components/ApplyForms";
import Contact from "../components/Contact";
import FacilitationCouncil from "../components/FacilitationCouncil";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slide from "../components/Slide";
import TeachingInterns from "../components/TeachingInterns";
import Videos from "../components/Videos";
import VisionaryLeaders from "../components/VisionaryLeaders";


const pages = () => {
  return (
    <>
      <Header />
      <Slide />
      <FacilitationCouncil />
      <ApplyForms />
      <TeachingInterns />
      <VisionaryLeaders />
      <Videos />
      <Contact />
      <Footer />
    </>
  );
};

export default pages;
