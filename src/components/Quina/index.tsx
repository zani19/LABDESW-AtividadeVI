import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import styled, { ThemeProvider } from "styled-components";

export default function Quina({theme}:any) {
  const { quina } = useLoteria();
  const linha1: string[] = [],
    linha2: string[] = [],
    linha3: string[] = [];

  if (quina && quina.dezenas) {
    for (let i = 0; i < 5; i++) {
      linha1.push(quina.dezenas[i]);
    }
    for (let i = 5; i < 10; i++) {
      linha2.push(quina.dezenas[i]);
    }
    for (let i = 10; i < 15; i++) {
      linha3.push(quina.dezenas[i]);
    }
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    {quina.dataProximoConcurso ? (
    <WrapperSld>
      <div>
        <LoteriaBlockSld>
          <img src={trevo} alt="" />
          <LoteriaNameSld>QUINA</LoteriaNameSld>
        </LoteriaBlockSld>
        <LoteriaEstimativaSld>
          <div>
            Estimativa de prêmio do próximo concurso. Sorteio em{" "}
            {quina.dataProximoConcurso}:
          </div>
          <ValorEstimativaSld>
            {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br", {
              style: "currency",
              currency: "BRL",
            })}
          </ValorEstimativaSld>
        </LoteriaEstimativaSld>
      </div>
      <RightBlockSld>
        <LineBallSld>
          {linha1.map((dezena) => (
            <BallSld key={dezena}>
              {dezena}
            </BallSld>
          ))}
        </LineBallSld>       
        <TextoAcumulouSld>
          {quina.quantidadeGanhadores === 0
            ? "ACUMULOU!"
            : `${quina.quantidadeGanhadores} GANHADORES`}
        </TextoAcumulouSld>
        <TextoDataConcursoSld>
          {`Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`}
        </TextoDataConcursoSld>
      </RightBlockSld>
    </WrapperSld>
    ) : (
        <Carregando />
    )}
    </ThemeProvider>
    </>
  );
}


const WrapperSld = styled.div`
  display: flex;
  padding: 30px 0px;
  border-bottom: 1px solid #ddd;
`;
const LoteriaBlockSld = styled.div`
  display: flex;
`;

const LoteriaNameSld = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.loteria};
  margin-left: 10px;
`;

const LoteriaEstimativaSld = styled.div`
  width: 240px;
  margin-left: 45px;
  margin-top: 15px;
  font-size: 15px;
  color: ${(props) => props.theme.estimativa};
`;

const ValorEstimativaSld = styled.div`
  font-size: 20px;
  margin-top: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.estimativa};
`;
const RightBlockSld = styled.div`
  margin-left: 50px;
`;

const LineBallSld = styled.div`
  display: flex;
`;

const BallSld = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => props.theme.bola};
  color: ${(props) => props.theme.bolafonte};
  border-radius: 25px;
  padding: 10px;
  margin: 0px 10px;
`;
const TextoAcumulouSld = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.acumulou};
  margin-top: 15px;
  padding-left: 15px;
`;

const TextoDataConcursoSld = styled.div`
  margin-top: 15px;
  color:  ${(props) => props.theme.data};
  padding-left: 15px;
  font-size: 15px;
`;
