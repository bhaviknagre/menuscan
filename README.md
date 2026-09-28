# MenuScan – QR menu for restaurants

One codebase that serves a digital menu for any number of restaurants.
Customers scan a QR code on their table, the menu opens on their phone
(no app needed), they build their order and send it to the restaurant
on WhatsApp with one tap (table number, items, total and notes included).

## What's inside

    index.html          The menu page customers see (shared by all restaurants)
    menus/              One file per restaurant
      kesar-rasoi.js
      chai-adda.js
    qr-generator.html   Makes printable QR codes for each table
    README.md           This guide

## How the links work

Every QR code points to the same page with two details in the link:

    https://YOUR-SITE/?r=kesar-rasoi&table=7
                         |               |
                         restaurant ID   table number

`r` picks which file in `menus/` to load. `table` shows the table number
at the top so the waiter knows which table the list came from.

## Step 1: Put it online (free)

The QR codes need a public web address. Two free options:

**Option A – Netlify Drop (easiest, 2 minutes)**
1. Go to https://app.netlify.com/drop
2. Drag the whole `menuscan` folder onto the page.
3. You get an address like `https://something.netlify.app/`.
   Create a free account so the site doesn't expire, and you can rename it
   (for example `menuscan-pune.netlify.app`).
4. To update later, drag the folder again from the site's "Deploys" tab.

**Option B – GitHub Pages**
1. Create a free GitHub account and a new public repository called `menuscan`.
2. Upload all files (keep the `menus` folder).
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/root`.
4. Your address will be `https://YOUR-USERNAME.github.io/menuscan/`.

Later you can buy a domain (like `menuscan.in`) and connect it to either one.

Test it: open `https://YOUR-SITE/?r=kesar-rasoi&table=3` on your phone.

## Step 2: Add a new restaurant

1. Copy `menus/chai-adda.js` and rename it, for example `menus/shree-datta-hotel.js`.
   Use lowercase letters, numbers and hyphens only. This name is the restaurant ID.
2. Open it and change the name, tagline, categories and dishes.
   - `veg: true` shows the green mark, `false` shows the red mark
   - `available: false` greys the dish out as "Not available today"
   - `tag: "chef"` or `tag: "spicy"` adds a small label (optional)
   - Every dish needs a unique `id` number and a `cat` matching a category `id`
   - The Hindi fields (`hi`) are optional; English shows if they are empty
   - `whatsapp: "91XXXXXXXXXX"` sets the number that receives orders (digits
     only, with country code). If left out, orders go to the default number
     set in `index.html` (`DEFAULT_WA`).
3. Upload the updated folder to your host again.
4. Check it: `https://YOUR-SITE/?r=shree-datta-hotel`

## Step 3: Make the QR codes

1. Open `qr-generator.html` in your browser (double-click the file works).
2. Enter your website address, the restaurant ID, the name to print, and
   the number of tables.
3. Click "Generate QR codes".
4. Click "Print all" to print cards (3 per row), or "Download PNG" on any card
   to send it to a printing shop for stickers or acrylic table stands.

Always scan one printed code with your phone before handing them over.

## Changing prices or dishes

Edit the restaurant's file in `menus/`, save, and re-upload. The QR codes
do not change, so you never need to reprint them.

## Next steps for the product

- An owner login where restaurants edit their own menu (instead of you editing files)
- Dish photos
- More languages (Marathi, Gujarati, Tamil…)
- A small monthly subscription per restaurant
