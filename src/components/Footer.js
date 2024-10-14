import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-slate-800 text-white py-8 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and "Made with ❤️ in React" */}
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-300 dark:text-gray-400">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-300 dark:text-gray-400">
              Made with <span className="text-red-500 dark:text-red-400">❤️</span> in React
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a
                href="https://github.com/msaikaushik"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-5 h-5" // Adjust icon size
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.72c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.33 1.08 2.89.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.57 9.57 0 012.5-.34c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.95.36.31.68.91.68 1.83v2.72c0 .26.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/msaikaushik"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5" // Adjust icon size
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-2v-9h2v9zm-1-10.28c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm10.2 10.28h-2v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-2v-9h2v1.34c.59-.88 1.64-1.34 2.66-1.34 2.01 0 3.34 1.33 3.34 3.34v5.66z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
