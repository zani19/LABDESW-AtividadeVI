import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ItemMenu({link, children}:any){
    return <Sld><Link to={link}>{children}</Link></Sld>;
}

const Sld = styled.div`
    display: flex;
    margin: 0px 15px;
    font-size: 18px;
    font-weight: 600;
    color: #444;
    cursor: pointer;

    &:hover {
        color: orange;
    }
`;

