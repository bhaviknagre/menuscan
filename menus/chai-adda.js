// Menu for: Chai Adda  (second example restaurant - copy this file to add a new one)
window.MENU = {
  name: "Chai Adda",
  // Optional colours and heading font for this restaurant (see menus/_template.js)
  theme: { primary: "#7A3E1D", accent: "#E8923A", font: "Baloo 2" },
  tagline: { en: "Chai, snacks and good conversations", hi: "चाय, नाश्ता और अच्छी बातें" },
  categories: [
    { id: "chai",   en: "Chai & coffee", hi: "चाय और कॉफ़ी" },
    { id: "snacks", en: "Snacks",        hi: "नाश्ता" }
  ],
  items: [
    { id: 1, cat: "chai",   veg: true, price: 20, available: true, en: "Cutting chai",   hi: "कटिंग चाय",   desc: "Strong and sweet" },
    { id: 2, cat: "chai",   veg: true, price: 35, available: true, en: "Masala chai",    hi: "मसाला चाय",   desc: "Ginger, cardamom and clove", tag: "chef" },
    { id: 3, cat: "chai",   veg: true, price: 50, available: true, en: "Filter coffee",  hi: "फ़िल्टर कॉफ़ी", desc: "South Indian style" },
    { id: 4, cat: "snacks", veg: true, price: 30, available: true, en: "Vada pav",       hi: "वडा पाव",     desc: "With dry garlic chutney", tag: "spicy" },
    { id: 5, cat: "snacks", veg: true, price: 60, available: true, en: "Poha",           hi: "पोहा",        desc: "With sev and lemon" },
    { id: 6, cat: "snacks", veg: true, price: 40, available: true, en: "Bun maska",      hi: "बन मस्का",    desc: "Soft bun with butter" }
  ]
};
