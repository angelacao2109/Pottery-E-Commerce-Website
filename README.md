# Pottery E-Commerce Website

# Table of Contents
1. [Description](#description)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
   - [Why Was This Stack Chosen?](#why-was-this-stack-chosen)
   - [Other Stacks Considered](#other-stacks-that-were-considered)
4. [Lessons Learned](#lessons-learned)
5. [Installation Instructions](#installation-instructions)


## Description:
A full-stack e-commerce website for selling handcrafted pottery, built with a focus on a smooth user experience. The site allows users to browse products, purchase items, and track their order history. Features include a product catalog, a shopping cart, Stripe payment integration, and optional user accounts for order history tracking.

### Link: 

## Key Features:
- **Product Catalog**: Users can browse and filter a variety of handcrafted pottery items, with detailed product pages.
- **Shopping Cart & Checkout**: Seamless shopping experience with an easy-to-use cart and secure checkout powered by Stripe.
- **Order History**: Users can create an account to view their past orders and track shipping, while still allowing guest checkout.
- **Responsive Design**: Built with modern front-end technologies ensuring a smooth experience across desktop, tablet, and mobile devices.
- **AI-Powered Ads**: Integrated ad performance tracking system that rates ads based on user click-through rates.
- **Backend API**: Built with Python and Django to handle routing, product data, and payments.
- **Database**: PostgreSQL database for managing products, users, and orders.
- **Deployment**: Hosted on AWS with Supabase for managing real-time data and authentication.

## Tech Stack:
- **Frontend**: React.js / TailwindCSS / Bootstrap
- **Backend**:  Python with Django / Axios
- **Database**: PostgreSQL / Supabase
- **Payments**: Stripe API
- **Shipping Integration**: Shippo, EasyPost, SendCloud, ShipStation, Postmen by AfterShip
- **Hosting**:  AWS
- **Testing**:  PyTest

### Why was this stack chosen?

React provides a dynamic, component-based frontend.
Django offers a secure, scalable backend and built in auth.
Supabase simplifies database and authentication.
Stripe for secure payment handling.

### Other stacks that were considered:

Vue.js: Vue was considered for its simplicity and ease of use, especially for smaller applications. While Vue offers great reactivity and is beginner-friendly, React's ecosystem, scalability, and job market demand made it a better fit for this project.
Flask: A lightweight Python framework was considered for smaller-scale use cases but lacked the built-in features (like authentication and admin) that Django offers for rapid e-commerce development.
Node.js (with Express): Full-stack JavaScript was considered for consistency in frontend and backend development, but Django's built-in security, scalability, and robust admin tools made it more suitable for this project.

NoSQL (e.g., MongoDB): NoSQL databases like MongoDB were evaluated for flexibility with unstructured data. However, the structured nature of e-commerce data (products, orders, users) made PostgreSQL a better option, ensuring relational data consistency and reliability.



## Lessons Learned:

## Installation Instructions:

### Clone the repository:
```bash
git clone https://github.com/angelacao2109/Pottery-E-Commerce-Website.git
```
Install dependencies for both the frontend and backend:
```bash
npm install react react-dom
npm install axios
npm install @mui/material  # or react-bootstrap / tailwindcss

pip install django
pip install djangorestframework
pip install stripe
pip install djangorestframework-simplejwt


```
Set up environment variables:
Add environment variables for Stripe, Supabase, and the database connection in a .env file.
Run the development server:
```bash
npm run dev
```

