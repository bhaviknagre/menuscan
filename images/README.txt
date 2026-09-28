MenuScan – dish photos
======================

One folder per restaurant, named like its menu file:

    images/kesar-rasoi/paneer-tikka.webp
    images/chai-adda/masala-chai.webp

Then point the dish to it in menus/<restaurant>.js:

    { id: 1, ..., image: "images/kesar-rasoi/paneer-tikka.webp" }

A full web address also works:  image: "https://example.com/photo.webp"

Photo guidelines
- Square photos (the menu shows them as squares), about 800 x 800 px.
- WebP or JPG, ideally under 150 KB each, so the menu loads fast on 4G.
- Use the restaurant's OWN photos. Don't copy food photos from Google or
  other websites – that breaks copyright and the links may stop working.
- Dishes without a photo are fine: the card simply uses the full width.
- If a photo link is wrong, the menu hides it automatically (no broken icon).

Header photo (optional)
- cover: "images/<restaurant>/cover.webp" in the menu file.
- Wide photo, about 1200 x 675 px (16:9), under 200 KB.

Logo (optional)
- theme: { logo: "images/<restaurant>/logo.png" }  – square, about 256 x 256 px.

Free tools to shrink photos: squoosh.app (in the browser, choose WebP, quality ~70).
