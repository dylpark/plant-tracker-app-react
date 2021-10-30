//
//

import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  const copyright = `Dylan Park © ${date}`;

  return (
    <footer className="flex flex-grow sm:flex-row m-5 h-auto justify-center">
      <p className="tracking-widest text-xs mr-5 text-gray-400">{copyright}</p>
    </footer>
  );
}

export default Footer;
