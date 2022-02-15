import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Table } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { addToCart, removeFromCart } from '../store/actions/cartAction';

export default function ProductList() {


    const [products, setproducts] = useState([]);
    
    const dispatch=useDispatch();

    useEffect(() => {
      let productService= new ProductService();

      productService.getProducts().then((result)=>setproducts(result.data.data));
    }, []);

    
    function handleAddToCart(item){
        dispatch(addToCart(item))
        toast.success(`${item.productName} added to cart!`);
    }

  
    
  return (
      <div>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
        <Table.HeaderCell>Ürün stok</Table.HeaderCell>
        <Table.HeaderCell>Categori</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
        {products.map(product=>(

      <Table.Row key={product.id}>
      
        <Table.Cell>
        <Link to={`/products/${product.productName}`}>
            {product.productName}
            </Link> 
        </Table.Cell>
        <Table.Cell>{product.unitsInStock}</Table.Cell>
        <Table.Cell>{product.category.categoryName}</Table.Cell>
        <Table.Cell>
          <Button primary disabled={product.unitsInStock === 0} onClick={()=>handleAddToCart(product)} >Add</Button>
        </Table.Cell>


      </Table.Row>


        ))}
   
    </Table.Body>

  
  </Table>
  </div>
  )
}
