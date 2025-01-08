"use client";

import Navbar from "@/components/Navbar";
import {Footer} from "@/components/component/footer";
import Feature from "@/components/Feature";
import Pricing from "@/components/Pricing";
import {Contact} from "@/components/Contact";

const Home = () => {
  return (
    <>
        <Navbar />
        <Feature/>
        <Pricing/>
        <Contact/>
        <Footer />
    </>
  );
};

export default Home;
