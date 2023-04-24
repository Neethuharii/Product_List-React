import React, { useState } from 'react'
import './Products.css';
import {laptopData} from './product.data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = () => {
  const [items,setItems] = useState(laptopData)
const decQty=(id) => {
  const newItem = items.map((item)=>
  item.id === id && item.qty>1  ? {...item,qty:item.qty-1}: item
  );
  setItems(newItem);
};

const incQty=(id) => {
  const newItem = items.map((item)=>
  item.id === id ? {...item,qty:item.qty+1}: item
  );
  setItems(newItem);
};
  return (
    <div  >
        <h1 className='Header'>Products</h1>
        {items.map((item)=>(
          <div className='full' key={item.id}>

<Card className='box' style={{ width: '25rem' }}>
<Card.Img style={{ height: '15rem' }} variant="top" src={require(`./images/${item.imaage}.png`)}/>
<Card.Body>
  <Card.Title>{item.model}</Card.Title>
  <Card.Text>
{item.desc}
  </Card.Text>
  <h3>Price:  {item.price}</h3>
  <div>
    <p>Qty
    <Button 
    onClick={()=>decQty(item.id)}
    className='button1'>-</Button>
    {item.qty}
    <Button
    onClick={()=>incQty(item.id)}
     className='button2'>+</Button>
    </p>
  </div>
  <Button className='add' variant="primary">Add to cart</Button>
</Card.Body>
</Card>
</div>
        ))}
       


    </div>
  
      );
        };
    
  
 

export default Products
