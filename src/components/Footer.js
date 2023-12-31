import React from "react";

function Footer() {
  return (
    <footer>
      <div className='container mx-auto max-w-7xl py-6 flex flex-wrap justify-center items-center'>
        <p className='text-manga-200 text-sm'>
          Made with ❤️ by
          <a
            href='https://github.com/gcsrilanka'
            rel='noopener noreferrer'
            className='text-manga-300 font-medium ml-1'
            target='_blank'
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
