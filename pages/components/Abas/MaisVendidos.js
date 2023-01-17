import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from "react"
import { createServer } from "miragejs"
import Image from 'next/image';
import Imagem from './../../../public/photo.svg'
import { Table } from 'react-bootstrap';
import { Breadcrumbs, BreadcrumbItem } from '../Pagination';
import { Card } from '@mui/material';


function MaisVendidos() {
  createServer({
    routes() {
      this.get("/api/products/maisVendidos", () => ({
        products: [
          {
            id: 1,
            name: "Kit 10 Un. Adesivo(...)",
            price: 'R$ ' + 31.67,
            sales: 'Total de ' + 4.750,
            salesDescription: 150 + ' vendas',
            stock: 0 + 'unid'
          },
          {
            id: 2,
            name: "Kit 10 Un. Adesivo(...)",
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
    fetch("/api/products/maisVendidos")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])

  return (

    <div className='TabVendidos'>
      <h3>Mais vendidos</h3>
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
      <div className='maisVendidos'>
        <Table title='Mais vendidos' className='table1'>
          <Item>
            {products.map((product) => (
              <Card key={product.id} class="card" style={{ width: '50%', color: 'black', border: '0', backgroundColor: '#F3F5F9' }} >
                <Image className="card-img-top" alt="Foto do Produto" src={Imagem} height="270" width="220" ></Image>
                <SalesDescriptionPane className="card-body" style={{ marginBottom: '0px', marginTop: '-30px', display: 'flex', justifyContent: 'space-evenly' }}><b>{product.price}</b>  {product.salesDescription}</SalesDescriptionPane>
                <TitlePane className="card-title" style={{ display: 'flex', justifyContent: 'center' }}>{product.name}</TitlePane>
              </Card>
            ))}
          </Item>
        </Table>

        <Table title='Mais vendidos' className='table2'>
          <Item>
            {products.map((product) => (
              <Card key={product.id} class="card" style={{ width: '50%', color: 'black', border: '0', backgroundColor: '#F3F5F9' }} >
                <Image className="card-img-top" alt="Foto do Produto" src={Imagem} height="270" width="220" ></Image>
                <SalesDescriptionPane className="card-body" style={{ marginBottom: '0px', marginTop: '-30px', display: 'flex', justifyContent: 'space-evenly' }}><b>{product.price}</b>  {product.salesDescription}</SalesDescriptionPane>
                <TitlePane className="card-title" style={{ display: 'flex', justifyContent: 'center' }}>{product.name}</TitlePane>
              </Card>
            ))}
          </Item>
        </Table>

      </div>
      <p style={{ display: "flex", justifyContent: "flex-end" }}>Página 1 de 10  </p>
    </div>
  );
}

const TitlePane = styled.div`
    font-weight: 700;
    margin-bottom: 5px;
`;

const SalesDescriptionPane = styled.div`
    margin-bottom: 5px;
`;

const Item = styled.a`
    text-decoration: none;
    display: flex;
`;

export default MaisVendidos;

