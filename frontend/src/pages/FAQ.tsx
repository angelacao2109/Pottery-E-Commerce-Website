
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";


const titleHeader = "font-cormorant-SC text-5xl flex justify-center p-10 text-center";
const subtitleHeader = "font-cormorant-SC text-2xl flex justify-center p-5 font-light items-center w-full text-center";  
const pText = "font-cormorant text-xl p-2 font-thin leading-loose text-justify max-w-4xl mx-auto text-pretty align-middle  "; 
const questionAnswerFormat = "flex items-center justify-center flex-col w-full";


const FAQ: React.FC = () => {

  
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
  interface FAQQuestion {
    question: string;
    answer: string;
    isOpen: boolean;
    category: string;
  }
  
  const questions : FAQQuestion[] = [
  
      {
        question: "Are your pieces dishwasher and microwave safe?",
        answer:
          "Many of my pieces are dishwasher and microwave safe, but I recommend handwashing to preserve their longevity. Please check each product description for specific care instructions.",
        isOpen: false,
        category:"Care & Materials"
      },
      {
        question: "How do I care for my pottery?",
        answer:
          "To keep your pottery in great condition, I recommend handwashing with mild soap and avoiding sudden temperature changes. Avoid direct contact with extreme heat or cold to prevent cracking.",
        isOpen: false,
         category:"Care & Materials"
      },
      {
        question: "What materials do you use?",
        answer:
          "All my pottery is made from high-quality, durable stoneware or porcelain clay, and I use food-safe, lead-free glazes on all functional pieces.",
        isOpen: false,
         category:"Care & Materials"
      },
      {
        question: "Can I request a specific glaze or color for a piece?",
        answer:
          "Yes! If you have a specific glaze or color in mind for a custom piece, feel free to reach out, and I’ll work with you to create something unique.",
        isOpen: false,
         category:"Care & Materials"
      },
  
    
      {
        question: "How long does it take to ship my order?",
        answer:
          "Orders typically ship within 5 - 7 business days. Custom or made-to-order pieces may take a bit longer, and shipping times will be communicated at checkout.",
        isOpen: false,
        category:"Shipping & Returns"
      },
      {
        question: "Do you offer international shipping?",
        answer:
          "At the moment, I only ship within the USA. I hope to expand to international shipping in the future.",
        isOpen: false,
         category:"Shipping & Returns"
      },
      {
        question: "How do I track my order?",
        answer:
          "Once your order has shipped, you’ll receive a tracking number via email so you can follow your package’s journey.",
        isOpen: false,
         category:"Shipping & Returns"
      },
      {
        question: "What if I need to change or cancel my order?",
        answer:
          "Please contact me within 24 hours of placing your order to request any changes or cancellations. After this period, the order may already be in progress and changes may not be possible.",
        isOpen: false,
         category:"Shipping & Returns"
      },
      {
        question: "What is your return policy?",
        answer:
          "Due to the handmade nature of each item, all sales are final. However, if your item arrives damaged, please contact me within 7 days with photos, and I’ll be happy to offer a replacement or refund.",
        isOpen: false,
         category:"Shipping & Returns"
      },
      {
        question: "Can I pick up my order locally?",
        answer:
          "If you’re located in Atlanta, I offer local pickup as an option during checkout. Choose the 'Local Pickup' option to avoid shipping fees.",
        isOpen: false,
         category:"Shipping & Returns"
      },
    
      {
        question: "Do you take custom orders?",
        answer:
          "Absolutely! I love working on custom pieces. You can contact me with your request, and we’ll work together to bring your vision to life.",
        isOpen: false,
        category:"Custom Orders"
      },
      {
        question: "How long does it take to create a custom piece?",
        answer:
          "The time for custom orders can vary, but it typically takes 2-3 weeks, depending on the complexity of the design and current workload. I’ll keep you updated throughout the process.",
        isOpen: false,
         category:"Custom Orders"
      },

  
      {
        question: "What payment methods do you accept?",
        answer:
          "I accept all major credit cards, PayPal, and Stripe for secure online payments. You can select your preferred method during checkout.",
        isOpen: false,
        category:"Payments & Gift Options"
      },
      {
        question: "Can I add a gift note or request special packaging?",
        answer:
          "Absolutely! You can add a personalized note during checkout. If you need special packaging for a gift, please leave a note at checkout, and I’ll do my best to accommodate.",
        isOpen: false,
           category:"Payments & Gift Options"
      },
      {
        question: "Is there an option for gift wrapping?",
        answer:
          "Yes, I offer gift wrapping for an additional fee. You can choose this option during the checkout process.",
        isOpen: false,
           category:"Payments & Gift Options"
      },

  
      {
        question: "Do I need to create an account to place an order?",
        answer:
          "No, you can checkout as a guest. However, creating an account allows you to track your order history, save shipping information, and enjoy a faster checkout experience for future purchases.",
        isOpen: false,
        category:"Account & Newsletter"
      },
      {
        question: "How do I sign up for the newsletter?",
        answer:
          "You can sign up for the newsletter by entering your email address at the bottom of the website. You’ll receive updates on new collections and special offers.",
        isOpen: false,
            category:"Account & Newsletter"
      },
      {
        question: "How can I view my past orders?",
        answer:
          "If you’ve created an account, you can log in and view your past orders under the 'Order History' section. Guest checkouts won’t have this feature.",
        isOpen: false,
            category:"Account & Newsletter"
      },
      {
        question: "What if I forgot my password?",
        answer:
          "If you forget your password, simply click the 'Forgot Password' link on the login page, and you’ll receive instructions on how to reset it.",
        isOpen: false,
            category:"Account & Newsletter"
      }
    ];
  

    const categories = [...new Set(questions.map((question) => question.category))];

    const toggleQuestion = (index: number) => {
      setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
      <>
        <Header />
        <h1 className="font-crimson flex justify-center font-bold text-6xl p-5 bg-sage border-black border-x-2 border-b-2">
          Frequently Asked Questions
        </h1>
  
        {categories.map((category) => (
          <div key={category}>
            <h2 className={titleHeader}>{category}</h2>
            <div className={questionAnswerFormat}>
              {questions
                .filter((question) => question.category === category)
                .map((question, index) => {
                  // Calculate the absolute index of the question within the entire array
                  const absoluteIndex = questions.indexOf(question);
                  return (
                    <div key={index} className="flex flex-col items-center w-full">
                      <div className="flex justify-between items-center w-full px-10 py-3 ">
                        <h4 className={subtitleHeader}>{question.question}</h4>
                        <button className="ml-auto pr-10" onClick={() => toggleQuestion(absoluteIndex)}>
                          {openQuestionIndex === absoluteIndex ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                      </div>
                      {/* Answer center-aligned */}
                      {openQuestionIndex === absoluteIndex && (
                        <p className={pText}>{question.answer}</p>
                      )}
                      <hr className="w-full" />
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default FAQ;