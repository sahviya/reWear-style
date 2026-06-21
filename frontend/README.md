# ReWear-Style 👗

ReWear-Style is a modern, responsive, front-end web application for a preloved (thrift) fashion marketplace. It allows users to browse products, add items to their cart and wishlist, simulate user authentication, and proceed through a checkout flow.

## 🛠️ How It Works (The Technologies)

This project is built using a pure, lightweight front-end tech stack without any heavy frameworks (like React or Angular). Here is how the pieces connect:

### 1. Structure (HTML)
The project contains multiple `.html` files, each representing a different page of the website (e.g., `index.html` for the home page, `marketplace.html` for the shop, `cart.html` for the shopping cart). 
- **Semantic HTML**: It uses modern HTML5 tags (`<section>`, `<article>`, `<nav>`) to build accessible layouts.

### 2. Styling (CSS)
All the visual design is handled by **Vanilla CSS** (`style.css` and `auth.css`).
- **CSS Variables**: Global colors (like the signature Gold and Dark themes) are stored in variables (e.g., `--gold: #c9a84c;`). This makes the site's theme consistent and easy to change.
- **Responsive Layouts**: We heavily use CSS Flexbox and CSS Grid to ensure the website looks great on both large desktop screens and small mobile phones.

### 3. Logic & Interactivity (JavaScript)
The brains of the application live in `script.js` (and `auth.js` for login logic). JavaScript connects the HTML elements and makes them interactive:
- **Dynamic Rendering**: Instead of writing the same HTML 50 times for 50 products, `script.js` holds a `DEFAULT_PRODUCTS` array. The JavaScript loops through this array and automatically generates the HTML for the product cards on the shop page.
- **State Management**: JavaScript handles adding items to the cart, calculating the total price, and toggling wishlist icons.

### 4. Database Simulation (Local Storage)
Because this is a purely front-end application without a real backend server (like Node.js or Python) or a real database (like SQL or MongoDB), it uses the browser's **`localStorage`**.
- `localStorage` acts as a temporary database that saves data directly in your browser. 
- When you add an item to your cart, register a new account, or favorite an item, `script.js` saves that information into `localStorage`. This is why your cart items remain even if you refresh the page!

---

## 🚀 How to Run It

Because this is a static site, running it is incredibly easy. You have two options:

### Option 1: The Quick Way (Direct File Open)
1. Open the project folder on your computer.
2. Double-click the `index.html` file.
3. It will open directly in your default web browser (Chrome, Safari, Edge) and work immediately!

### Option 2: The Developer Way (Local Server)
If you are editing the code and want the browser to automatically refresh when you save changes, use a local server:
1. Open the project in **Visual Studio Code (VS Code)**.
2. Install the **"Live Server"** extension.
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The site will open in your browser at a local address like `http://127.0.0.1:5500/index.html`.

## 🌐 How to Deploy
The site is deployed via GitHub Pages. Since all the code is static, GitHub automatically hosts the HTML/CSS/JS files and serves them to visitors.
