import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react"
import Image from 'next/image';
import Imagem from './../../../public/photo.svg'
import { Table } from 'react-bootstrap';
import Favoritar from './../Favoritar';
import { Breadcrumbs, BreadcrumbItem } from '../Pagination';
import { createServer } from "miragejs"


function TabTodos() {
  createServer({
    routes() {
      this.get("/api/products/todos", () => ({
        products: [
          {
            id: 1,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 2,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 3,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 4,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 5,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 6,
            name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 7,
            name: "7Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
         

        ]

      }))
      this.passthrough();
    },

  })

  let [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/api/products/todos")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])

  return (

    <div className='TabTodos'>
      <h3>Todos os produtos</h3>
      <div className='setasPage' >
        <Breadcrumbs>
          <BreadcrumbItem href="https://xcommerce.io/pt-BR"><button style={{ border: "0px", backgroundColor: "#ffff" }}>
            <svg color='#235EE7' width="40" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button></BreadcrumbItem>
          <BreadcrumbItem><button style={{ border: "0px", backgroundColor: "#ffff" }}><svg color='#235EE7' width="40" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button></BreadcrumbItem>
        </Breadcrumbs>

      </div>
      <div className='todosOsProdutos'>
        <Table title='Todos os produtos'>
          <thead style={{ display: 'table-row-group' }}>
            <tr style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', right: '20px' }}>
              <th className='Identificacao' >Identificação</th>
              <th className='Preco' style={{ position: 'relative', left: '60px' }}>Preço</th>
              <th className='Vendas' style={{ position: 'relative', left: '25px' }}>Vendas</th>
              <th className='Estoque'>Estoque</th>

            </tr>
          </thead>

          <Item title="Clique para favoritar">

            {products.map((product) => (
              <ItemContainer key={product.id}>
                <Image alt="Foto do Produto" src={Imagem}></Image>
                <TitlePane>{product.name}</TitlePane>
                <PricePane>{product.price}</PricePane>
                <SalesPane>{product.sales}</SalesPane>
                <SalesDescriptionPane>{product.salesDescription}</SalesDescriptionPane>
                <StockPane>{product.stock}</StockPane>
                <Favoritar />
              </ItemContainer>
            ))}
          </Item>
        </Table>
      </div>
      <p style={{ display: "flex", justifyContent: "flex-end" }}>Página 1 de 10 </p>
    </div>
  );
}

const ItemContainer = styled.div`
    border-radius: 4px;
    height: 100px;
    width: 192px;
    color: #29303b;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px;
    display: flexbox;
    
`;

const TitlePane = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
`;

const PricePane = styled.div`
    margin-bottom: 5px;
`;

const SalesPane = styled.div`
    margin-bottom: 5px;
`;
const SalesDescriptionPane = styled.div`
    margin-bottom: 5px;
`;
const StockPane = styled.div`
    margin-bottom: 5px;
`;

const Item = styled.a`
    text-decoration: none;
`;

export default TabTodos;

