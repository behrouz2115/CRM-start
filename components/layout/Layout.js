import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
    return (
      <>
          <header className="header">
          <h3>CRM </h3>
          <Link href='/add-customer'>Add customer</Link>
    </header>
          <div className="main">
              {children}
            </div>
            <footer className="footer">
                <a>
                    Berhouz
                </a>
            </footer>
      </>
  );
};

export default Layout;
