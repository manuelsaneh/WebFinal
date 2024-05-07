import { useState } from "react";
import { Article } from "../../utils/types/types";
import "./article-card.css";

interface ArticleCardProps {
  data: Article;
}

const ArticleCard = ({ data }: ArticleCardProps) => {
  const [expand, setExpand] = useState(true);

  const handleExpandArticle = () => {
    if (expand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };

  return (
    <>
      {expand ? (
        <div
          className="card"
          key={data.article_id}
          onClick={handleExpandArticle}
        >
          {data.image_url && (
            <div className="image_container">
              <img src={data.image_url} />
            </div>
          )}
          <div className="content">
            <p className="content-title">{data.title}</p>
            <p className="content-description">
              {data?.description?.length > 30
                ? "..." + data.description.slice(0, 150)
                : data.description?.replace(/nbsp;/g, "")}
            </p>
            <div className="date">
              <a href={data.link} className="content-link">
                {data.link}
              </a>
              <p>{data.pubDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="card-expanded"
          key={data.article_id}
          onClick={handleExpandArticle}
        >
          {data.image_url && (
            <div className="image_container-expanded">
              <img src={data.image_url} />
            </div>
          )}
          <div className="content-expanded">
            <p className="content-title-expanded">{data.title}</p>
            <p className="content-description-expanded">{data.description}</p>
            <div className="date-expanded">
              <a href={data.link} className="content-link-expanded">
                {data.link}
              </a>
              <p>{data.pubDate}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticleCard;
