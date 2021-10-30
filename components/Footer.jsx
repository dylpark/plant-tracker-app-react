//
//

import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  const copyright = `Dylan Park © ${date}`;

  return (
    <footer className="flex flex-col justify-end sm:flex-row m-10 h-auto">
      <div className="text-xs pr-10 text-gray-300">
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>

      <div className="text-xs pr-10 text-gray-300">
        Plant info by{" "}
        <a
          href="https://www.goodhousekeeping.com/home/gardening/advice/g1285/hard-to-kill-plants/"
          title="Gopod House Keeping"
        >
          Good House Keeping
        </a>{" "}
      </div>

      <p className="tracking-widest text-xs text-gray-400">{copyright}</p>
    </footer>
  );
}

export default Footer;
