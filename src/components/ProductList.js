import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import TitleImage from '../titlepage.jpg'

export default class ProductList extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="img-container">
              <img src={TitleImage} alt="Responsive image" className="img-fluid"/>
            </div>
            <div className="py-3">
              <div className="container">
                <Title name="our" title="cars"/>
                <div className="row">
                    <ProductConsumer>
                        {
                          value => {
                            return value.products.map (
                              product => {
                                return <Product key={product.id} product={product}/>
                              }
                            )
                          }
                        }
                    </ProductConsumer>
                </div>
              </div>
            </div>
        </React.Fragment>
    )
  }
}