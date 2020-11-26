import React, { useState } from "react";
import Swiper from "react-id-swiper";
import NoImage from "../../assets/image/no_image.png";
import "swiper/css/swiper.css";
import styled from "styled-components";

const ImageSwiper = (props) => {
  const [params] = useState({
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: false,
  });
  const images = props.images;

  return (
    <Swiper {...params}>
      {images.length === 0 ? (
        <StyledImageArea>
          <img src={NoImage} alt="no image" />
        </StyledImageArea>
      ) : (
        images.map((image) => (
          <StyledImageArea key={image.path}>
            <img src={image.path} aly="キャンプ場" />
          </StyledImageArea>
        ))
      )}
    </Swiper>
  );
};

export default ImageSwiper;

const StyledImageArea = styled.div`
  display: grid;
  place-items: center;
  img {
    width: 100%;
    object-fit: center;
    object-position: center;
  }
`;
