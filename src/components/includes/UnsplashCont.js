import React from "react";

function UnsplashItem(props) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${props.image.id}`}>
        <img src={props.image.urls.regular} alt={props.image.id} />
      </a>
    </li>
  );
}

function UnsplashCont(props) {
  console.log(props);
  return (
    <div className="image__cont">
      <div className="container">
        <div className="image__list">
          <ul>
            {props.image.map((image) => (
              <UnsplashItem image={image} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnsplashCont;
