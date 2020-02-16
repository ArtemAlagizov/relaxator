import styled from "styled-components";

const ShowcaseComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MenuItemsContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  width: 171px;
  color: white;
  background: rgb(87, 89, 93, 0.7);
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgb(197, 199, 196, 0.4);
  }
`;

const MenuToggleItem = styled.div`
  text-align: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: rgb(197, 199, 196, 0.4);
  }
`;

export const Styled = {
  MenuItemsContainer,
  MenuToggleItem,
  MenuItem,
  ShowcaseComponentContainer
};
