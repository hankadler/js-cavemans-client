import PropTypes from "prop-types";
import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import MenuItem from "./MenuItem";

const GET_MENU_ITEMS_BY_TYPE = gql`
  query GetMenuItemsByType($type: MenuItemType!) {
    menuItemsByType(type: $type) {
      _id
      type
      image
      name
      description
      price
    }
  }
`;

const propTypes = {
  type: PropTypes.string.isRequired
};

export default function Menu({ type }) {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS_BY_TYPE, {
    variables: { type }
  });

  if (loading) return null;
  if (error) return `${error.message}`;

  const { menuItemsByType: menuItems } = data;

  // console.log({ menuItems });

  if (!menuItems.length) return null;

  return (
    <MenuDiv>
      {menuItems.map(({ image, description, price, name }, i) => (
        <MenuItem
          key={i}
          type={type}
          image={image}
          description={description}
          price={price}
          name={name}
        />
      ))}
    </MenuDiv>
  );
}

Menu.propTypes = propTypes;

const MenuDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, calc(var(--size-thumbnail) * 2));
  grid-gap: 1em;
  align-content: start;
  //padding: 0 1em;
  //border: 1px solid red;
  width: var(--max-width-container);
  height: var(--max-height-container);
  overflow-y: scroll;
`;
