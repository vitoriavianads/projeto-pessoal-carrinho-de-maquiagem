export default function Carrinho({ carrinho, total, finalizarCompra }) {
    return (
      <div className="carrinho">
        <h2>Carrinho</h2>
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>{item.nome} - R$ {item.preco}</li>
          ))}
        </ul>
        <p>Total: R$ {total}</p>
        <button onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    );
  }