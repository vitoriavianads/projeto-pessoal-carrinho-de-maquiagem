 export default function Produto({ produto, adicionarAoCarrinho }) {
    return (
      <div className="produto">
        <img src={produto.img} alt={produto.nome} />
        <h3>{produto.nome}</h3>
        <p>Preço: R$ {produto.preco}</p>
        <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
      </div>
    );
  }