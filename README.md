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

### [Figma Design](https://tinyurl.com/2z4pnuyh)
## Key Features:
- **Product Catalog**: Users can browse and filter a variety of handcrafted pottery items, with detailed product pages.
- **Shopping Cart & Checkout**: Seamless shopping experience with an easy-to-use cart and secure checkout powered by Stripe.
- **Order History**: Users can view their past orders and track shipping, while still allowing guest checkout.
- **Responsive Design**: Built with modern front-end technologies ensuring a smooth experience across desktop, tablet, and mobile devices.
- **AI-Powered Ads**: Integrated ad performance tracking system that rates ads based on user click-through rates.
- **Backend API**: Built with Python and Django to handle routing, product data, and payments.
- **Database**: PostgreSQL database for managing products, users, and orders.
- **Deployment**: Hosted on AWS with Supabase for managing real-time data and authentication.

## Tech Stack:
- **Frontend**: React.js / TailwindCSS / react-icons / Vite 
- **Backend**:  Python with Django / Axios
- **Database**: PostgreSQL / Supabase
- **Payments**: Stripe API
- **Shipping Integration**: Shippo, EasyPost, SendCloud, ShipStation, Postmen by AfterShip
- **Hosting**:  AWS
- **Testing**:  PyTest

### Why was this stack chosen?

- **React.js:** allows for fast rendering and interactive UIs, essential for a smooth user experience in e-commerce. TailwindCSS provides a responsive, customizable design components for scalability across devices.

- **Django:** offers a secure, scalable backend with built-in authentication, security, and an admin panel for managing products and orders. Axios simplifies frontend-backend communication.

- **PostgreSQL**: is reliable for structured data, while Supabase provides real-time features and easy authentication, enhancing development efficiency.

- **Stripe:** is chosen for its seamless integration and strong security.

- Integrating services like Shippo and EasyPost automates label generation and tracking, improving fulfillment.

- **AWS:** offers scalable, reliable cloud hosting, ideal for handling traffic spikes.

- **PyTest:** is used for backend testing, ensuring reliability in code and APIs.




## Lessons Learned:

## Installation Instructions:

### Clone the repository:
```bash
git clone https://github.com/angelacao2109/Pottery-E-Commerce-Website.git
```
Install dependencies for both the frontend and backend:
```bash
npm install react react-dom
npm install react-router-dom
npm install axios
npm install -D tailwindcss
npx tailwindcss init
npm install react-icons
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/forms


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

