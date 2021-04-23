import React, { useState, useEffect } from "react";


const Header = (props) => {
  return (
  <>
    <div className="header_div_container">
        <p className="header_div_page_logo">Shopping</p>
        <div className="header_div_user_content">
            <div className="header_div_img_icon"></div>
            <p>John doe</p>
        </div>

    </div>
  </>
  );
};

export default Header;