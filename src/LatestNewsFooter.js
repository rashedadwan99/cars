import React from "react";
import { BsTwitter } from "react-icons/bs";

function LatestNewsFooter() {
  return (
    <div className="latest-news-footer">
      <div className="icon-news-content">
        <div>
          <BsTwitter />
        </div>
        <div className="news-content">
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <p>5 min ago</p>
        </div>
      </div>
      <div className="icon-news-content">
        <div>
          <BsTwitter />
        </div>
        <div className="news-content">
          <p>
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </p>
          <p>5 min ago</p>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsFooter;
