import "./subscriptions.scss"
import Footbar from "../../footbar/Footbar";

export default function Subscriptions() {
    return (
        <div className="subscriptions">
            <div className="title">
                <h1> Inscrições</h1>
            </div>
            <div className="container">
                <div className="text">
                A inscrição é feita diretamente no site do ICPC, pois não há pagamento de taxa de inscrição. A inscrição dos times no site do ICPC deve ser feita pelo coach na sede da sua região.

            </div>
                <div className="buttons">
                    <a href="https://icpc.global/" target="_blank" rel="noreferrer">
                        <button className="button">Acessar</button>
                    </a>

                </div>
            </div>
            <Footbar/>
        </div>
    )
}
