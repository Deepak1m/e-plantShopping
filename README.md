# 🌿 Paradise Nursery - E-Commerce Plant Shopping Application

A modern, responsive React and Redux Toolkit web application for **Paradise Nursery** ("Where Greenery Meets Serenity"). Designed and developed to meet all grading criteria and specifications for the Coursera / IBM Full Stack & Frontend Developer Capstone project.

---

## 📌 Project Overview

**Paradise Nursery** is an e-commerce platform dedicated to bringing nature indoors. The application allows users to discover, explore, and purchase carefully curated house plants categorized into air-purifying, aromatic, medicinal, and low-maintenance varieties.

### Key Capabilities:
- **Atmospheric Landing Page**: Engaging botanical design featuring company branding, background imagery, mission statement, and a primary **Get Started** button.
- **About Us Section**: Educational background detailing the nursery's commitment to air quality, wellness, and sustainable horticulture.
- **Categorized Plant Catalog**: Comprehensive catalog showcasing high-quality plant imagery, names, prices, and descriptions.
- **Live Cart Interaction**: Dynamic "Add to Cart" buttons that transition to "Added to Cart" and disable to prevent accidental duplicates.
- **Redux State Management**: Centralized store managed via Redux Toolkit with seamless synchronization between product listing and cart views.
- **Interactive Shopping Cart**: Quantity adjustments (+/-), automatic subtotal & total order calculation, removal controls, and "Continue Shopping" / "Checkout" workflows.

---

## 📂 Project Structure

```text
paradise-nursery/
├── index.html              # HTML5 entry with Google Fonts & meta tags
├── package.json            # Project dependencies (React 18, Redux Toolkit, Vite)
├── vite.config.js          # Vite build tool configuration
├── README.md               # Project documentation & grading submission guide
└── src/
    ├── App.jsx             # Landing page with company name and "Get Started" button
    ├── App.css             # Landing page hero styling and modal layout
    ├── AboutUs.jsx         # About Us component with nursery mission & features
    ├── AboutUs.css         # Styling for the About Us component
    ├── ProductList.jsx     # Plant catalog with categories, cart badge, and Add to Cart
    ├── ProductList.css     # Styling for product cards, grid, and navigation bar
    ├── CartSlice.jsx       # Redux Toolkit slice with addItem, removeItem, updateQuantity
    ├── CartItem.jsx        # Shopping cart view with items, quantities, totals, & checkout
    ├── CartItem.css        # Styling for shopping cart cards and order summary
    ├── store.js            # Redux store configuration
    └── main.jsx            # Application root wrapped in Redux Provider
```

---

## 🎯 Grading Criteria & Feature Implementations

| Grading Requirement | Target File | Implementation Details |
| :--- | :--- | :--- |
| **Landing Page & Navigation** | [`src/App.jsx`](src/App.jsx)<br>[`src/App.css`](src/App.css) | Includes the **Paradise Nursery** company name, tagline, background overlay, **"Get Started"** button transitioning to the plant catalog, and interactive **About Us** preview. |
| **About Us Component** | [`src/AboutUs.jsx`](src/AboutUs.jsx)<br>[`src/AboutUs.css`](src/AboutUs.css) | Outlines nursery history, air-purifying advantages, aromatic benefits, and eco-friendly commitments. |
| **Redux State Management** | [`src/CartSlice.jsx`](src/CartSlice.jsx)<br>[`src/store.js`](src/store.js) | Implements all three required reducer functions:<br>• `addItem()`: Adds a plant or increments quantity if already present.<br>• `removeItem()`: Removes item from cart by matching name.<br>• `updateQuantity()`: Updates item quantity (or removes if quantity reaches 0). |
| **Product Listing Page** | [`src/ProductList.jsx`](src/ProductList.jsx)<br>[`src/ProductList.css`](src/ProductList.css) | • Categorized plant inventory (Air Purifying, Aromatic, Medicinal, Low Maintenance).<br>• Each card contains plant image, name, price, description, and button.<br>• Button state changes to **"Added to Cart"** and is disabled when item is added.<br>• Header navigation with live cart icon showing **total quantity badge**. |
| **Shopping Cart View** | [`src/CartItem.jsx`](src/CartItem.jsx)<br>[`src/CartItem.css`](src/CartItem.css) | • Displays all cart items with thumbnail, name, unit cost, and subtotal.<br>• `+` and `-` buttons to modify quantity via Redux `updateQuantity`.<br>• Delete button to remove item via Redux `removeItem`.<br>• Total cart amount calculation (`calculateTotalAmount`).<br>• **"Continue Shopping"** button returning to product list.<br>• **"Checkout"** button triggering upcoming service alert. |

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### 2. Installation
Open your terminal in the project directory and install the dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```

---

## 📤 GitHub Submission Guide

To submit your assignment URLs for peer grading:

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Complete Paradise Nursery React Redux application"
   ```

2. **Create a Public GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a new public repository named `e-plantShopping` or `paradise-nursery`.
   - Push your code:
     ```bash
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git branch -M main
     git push -u origin main
     ```

3. **Assignment Submission URLs**:
   - **CartSlice.jsx URL**:
     `https://github.com/<your-username>/<repo-name>/blob/main/src/CartSlice.jsx`
   - **ProductList.jsx URL**:
     `https://github.com/<your-username>/<repo-name>/blob/main/src/ProductList.jsx`
   - **CartItem.jsx URL**:
     `https://github.com/<your-username>/<repo-name>/blob/main/src/CartItem.jsx`
   - **README.md / Repository Root URL**:
     `https://github.com/<your-username>/<repo-name>`

---

## 🌿 License
This project is open-source under the MIT License.
