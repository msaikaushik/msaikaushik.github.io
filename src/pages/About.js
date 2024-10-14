import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm Kaushik, a passionate web developer based in Dublin. With 4 years of Full Stack Development Experience, I specialize in creating responsive and user-friendly web applications using modern technologies.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I blend technical expertise with an artistic touch to bring innovative digital solutions to life. Beyond code, I'm an aspiring artist and an adventurous soul.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">My Approach</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices. My goal is always to deliver high-quality solutions that not only meet but exceed client expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When I'm not coding, you can find me sketching or hiking. I find that maintaining a good work-life balance helps fuel my creativity and problem-solving skills.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Master's Degree in Computer Science, Trinity College Dublin, 2022</li>
              <li>Bachelor's Degree in Electronics and Communication Engineering, SRM University, 2018</li>
              <li>Data Structures in C++</li>
              <li>Introduction to C++</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-1">
          <img 
            src="/path/to/your/photo.jpg" // Replace with your image path
            alt="Kaushik"
            className="w-full rounded-lg shadow-md mb-6"
          />
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <ul className="space-y-2">
              <li>
                <a href="/path/to/your/resume.pdf" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <FileText size={18} className="mr-2" /> Download Resume
                </a>
              </li>
              <li>
                <a href="mailto:m.saikaushik97@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <Mail size={18} className="mr-2" /> m.saikaushik97@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/msaikaushik" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <Linkedin size={18} className="mr-2" /> LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://github.com/msaikaushik" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  {/* Add GitHub icon here if needed */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
