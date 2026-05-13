import { useState, useEffect } from 'react';

//custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

import './App.css';


function App() {

// Resgatando os dados
// const [products, setProducts] = useState([]);

  //custom hook
  const { data: items, httpConfig, Loading } = useFetch(url);



/*
  useEffect(() => {
    async function getData(){
      const res = await fetch(url);
      const data = await res.json();

      setProducts(data);
    } getData();
  }, []);
*/

  // envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };
  //refatorando post
  httpConfig(product, "POST");
};

  


    /*
    const res = await fetch(url, {
      method: "POST",
      headers:{
        "Content-type" : "application/json",
      },
      body: JSON.stringify(product),
    });

    //carregamento dinâmico
    const addedProduct = await res.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
  */


  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* Resgatando os dados */}
      {/*
      <ul className='read-the-docs'>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
       </ul>  */}


      {/* Loading */}
      {Loading && <p>Carregando...</p>}

       <ul className="read-the-docs">
        {items && 
        items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
          </li>
        ))}
       </ul> 



        {/* Enviando dados */}
        <div className="add-product">
          <form onSubmit={handleSubmit}>

              <label>
                <span>Nome</span>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>

              <label>
                <span>Preço</span>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
              </label>

            {/* <input type="submit" value="Enviar" /> */}

            {Loading && <input type="submit" disable value="Aguarde" />}
            {!Loading && <input type="submit" value="Criar" />}

          </form>
        </div>

    </div>
  )
}

export default App;
