import React from "react";
import "./footerinfo.css";
function FooterInfo({ title, children }) {
  return (
    <div className="footer-info">
      <p className="title">
        <span>{title}</span>
      </p>
      {children}
    </div>
  );
}

export default FooterInfo;
