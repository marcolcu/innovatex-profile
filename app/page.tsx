"use client";

import {Navbar} from "@/components/Navbar";
import CompanyProfile from "@/components/company-profile";
import {Footer} from "@/components/component/footer";

const Home = () => {
  return (
    <>
        <Navbar />
        <CompanyProfile />
        <Footer />
    </>
  );
};

export default Home;
