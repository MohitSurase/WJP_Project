import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ContactCard1 from "./ContactCard1";
import ContactSocials from "./ContactSocials";
import ContactQuery from "./ContactQuery";

function ContactUs() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
      <main>
        <div className=" py-4">
          <ContactCard1 />
          <div className="row align-items-md-stretch">
            <ContactSocials />
            <ContactQuery />
          </div>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </main>
    </>
  );
}

export default ContactUs;
