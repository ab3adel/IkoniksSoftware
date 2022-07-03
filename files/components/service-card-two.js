import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
// const router = useRouter()
const ServiceCardTwo = ({ data }) => {
  // const { url, iconName, title } = data;
  const router = useRouter()
  return (
    <Link href={'/service-details?service=' + data.id}>
      <a className="icon_box_1 text-center">
        <div className="flipper">
          <div className="front" style={{ backgroundImage: `url(http://backend.test.ikoniks.de/${data.background})` }}>
            {/* <i className={iconName}></i> */}
            <h3>{data.title[router.locale]}</h3>
          </div>
          <div className="back">
            {/* <i className={iconName}></i> */}
            <img src={`http://backend.test.ikoniks.de/${data.attachment}`}></img>
            <h3>{data.title[router.locale]}</h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ServiceCardTwo;
