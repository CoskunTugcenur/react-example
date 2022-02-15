import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(false);
    const history=useHistory();

    const {cartItems} =useSelector(state=>state.cart)

    function handleSignOut(){
        setisAuthenticated(false)
        history.push("/");
    }
   function handleSignIn(){
       setisAuthenticated(true)
   }


  
  return (
    <Menu inverted fixed="top">
      <Menu.Item name="home" />
      <Menu.Item name="messages" />
      <Menu.Item name="friends" />
      <Menu.Menu position="right">
      <Menu.Item>
          { cartItems.length>0&&
            <CartSummary/>
          }
            </Menu.Item>
            {isAuthenticated?<SignedIn signOut={handleSignOut} /> :<SignedOut signIn={handleSignIn}/>}
      </Menu.Menu>
    </Menu>
  );
}
