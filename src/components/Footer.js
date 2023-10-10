import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container max-w-7xl mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">
          Made with ❤️ by
          <a
            href="
            https://github.com/GitHubExperts-LK"
            rel="noopener noreferrer"
            className="text-gray-600 font-medium ml-1"
            target="_blank"
          >
            GitHub Community Sri Lanka
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
