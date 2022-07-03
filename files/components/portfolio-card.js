import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
const PortfolioCard = ({ data, cats }) => {
  const router = useRouter()
  const { image, title, url, id } = data;

  return (
    <div className={`singlefolio`}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <a className="cate" href="#">
          {cats.find(cat => cat.id == data.category_id).name[router.locale]}
        </a>
        <h4>
          <Link href={`/portfolio-details?item=${id}`}>
            <a  >{title}</a>
          </Link>

        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
