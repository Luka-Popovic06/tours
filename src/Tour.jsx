import React, { useState } from "react";
const Tour = (props) => {
  const { id, src, price, title, text, continuationText, onDelete } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <li className={`list-element ${showMore ? "increase" : ""}`}>
      <div className="img-box">
        <img src={src} className="img" />
        <p className="price">{price}</p>
      </div>
      <div className="info-box">
        <h4 className="tour-info">{title}</h4>
        <p className="text">
          {showMore ? (
            <>
              {continuationText}
              <button
                className="btn show-less "
                onClick={() => setShowMore(false)}
              >
                Show Less
              </button>
            </>
          ) : (
            <>
              {text}
              <button
                className="btn read-more"
                onClick={() => setShowMore(true)}
              >
                Read More
              </button>
            </>
          )}
        </p>
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Not Interested
        </button>
      </div>
    </li>
  );
};
export default Tour;
