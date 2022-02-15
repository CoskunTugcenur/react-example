import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductList() {

    const [products, setproducts] = useState([]);

    useEffect(() => {
      let productService= new ProductService();

      productService.getProducts().then((result)=>setproducts(result.data.data));
    }, []);
    
  return (
      <div>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Ürün stok</Table.HeaderCell>
        <Table.HeaderCell>Categori</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {products.map(product=>(

      <Table.Row key={product.id}>
      
        <Table.Cell>{product.productName}</Table.Cell>
        <Table.Cell>{product.unitsInStock}</Table.Cell>
        <Table.Cell>{product.category.categoryName}</Table.Cell>

      </Table.Row>


        ))}
   
    </Table.Body>

  
  </Table>
  </div>
  )
}
