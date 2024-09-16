# Pottery E-Commerce Website

## Description:
A full-stack e-commerce website for selling handcrafted pottery, built with a focus on a smooth user experience. The site allows users to browse products, purchase items, and track their order history. Features include a product catalog, a shopping cart, Stripe payment integration, and optional user accounts for order history tracking.

## Key Features:
- **Product Catalog**: Users can browse and filter a variety of handcrafted pottery items, with detailed product pages.
- **Shopping Cart & Checkout**: Seamless shopping experience with an easy-to-use cart and secure checkout powered by Stripe.
- **Order History**: Users can create an account to view their past orders and track shipping, while still allowing guest checkout.
- **Responsive Design**: Built with modern front-end technologies ensuring a smooth experience across desktop, tablet, and mobile devices.
- **AI-Powered Ads**: Integrated ad performance tracking system that rates ads based on user click-through rates.
- **Backend API**: Built with Node.js (or Python) and Express (or Flask/Django) to handle routing, product data, and payments.
- **Database**: PostgreSQL database for managing products, users, and orders.
- **Deployment**: Hosted on Heroku/Vercel/AWS with Supabase for managing real-time data and authentication.

## Tech Stack:
- **Frontend**: React.js / TailwindCSS / Bootstrap
- **Backend**: Node.js with Express / Python with Flask/Django
- **Database**: PostgreSQL / Supabase
- **Payments**: Stripe API
- **Hosting**: Vercel / Heroku / AWS

## Installation Instructions:

### Clone the repository:
```bash
git clone https://github.com/angelacao2109/Pottery-E-Commerce-Website.git
```
Install dependencies for both the frontend and backend:
```bash
npm install  # or yarn install
cd backend
npm install  # or yarn install
```
Set up environment variables:
Add environment variables for Stripe, Supabase, and the database connection in a .env file.
Run the development server:
```bash
npm run dev
```

