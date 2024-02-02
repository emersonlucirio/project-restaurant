export function Navegacao(props) {
    return <div className="navegacao">
        <input type="radio" name="opcao-pagina" id="pagina0" defaultChecked onClick={() => props.atualizarPaginaSelecionada(0)}/>
        <label htmlFor="pagina0">Pratos principais</label>
        <input type="radio" name="opcao-pagina" id="pagina1" onClick={() => props.atualizarPaginaSelecionada(1)}/>
        <label htmlFor="pagina1">Sobremesas</label>
        <input type="radio" name="opcao-pagina" id="pagina2" onClick={() => props.atualizarPaginaSelecionada(2)}/>
        <label htmlFor="pagina2">Bebidas</label>
    </div>
}


