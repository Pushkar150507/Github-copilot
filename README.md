
# StreamFlow — Netflix-like Demo UI

This repo contains a lightweight, responsive demo UI modeled on streaming service layouts: dark theme, large hero, and horizontally scrollable rows of cards.

Files:
- `index.html` — main Netflix-like UI
- `styles.css` — dark theme and layout
- `script.js` — simple row scrolling + search demo

To view locally, open `index.html` in your browser or serve with a simple HTTP server:

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

This is a static demo. If you want me to add real data, a details modal, or a cart system, tell me which feature to add next.

Update: converted demo to an e-commerce storefront (ShopFlix) with product rows, categories, and a cart drawer. Features:
- Add to cart buttons on product cards
- Cart drawer with item list, remove buttons, and total
- Hero product with Buy/Add actions
- Category rows added: `Watches`, `Bags`, `T-Shirts`, `Hoodies` with sample products and random images fetched from Unsplash
 - Category rows added: `Watches`, `Bags`, `T-Shirts`, `Hoodies` with sample products.
 - Image sources updated to use `picsum.photos` seeded images (stable, free demo images).

To try it locally:

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Want: product details modal, persist cart in localStorage, or connect to a product API? Reply with which feature to add.
