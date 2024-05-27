import styled from "styled-components"
import ItemMenu from "../ItemMenu"

export default function Menu() {
  return (
    <Sld>
        <ItemMenu link="/megasena" >Megasena</ItemMenu>
        <ItemMenu link="/lotofacil" >Lotofácil</ItemMenu>
        <ItemMenu link="/quina" >Quina</ItemMenu>        
    </Sld>
  )
}

const Sld = styled.div`
position: fixed;
display: flex;
flex-direction: row;
z-index: 1000;
cursor: pointer;
a {
    text-decoration: none;
  }
`