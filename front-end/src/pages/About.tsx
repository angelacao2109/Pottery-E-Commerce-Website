import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
    return (
        <>
        <Header/>
        <h1 className="font-crimson flex flex justify-center font-bold text-6xl p-5 bg-dusty-pink border-black border-x-2 border-b-2">About Me</h1>

<div className="flex justify-center">
<div className="font-crimson p-10 max-w-3xl font-medium text-2xl tracking-wider leading-relaxed text-justify mr-40">
<p>Hi, I’m Angela! I discovered my passion for pottery in January 2024 when I took my first wheel throwing class. What started as a hobby quickly became a way for me to express my creativity through handcrafted, one-of-a-kind pieces.
</p>
<p className="pt-10">
I find inspiration in everyday life—from the textures, colors, and shapes in nature to the simple beauty of everyday objects. My goal is to create pieces that are not only beautiful but also functional.
</p>
</div>

<img className=" w-96 h-96 rounded-full flex  mt-10 mr-40" src="https://georgetownvoice.com/wp-content/uploads/2020/03/pottery.jpg"/>
</div>
</>
    );
}
export default About;