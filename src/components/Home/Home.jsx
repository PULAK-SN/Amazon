import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30003._CB542120021_.jpg"
        alt=""
      />

      <div className="home_row">
        <Product
          id="12512"
          title="Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things"
          img="https://m.media-amazon.com/images/I/41ZeaEn3V4L._SY445_SX342_.jpg"
          price={12.56}
          rating={5}
        />
        <Product
          id="5481"
          title="Norwegian Wood: Million copy bestseller by Japanese author Haruki Murakami "
          img="https://m.media-amazon.com/images/I/81zqVhvbHbL._SY466_.jpg"
          price={15.53}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="452112"
          title="Samsung Galaxy Watch Ultra (47mm, LTE, Gray) with Upto 100h Battery | 3nm Processor | Dual GPS | Quick Button/Siren | Sapphire Glass & Titanium | 10ATM & IP68 | BP & ECG Monitor | Energy Score & Ages"
          img="https://m.media-amazon.com/images/I/81i1Vn-KQuL._AC_UY218_.jpg"
          price={354.12}
          rating={5}
        />
        <Product
          id="4512"
          title="Audio Array AM-C1 USB Condenser Microphone Kit | 192kHz/24bit | BoomArm, Pop Filter, Mic Cover, Shock Mount, Tripod & 2.5M USB Cable | Podcasting, Gaming, Singing & Live Streaming"
          img="https://m.media-amazon.com/images/I/51Oyw7ZrF3L._AC_UL320_.jpg"
          price={99}
          rating={4}
        />
        <Product
          id="5488"
          title="OnePlus Pad Go 28.85Cm (11.35 Inch) 2.4K 7:5 Ratio Readfit Eye Care LCD Display,Dolby Atmos Quad Speakers,4G LTE(Calling) + Wi-Fi Connectivity Tablet,8Gb Ram 256 Gb Storage Expandable Up-to 1Tb,Green"
          img="https://m.media-amazon.com/images/I/51oj5gE7P+L._AC_UY218_.jpg"
          price={219.63}
          rating={4}
        />
      </div>

      <div className="home_row">
        <Product
          id="5489"
          title="Samsung Odyssey OLED G9 49-inch(124.4cm) Dual QHD 5120 x 1440 Curved 1800R Gaming Monitor, 240Hz, 0.03ms, FreeSync Premium Pro, G-Sync, Quantum Dot, HDR10+, Speaker, HAS (LS49CG930SWXXL, Silver)"
          img="https://m.media-amazon.com/images/I/81PisHwSqhL._AC_UY218_.jpg"
          price={1159.63}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
