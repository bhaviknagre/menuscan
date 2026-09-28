// Menu for: Kesar Rasoi
// To change a price, edit "price". To hide a dish for today, set available:false.
// veg: true = green mark, false = red mark.  tag: "chef" or "spicy" (optional)
window.MENU = {
  name: "Kesar Rasoi",
  tagline: { en: "Pure ghee, fresh every day · Pune", hi: "शुद्ध घी, रोज़ ताज़ा · पुणे" },
  categories: [
    { id: "starters",      en: "Starters",               hi: "स्टार्टर" },
    { id: "maharashtrian", en: "Maharashtrian specials", hi: "महाराष्ट्रीयन ख़ास" },
    { id: "main",          en: "Main course",            hi: "मुख्य व्यंजन" },
    { id: "breads",        en: "Breads",                 hi: "रोटी" },
    { id: "rice",          en: "Rice & biryani",         hi: "चावल और बिरयानी" },
    { id: "desserts",      en: "Desserts",               hi: "मिठाई" },
    { id: "drinks",        en: "Beverages",              hi: "पेय" }
  ],
  items: [
    { id: 1,  cat: "starters", veg: true,  price: 180, available: true,  en: "Paneer tikka",      hi: "पनीर टिक्का",    desc: "Tandoor-roasted cottage cheese with peppers", tag: "chef" },
    { id: 2,  cat: "starters", veg: true,  price: 140, available: true,  en: "Hara bhara kebab",  hi: "हरा भरा कबाब",   desc: "Spinach, peas and potato patties" },
    { id: 3,  cat: "starters", veg: false, price: 260, available: true,  en: "Chicken 65",        hi: "चिकन 65",        desc: "Crisp fried chicken with curry leaves", tag: "spicy" },
    { id: 4,  cat: "starters", veg: false, price: 320, available: true,  en: "Surmai fry",        hi: "सुरमई फ्राई",     desc: "Kingfish in rava crust, Konkan style" },
    { id: 5,  cat: "maharashtrian", veg: true,  price: 120, available: true,  en: "Misal pav",    hi: "मिसळ पाव",       desc: "Sprout curry with farsan and two pav", tag: "spicy" },
    { id: 6,  cat: "maharashtrian", veg: true,  price: 90,  available: true,  en: "Pithla bhakri", hi: "पिठलं भाकरी",   desc: "Gram flour curry with jowar bhakri" },
    { id: 7,  cat: "maharashtrian", veg: false, price: 340, available: true,  en: "Kolhapuri chicken", hi: "कोल्हापुरी चिकन", desc: "Fiery red gravy with tambda rassa", tag: "spicy" },
    { id: 8,  cat: "maharashtrian", veg: true,  price: 110, available: false, en: "Sabudana vada", hi: "साबूदाना वडा",  desc: "Sago and peanut fritters with dahi" },
    { id: 9,  cat: "main",   veg: true,  price: 240, available: true, en: "Paneer butter masala", hi: "पनीर बटर मसाला", desc: "Rich tomato and cashew gravy" },
    { id: 10, cat: "main",   veg: true,  price: 190, available: true, en: "Dal tadka",            hi: "दाल तड़का",       desc: "Yellow dal tempered with ghee and garlic" },
    { id: 11, cat: "main",   veg: false, price: 360, available: true, en: "Mutton rogan josh",    hi: "मटन रोगन जोश",   desc: "Slow-cooked Kashmiri-style mutton", tag: "chef" },
    { id: 12, cat: "breads", veg: true,  price: 30,  available: true, en: "Tandoori roti", hi: "तंदूरी रोटी", desc: "Whole wheat, from the clay oven" },
    { id: 13, cat: "breads", veg: true,  price: 60,  available: true, en: "Butter naan",   hi: "बटर नान",     desc: "Soft leavened bread with butter" },
    { id: 14, cat: "breads", veg: true,  price: 45,  available: true, en: "Jowar bhakri",  hi: "ज्वार भाकरी", desc: "Hand-patted sorghum flatbread" },
    { id: 15, cat: "rice",   veg: true,  price: 160, available: true, en: "Jeera rice",          hi: "जीरा राइस",        desc: "Basmati with cumin and ghee" },
    { id: 16, cat: "rice",   veg: false, price: 320, available: true, en: "Chicken dum biryani", hi: "चिकन दम बिरयानी", desc: "Served with raita and salan" },
    { id: 17, cat: "rice",   veg: true,  price: 220, available: true, en: "Veg pulao",           hi: "वेज पुलाव",        desc: "Seasonal vegetables and whole spices" },
    { id: 18, cat: "desserts", veg: true, price: 90,  available: true, en: "Gulab jamun", hi: "गुलाब जामुन", desc: "Two pieces, served warm" },
    { id: 19, cat: "desserts", veg: true, price: 110, available: true, en: "Shrikhand",   hi: "श्रीखंड",     desc: "Saffron-cardamom hung curd" },
    { id: 20, cat: "drinks", veg: true, price: 60, available: true, en: "Masala chaas",  hi: "मसाला छाछ", desc: "Spiced buttermilk" },
    { id: 21, cat: "drinks", veg: true, price: 80, available: true, en: "Kokum sharbat", hi: "कोकम शरबत", desc: "Cooling, sweet and tangy" },
    { id: 22, cat: "drinks", veg: true, price: 40, available: true, en: "Cutting chai",  hi: "कटिंग चाय", desc: "Half glass, full strength" }
  ]
};
