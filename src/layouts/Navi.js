import { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

    const [isAuthenticated, setisAuthenticated] = useState(false);

    function handleSignOut(){
        setisAuthenticated(false)
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
        <Menu.Item >
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
         
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
