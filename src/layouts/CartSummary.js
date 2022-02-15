import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import {  Dropdown, Label, Menu } from "semantic-ui-react";
import { removeFromCart } from "../store/actions/cartAction";

export default function CartSummary() {

  const {cartItems} =useSelector(state=>state.cart)
  const dispatch=useDispatch();

  function handleRemoteToCart(item){
    dispatch(removeFromCart(item));
    toast.warning(`${item.productName} removed from cart!`);
  }
  return (
    <div>
      <Menu.Item>
        <Dropdown text="Cart">
          <Dropdown.Menu>
              {cartItems.map((item)=>(

                <Dropdown.Item key={item.product.id}>
                  <Label> {item.product.productName}</Label>
                  <Label color="blue">{item.quantity}</Label>
                  <Label color="red" disabled={item.product.unitsInStock === 0} onClick={()=>handleRemoteToCart(item.product)} >Remove</Label>

                  </Dropdown.Item>

              )
                )}
              <Dropdown.Divider/>
              <Dropdown.Item as={NavLink} to="/cart">Go to Cart</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
