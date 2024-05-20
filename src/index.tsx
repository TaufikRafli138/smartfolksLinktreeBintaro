import React from "react";
import ReactDOM from "react-dom/client";

import Logo from "./component/logo";
import CustomLinkees from "./component/linkess";
import Footer from "./component/footer";

import "./css/normalize.css";
import "./css/style.css";

const outlet = [
  {
    title: "Smartfolks Coffee Bintaro Plaza ",
    subtitle: "Look at my work!",
    type: "gofood",
    link: "https://gofood.link/a/LubYFW5",
  },
  {
    title: "GitHub",
    subtitle: "@heysagnik | 🏡 to all my open-source projects",
    type: "grabfood",
    link: "https://r.grab.com/g/6-20240517_150716_1b44666b0983188d_MEXMPS-6-C6KCCXCYGGDYG6",
  },
  {
    title: "Instagram",
    subtitle: "@heysagnik | Shots of my life 🙂",
    type: "shopee",
    link: "https://instagram.com/heysagnik",
  },
  {
    title: "Twitter",
    subtitle: "@heysagnik | 😉",
    type: "wa",
    link: "https://api.whatsapp.com/send?phone=6281318709737&text=Halo%20apakah%20ini%20benar%20dengan%20smartfolks%20coffee%20cabang%20bintaro%20plaza%20%3F%20",
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: "gmaps",
    link: "https://www.google.com/maps/dir/my+location/Smartfolks+Coffee+Bintaro+Plaza,+Bintaro+Plaza,+Pondok+Karya,+Pondok+Aren,+South+Tangerang+City,+Banten/@-6.3024841,106.6764988,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e69fb5928113675:0x663fc8081bbdd250!2m2!1d106.7417163!2d-6.2718623!3e0?entry=ttu",
  },
];

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Logo />
      <CustomLinkees items={outlet} />
      < Footer />
    </React.StrictMode>
  );
}
