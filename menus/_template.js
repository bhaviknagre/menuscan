// =====================================================================
// TEMPLATE FOR A NEW RESTAURANT
// 1. Copy this file and rename it, e.g.  menus/shree-datta-hotel.js
//    (lowercase letters, numbers and hyphens only – this is the restaurant ID)
// 2. Fill in the details below. Everything marked (optional) can be deleted.
// 3. Open  https://YOUR-SITE/?r=shree-datta-hotel&table=1  to check it.
// =====================================================================
window.MENU = {
  name: "Restaurant Name",
  tagline: { en: "Short line about the restaurant", hi: "रेस्टोरेंट के बारे में एक लाइन" },

  // (optional) WhatsApp number that receives orders: digits only, with country code.
  // If left out, orders go to the default number in index.html (DEFAULT_WA).
  whatsapp: "91XXXXXXXXXX",

  // (optional) Wide header photo, about 1200 x 675 px. See images/README.txt
  cover: "images/restaurant-id/cover.webp",

  // (optional) Colours, heading font and logo
  theme: {
    primary: "#2F5D3A",   // main colour: header, buttons (use a darker colour – white text sits on it)
    accent:  "#E3A21A",   // highlight colour: table badge, "Chef's pick"
    font:    "Yatra One", // any Google Fonts name for headings, e.g. "Baloo 2", "Playfair Display"
    logo:    "images/restaurant-id/logo.png"   // square, about 256 x 256 px
  },

  // (optional) Replaces the greeting on the welcome screen
  welcome: { en: "Namaste! Welcome to Restaurant Name 🙏", hi: "नमस्ते! Restaurant Name में आपका स्वागत है 🙏" },

  // (optional) Shown on the thank-you screen after the table is closed
  reviewUrl: "https://g.page/r/XXXXXXXX/review",   // Google review link
  instagram: "restaurant_handle",                  // Instagram username or full link

  categories: [
    { id: "starters", en: "Starters", hi: "स्टार्टर" },
    { id: "main",     en: "Main course", hi: "मुख्य व्यंजन" }
  ],

  // Each dish:
  //   id         unique number
  //   cat        must match a category id above
  //   veg        true = green mark, false = red mark
  //   price      in rupees
  //   available  false = greyed out as "Not available today"
  //   en / hi    dish name in English / Hindi (hi optional)
  //   desc       short description (optional)
  //   tag        (optional) "chef", "spicy" or "bestseller" – or tags: ["chef", "spicy"]
  //   image      (optional) square photo, about 800 x 800 px – see images/README.txt
  items: [
    { id: 1, cat: "starters", veg: true,  price: 180, available: true, en: "Paneer tikka", hi: "पनीर टिक्का",
      desc: "Tandoor-roasted cottage cheese with peppers", tag: "bestseller", image: "images/restaurant-id/paneer-tikka.webp" },
    { id: 2, cat: "main",     veg: false, price: 320, available: true, en: "Butter chicken", hi: "बटर चिकन",
      desc: "Creamy tomato gravy", tags: ["chef", "spicy"] }
  ]
};
