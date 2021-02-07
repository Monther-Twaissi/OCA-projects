import React, { useEffect } from "react";
import BgVideo from "../components/layout/backgroundVideo";
import Testimonials from "../components/layout/testimonals";
// import Footer from "../components/layout/footer";
import Servicesbrief from "../components/layout/servicesInfo";
import Team from "../components/layout/team";
import Youtupe from "../components/layout/youtubeapi/Api";
export default function Home() {
  useEffect(() => {
    fetch("http://localhost/PHP---Mini-Project/api.php")
      .then((r) => r.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <BgVideo />
      <h1>What We Do?</h1>
      <Servicesbrief />
      <h1>Our Team</h1>
      <br />
      <Team />
      <h1>Testimonials</h1>
      <Testimonials />
      <Youtupe />
    </div>
  );
}
