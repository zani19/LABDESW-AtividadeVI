import "./index.css";
import trevo from "../../assets/trevo-quina.png";
import { useLoteria } from "../../hooks";

export default function Quina(){
    const { quina } = useLoteria();
    const linha1:string[] = [], linha2:string[] = [], linha3:string[] = [];
    for(let i = 0; i < 5; i++){
        linha1.push(quina.dezenas[i]);
    }
    for(let i = 5; i < 10; i++){
        linha2.push(quina.dezenas[i]);
    }
    for(let i = 10; i < 15; i++){
        linha3.push(quina.dezenas[i]);
    }
    
    return (
        <div className="quina-bloco-principal">
            <div>
                <div className="quina-bloco-loteria">
                    <img src={trevo} alt="" />
                    <span className="quina-nome-loteria">QUINA</span>
                </div>
                <div className="quina-bloco-estimativa">
                    <div className="quina-texto-estimativa"> 
                        Estimativa de prêmio do próximo concurso. 
                        Sorteio em {quina.dataProximoConcurso}:
                    </div>
                    <div className="quina-valor-estimativa"> 
                        {quina.valorEstimadoProximoConcurso.toLocaleString("pt-Br",{
                            style: "currency",
                            currency: "BRL"
                        })}
                    </div>
                </div>
            </div>
            <div className="quina-bloco-direita">
                <div className="quina-linha-bola">
                    {
                        linha1.map( dezena =>
                                <div className="quina-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                {/* <div className="quina-linha-bola">
                    {
                        linha2.map( dezena =>
                                <div className="quina-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div>
                <div className="quina-linha-bola">
                    {
                        linha3.map( dezena =>
                                <div className="quina-bola" key={dezena}>{dezena}</div>
                             )
                    }
                </div> */}
                <div className="quina-texto-acumulou">
                    {
                        quina.quantidadeGanhadores === 0 ? 
                        "ACUMULOU!" :
                        `${quina.quantidadeGanhadores} GANHADORES`
                    }
                </div>
                <div className="quina-data-concurso">
                    {
                        `Concurso ${quina.numeroDoConcurso} - ${quina.dataPorExtenso}`
                    }
                </div>
            </div>
        </div>
    );
}