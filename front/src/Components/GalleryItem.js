import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 1rem;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgURL});
  width: 300px;
  height: 180px;
`;

const ImageContainer = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
`;

const Title = styled.div`
  height: 1.5rem;
`;

const GalleryItem = ({ id, imageURL, title, isProject }) => (
  <Link to={isProject ? `/project/${id}` : `/mate/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgURL={
            imageURL
              ? /* replace to image url */ ""
              : require("assets/no-image.png").default
          }
        />
      </ImageContainer>
      <Title>
        {title.length > 12 ? `${title.substring(0, 12)}...` : title}
      </Title>
    </Container>
  </Link>
);

GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  title: PropTypes.string,
  isProject: PropTypes.bool,
};

export default GalleryItem;
