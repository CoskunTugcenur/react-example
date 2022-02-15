import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

export default function Dashboard() {
  return (

    <Grid>
        <Grid.Column width={4}>
            <Categories/>
        </Grid.Column>
        <Grid.Column width={12}>

            <Route exact  path="/" component={ProductList}/>
            <Route exact  path="/products" component={ProductList}/>
            <Route exact  path="/products/:id" component={ProductDetail}/>


        </Grid.Column>
    </Grid>
  )
}
