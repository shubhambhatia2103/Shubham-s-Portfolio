// import React from 'react'
import { useState } from 'react';
import { FaArrowRight, FaGithub } from "react-icons/fa";


function Body() {

  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblrvkvn", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('Thanks for your submission!');
        form.reset();
      } else {
        setFormStatus('Oops! There was a problem submitting your form');
      }
    } catch {
      setFormStatus('Oops! There was a problem submitting your form');
    }
  };

  return (
    <>

    {/*----> Hero Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div className="space-y-16 lg:space-y-20 mb-16 sm:mt-2 ">
      <div className="flex items-center justify-center">
        <div className="border-2 w-60 h-w-80 border-slate-100 shadow-xl rounded-full overflow-hidden animate-blob">
          <img src="src/assets/profilePic1.jpg" alt="profile" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-6 ">
        <h1 className="text-3xl text-center font-bold font-playFair md:text-4xl lg:text-5xl px-10 lg:px-6">I am a <span className="font-cursive">Cloud</span> and <span className="font-cursive">Data  Engineer</span></h1>
        <p className="text-center font-lato text-gray-800 italic lg:text-xl">Building Data-Driven Products with Purpose</p>
        <a href="#about" >
          <div className="flex items-center justify-center gap-2 text-sm font-mono px-2 py-1 rounded-full border border-black hover:border-2 hover:border-blue-500 hover:text-blue-500 lg:text-base lg:px-4 lg:py-2 lg:rounded-full">
            <button type="button" className="hover:italic">About Me </button> 
            <FaArrowRight />
          </div>
        </a>
      </div>
    </div>


    {/*----> About Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="about"className="space-y-6 lg:space-y-10 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14 rounded-2xl ">

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">About <span className="italic">Me</span></h1>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 ">

        <div className="hidden lg:flex" >
          <img src="src/assets/laptop.png" alt="profile" className="w-10/12 h-auto object-cover" />
        </div>

        <div className="text-base/[22px] md:text-base/7 lg:text-lg space-y-3 text-justify font-lato lg:space-y-6 text-gray-900">
          <p>I'm Shubham Bhatia, a tech enthusiast with a strong foundation in data engineering and a growing passion for product management. 
            I hold a Bachelor’s in Information Technology and have gained hands-on experience in a range of technologies, from Python, SQL, and 
            Bash Scripting to AWS services like S3, Lambda, and QuickSight.
          </p>

          <p>I thrive on solving complex problems, as seen in my projects like Netflix Catalog Trends Visualization, 
            where I designed interactive visualizations using Amazon QuickSight, and Conversational-Chatbot-Groq, 
            where I integrated advanced NLP tools to create smarter customer support solutions.
          </p>

          <p>With a solid background in data analysis, cloud tools, and machine learning frameworks, I’m eager to bring this expertise to a 
            dynamic team where I can contribute to impactful projects and develop my skills in product management.
          </p>
        </div>

      </div>
    </div>


    {/*----> Projects Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="projects" className="space-y-5 py-6 md:py-7 lg:py-14">

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">Projects</h1>

      <div className="flex flex-col flex-wrap md:flex-row lg:flex-row lg:space-x-6 justify-around items-center">

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
            <img src="/src/assets/project 1.jpg" alt="Twitter Sentiment Analysis" />
          </div>
          <h1 className="text-lg font-semibold">Twitter Sentiment Analysis</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">Python</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NLTK</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">ML</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Pandas</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NumPy</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Twitter-Sentiment-Analysis" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">Developed a Machine learning model to analyze the sentiment of tweets using the Natural Language Toolkit (NLTK) library in Python. 
            The model was trained on a dataset of 1.6 million tweets and achieved an accuracy of 85%.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div  className="h-36 w-full overflow-hidden flex justify-center items-center">
          <img src="/src/assets/project 2.jpg" alt="Netflix Catalog Trends Visualization" />
          </div>
          <h1 className="text-lg font-semibold">Netflix catalog Trends Visualization</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">AWS</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">S3 Buckets</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Amazon QuickSight</li>
        
            
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Visualize-data-with-AWS-QuickSight" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
            In this project, I explored Amazon QuickSight, a powerful business analytics service provided by AWS, to visualize and analyze Netflix&apos;s catalog trends.
             This hands-on experience allowed me to delve into data-driven decision-making by creating insightful visualizations.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
            <img src="/src/assets/project 3.jpg" alt="Conversational Chatbot - Groq API Chat Assistant" />
          </div>
          <h1 className="text-lg font-semibold">Conversational Chatbot - Groq API Chat Assistant</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">Streamlit</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">NLP</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Groq API</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">LangChain</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">LLM</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Conversational-Chatbot-Groq" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
          This is a Streamlit-based app that allows users to interact with a conversational chatbot powered by the LangChain API. 
          The application uses the Groq API to generate responses and maintains a history of the conversation to provide context for the chatbot&apos;s responses.
          </p>
        </div>

        <div className="space-y-2 font-lato lg:space-y-4 text-gray-900 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-7 lg:py-10 rounded-2xl mt-6 w-80 h-[470px] lg:h-[520px]">
          <div className="h-36 w-full overflow-hidden flex justify-center items-center">
          <img src="/src/assets/project 4.jpg" alt="AWS S3 Static Website Hosting" />
          </div>
          <h1 className="text-lg font-semibold">AWS Virtual Cloud Architect</h1>
          <ul className="flex flex-wrap items-center gap-2 text-xs">
            <li className="bg-sky-300 rounded-full px-2 py-1">AWS</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">VPC</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Subnet Management</li>
            <li className="bg-sky-300 rounded-full px-2 py-1">Security Group Configuration</li>
            <li className="text-lg hover:text-xl"><a href="https://github.com/shubhambhatia2103/Build-a-Virtual-Private-Cloud" target="_blank"><FaGithub /></a></li>
          </ul>
          <p className="text-justify text-sm">
          I designed a Virtual Private Cloud (VPC) on AWS, creating a public subnet with automatic IP assignment for accessible 
          EC2 instances. I also attached an internet gateway to enable seamless internet traffic flow. 
          This project enhanced my understanding of cloud infrastructure and networking principles.
          </p>
        </div>
      </div>
    </div>
      
    
    {/*----> Contact Section <>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>-<>*/}

    <div id="contact" className="space-y-6 lg:space-y-10 shadow-xl shadow-gray-500/25 px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14 rounded-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair">Contact <span className="italic">Me</span></h1>
        
        <form onSubmit={handleSubmit} className="space-y-4 font-lato">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input type="text" id="subject" name="subject" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-1"></textarea>
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Send Message
            </button>
          </div>

          {formStatus && (
            <div className={`mt-4 text-center ${formStatus.includes('Oops') ? 'text-red-500' : 'text-green-500'}`}>
              {formStatus}
            </div>
          )}
        </form>
      </div>
    
    </>
  );
}

export default Body