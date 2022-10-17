import PropTypes from "prop-types";
import styled from "@emotion/styled";
import dummyImage from "../../common/assets/images/dummy-200x200.png";
import images from "../../common/assets/images";

const propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired
};

const defaultProps = {
  description: ""
};

export default function MenuItem({ type, image, name, description, price }) {
  return (
    <MenuItemDiv>
      <Thumbnail image={images.menu[type][image] || `url(${dummyImage})`} />
      <Info>
        <header>{name}</header>
        <main>{description}</main>
        <footer>${price.toFixed(2)}</footer>
      </Info>
    </MenuItemDiv>
  );
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

const MenuItemDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, fit-content(100%));
  border-radius: .5em;
  width: fit-content;
  background-color: var(--bg-opac-50);
`;

const Thumbnail = styled.div`
  display: grid;
  border-radius: .5em 0 0 .5em;
  width: var(--size-thumbnail);
  height: var(--size-thumbnail);
  background-size: cover;
  background: no-repeat ${({ image }) => image};
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: .5em;
  align-content: space-between;
  width: var(--size-thumbnail);
  height: var(--size-thumbnail);
  
  & > * {
    padding: .5em;
  }
  
  & > header {
    font-size: 1.125em;
    font-family: Roboto, sans-serif;
    font-weight: bold;
  }
  
  & > main {
    font-family: "Roboto Slab", sans-serif;
  }
  
  & > footer {
    font-family: "Roboto Mono", monospace;
    text-align: right;
  }
`;
