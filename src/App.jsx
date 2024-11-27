import React, { useState } from 'react';
import './App.css';
import Carrinho from './components/carrinho'
import Produto from'./components/produto'



// App principal
export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [produtos] = useState([
    { id: 1, nome: 'Base', preco: 199.90, img: 'https://storage.googleapis.com/beyoung-blog/2023/09/interna-C-base-maquiagem-ideal-beyoung.jpg' },
    { id: 2, nome: 'Batom', preco: 109.90, img: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/607699-450-450/batom-mac-macximal-silky-matte-lipstick--2-.jpg?v=638504554888700000' },
    { id: 3, nome: 'Máscara de Cílios', preco: 99.90, img: 'https://dedcosmeticosonline.com.br/wp-content/uploads/2023/03/mascara-cilios-infinity-volume-2.jpg' },
  
  ]);

  // Função para adicionar itens ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  // Função para finalizar a compra
  const finalizarCompra = () => {
    if (carrinho.length > 0) {
      alert('Compra finalizada! Obrigado pela sua compra!');
      setCarrinho([]); // Limpa o carrinho após a compra
    } else {
      alert('Seu carrinho está vazio.');
    }
  };

  // Calcula o total do carrinho
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);

  return (
    <div className="container">
      <h1>Carrinho de Compras - Maquiagens</h1>

      <div className="produtos">
        <h2>Produtos</h2>
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
        ))}
      </div>

      <Carrinho carrinho={carrinho} total={total} finalizarCompra={finalizarCompra} />
    </div>
  );
}

