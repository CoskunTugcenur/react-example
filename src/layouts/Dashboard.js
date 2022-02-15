import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Grid } from "semantic-ui-react";
import CartDetail from "../pages/CartDetail";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard({ item }) {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Column width={4}>
          <Categories />
        </Grid.Column>
        <Grid.Column width={12}>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/products" component={ProductList} />
          <Route
            exact
            path="/products/:productName"
            component={ProductDetail}
          />
          <Route path="/cart" component={CartDetail}/>
          <Route path="/cart/add" component={CartDetail}/>

        </Grid.Column>
      </Grid>
    </div>
  );
}
