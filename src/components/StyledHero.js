import Styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

// const orange = "#f15025";
// const SimpleButton = Styled.button`
//     color: ${orange};
//     background: green;
//     font-size: 3rem;
// `;
const StyledHero = Styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledHero;
