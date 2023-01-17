import { createServer, Model } from "miragejs"

export async function  makeServer({ environment = "development" } = {}) {
  let server = await createServer({
    environment,

    models: {
      product: Model,
    },

    seeds(server) {
      server.create("product", { name: "Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular", 
      price: 'R$ '+ 31.67 , 
      sales: 'Total de '+ 4750 , 
      salesDescription: 150 + ' vendas', 
      stock: 0 + 'unid' })
    },
  
    routes() {
      this.get("/products")  
      this.get("/products", (schema) => {
        return schema.products.all()
      })
      this.get("/produtos/maisVendidos")
      this.get("/produtos/favoritos")
      this.get("/produtos/todos")


      // this.passthrough();
    },
  })
  // server.shutdown()
  return server
}

// new Server({
//   routes() {
//     this.timing = 400; // default
//   }
// }) 
// createServer({
//   routes() {
//     this.namespace = 'api';

//     this.get("/products", () => ({
//       products: [
//         { id: 1, name:"Carregador Portátil", price: 'R$ ' + 80.00},
//         { id: 2, name:"Carregador Portátil", price: 'R$ ' + 180.00},
//       ],
//     }))

//     this.namespace = ""
//     this.passthrough()

//   },
// })
