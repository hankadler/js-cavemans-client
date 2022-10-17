// background
import homeBackground from "./home-background-1920x1080.png";
import menuBackground from "./menu-background-1920x1080.png";
import defaultBackground from "./default-background-1920x1080.png";
// menu
import brisket from "./brisket-200x200.png";
import chuck from "./chuck-200x200.png";
import nyStrip from "./ny-strip-200x200.png";
import porterhouse from "./porterhouse-200x200.png";
import ribeye from "./ribeye-200x200.png";
import sirloin from "./sirloin-200x200.png";
import skirt from "./skirt-200x200.png";
import bisonNYStrip from "./bison-ny-strip-200x200.png";
import bisonRibeye from "./bison-ribeye-200x200.png";
import bisonSirloin from "./bison-sirloin-200x200.png";
import shrimp from "./shrimp-200x200.png";
import salmon from "./salmon-200x200.png";
import pork from "./pork-200x200.png";
import chicken from "./chicken-200x200.png";
import eggs from "./eggs-200x200.png";
import potatoFries from "./potato-fries-200x200.png";
import sweetPotatoFries from "./sweet-potato-fries-200x200.png";
import onionRings from "./onion-rings-200x200.png";
import tostones from "./tostones-200x200.png";
import breadfruitTostones from "./breadfruit-tostones-200x200.png";
import amarillos from "./amarillos-200x200.png";
import bbq from "./bbq-sauce-200x200.png";
import carbonara from "./carbonara-sauce-200x200.png";
import chimi from "./chimichurri-sauce-200x200.png";
import dijon from "./dijon-sauce-200x200.png";
import garlicButter from "./garlic-butter-sauce-200x200.png";
import marsala from "./marsala-sauce-200x200.png";
import mayoKetchup from "./mayo-ketchup-sauce-200x200.png";
import teriyaki from "./teriyaki-sauce-200x200.png";
import appleJuice from "./apple-juice-200x200.png";
import coconutJuice from "./coconut-juice-200x200.png";
import icedTea from "./iced-tea-200x200.png";
import lemonJuice from "./lemon-juice-200x200.png";
import orangeJuice from "./orange-juice-200x200.png";
import pineappleJuice from "./pineapple-juice-200x200.png";
import tamarindJuice from "./tamarind-juice-200x200.png";
import banana from "./banana-200x200.png";
import greekYogurt from "./greek-yogurt-200x200.png";
import mandarin from "./mandarin-200x200.png";
import pineapple from "./pineapple-200x200.png";

// IMPORTANT: menu must have one field for each type defined!

const images = {
  backgrounds: {
    home: `url(${homeBackground})`,
    menu: `url(${menuBackground})`,
    locate: `url(${defaultBackground})`,
    about: `url(${defaultBackground})`,
    test: "black"
  },
  menu: {
    FOOD: {
      brisket: `url(${brisket})`,
      chuck: `url(${chuck})`,
      nyStrip: `url(${nyStrip})`,
      porterhouse: `url(${porterhouse})`,
      ribeye: `url(${ribeye})`,
      sirloin: `url(${sirloin})`,
      skirt: `url(${skirt})`,
      bisonNYStrip: `url(${bisonNYStrip})`,
      bisonRibeye: `url(${bisonRibeye})`,
      bisonSirloin: `url(${bisonSirloin})`,
      shrimp: `url(${shrimp})`,
      salmon: `url(${salmon})`,
      pork: `url(${pork})`,
      chicken: `url(${chicken})`
    },
    SIDE: {
      eggs: `url(${eggs})`,
      potatoFries: `url(${potatoFries})`,
      sweetPotatoFries: `url(${sweetPotatoFries})`,
      onionRings: `url(${onionRings})`,
      tostones: `url(${tostones})`,
      breadfruitTostones: `url(${breadfruitTostones})`,
      amarillos: `url(${amarillos})`
    },
    SAUCE: {
      bbq: `url(${bbq})`,
      carbonara: `url(${carbonara})`,
      chimi: `url(${chimi})`,
      dijon: `url(${dijon})`,
      garlicButter: `url(${garlicButter})`,
      marsala: `url(${marsala})`,
      mayoKetchup: `url(${mayoKetchup})`,
      teriyaki: `url(${teriyaki})`
    },
    DRINK: {
      appleJuice: `url(${appleJuice})`,
      coconutJuice: `url(${coconutJuice})`,
      icedTea: `url(${icedTea})`,
      lemonJuice: `url(${lemonJuice})`,
      orangeJuice: `url(${orangeJuice})`,
      pineappleJuice: `url(${pineappleJuice})`,
      tamarindJuice: `url(${tamarindJuice})`
    },
    DESSERT: {
      banana: `url(${banana})`,
      greekYogurt: `url(${greekYogurt})`,
      mandarin: `url(${mandarin})`,
      pineapple: `url(${pineapple})`
    },
  }
};

export default images;
