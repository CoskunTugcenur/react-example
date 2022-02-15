import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, Card } from 'semantic-ui-react';
import ProductService from '../services/productService';

export default function ProductDetail() {

  const [product, setProduct] = useState({});

  let {productName} =useParams();
  
  useEffect(() => {
    let productService=new ProductService();
    productService.getByProductName(productName).then(item=>setProduct(item.data.data))
  
  },[]);
  

  return (
    <div>
 
    <Card.Group centered>

    <Card fluid>
      <Card.Content>
       
        <Card.Header>{product.productName}</Card.Header>
        <Card.Meta>{product.unitsInStock}</Card.Meta>
        <Card.Description>
          {product.category.categoryName}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add
          </Button>
          <Button basic color='blue'>
            Like
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
 </div>
  )
}
