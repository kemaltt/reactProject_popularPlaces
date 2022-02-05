import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  height: 4rem;
  width: 100%;
`;

export const List = styled.a`
  height: 4rem;
  line-height: 4rem;
  text-decoration: none;
  color: white;

  // margin: 0px 5px 0px 5px;

  &:hover {
    width: 7rem;
    background-color: rgb(102, 156, 238);
    color: black;
    cursor: pointer;
    transition: 0.4s;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }
`;
