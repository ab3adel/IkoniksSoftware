import React from "react";
import Link from "next/link";

const ServiceCardTwo = ({ data }) => {
  // const { url, iconName, title } = data;

  return (
    <Link href={'/service-details'}>
      <a className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front">
            {/* <i className={iconName}></i> */}
            <h3>{data.title.en}</h3>
          </div>
          <div className="back">
            {/* <i className={iconName}></i> */}
            <img src={`http://backend.test.ikoniks.de/${data.attachment}`}></img>
            <h3>{data.title.en}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServiceCardTwo;
