import styled from "styled-components";
import { Provider } from "../contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";
import Menu from "../components/Menu";
import { mega, lotofacil, quina } from "../styles/themes";

export default function Rotas() {
  return (
    <PageSld>
      <Provider>
        <BrowserRouter>
          <Menu />
          <BodySld>
            <Routes>               
              <Route path="/" element={<Megasena theme={mega} />} />      
              <Route path="/megasena" element={<Megasena theme={mega}/>} />
              <Route path="/lotofacil" element={<Lotofacil theme={lotofacil} />} />
              <Route path="/quina" element={<Quina theme={quina} />} />
            </Routes>
          </BodySld>
        </BrowserRouter>
      </Provider>
    </PageSld>
  );
}

const PageSld = styled.div`
  display: flex;
`;
const BodySld = styled.div`
margin: 40px 0px 0 40px;
`;
