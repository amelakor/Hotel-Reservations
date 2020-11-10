import styled from "styled-components";

const StyledHero = styled.header`
  min-height: calc(60vh);
  background: url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
