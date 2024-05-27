import trevo from "../../assets/trevo-megasena.png";
import { useLoteria } from "../../hooks";
import Carregando from "../Carregando";
import styled, { ThemeProvider } from "styled-components";

export default function Megasena({ theme }: any) {
  const { megasena } = useLoteria();

  return (
    <>
      <ThemeProvider theme={theme}>
        {megasena.dataProximoConcurso ? (
          <WrapperSld>
            <div>
              <LoteriaBlockSld>
                <img src={trevo} alt="" />
                <LoteriaNameSld>MEGA-SENA</LoteriaNameSld>
              </LoteriaBlockSld>
              <LoteriaEstimativaSld>
                <div>
                  Estimativa de prêmio do próximo concurso. Sorteio em{" "}
                  {megasena.dataProximoConcurso}:
                </div>
                <ValorEstimativaSld>
                  {megasena.valorEstimadoProximoConcurso.toLocaleString(
                    "pt-Br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </ValorEstimativaSld>
              </LoteriaEstimativaSld>
            </div>
            <RightBlockSld>
              <LineBallSld>
                {megasena.dezenas.map((dezena) => (
                  <BallSld key={dezena}>{dezena}</BallSld>
                ))}
              </LineBallSld>
              <TextoAcumulouSld>
                {megasena.quantidadeGanhadores === 0
                  ? "ACUMULOU!"
                  : `${megasena.quantidadeGanhadores} GANHADORES`}
              </TextoAcumulouSld>
              <TextoDataConcursoSld>
                {`Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`}
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
