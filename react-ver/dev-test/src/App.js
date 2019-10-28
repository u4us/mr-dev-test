import React from 'react';
import './mysass/main.scss'
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }

    handleAddClick = (e)=>{
      
    }
  }
  render(){
    return(
      <div className="App">
          <header>
            <div className="nav">
                <div className="cart">
                    <i className="fas fa-shopping-cart"></i> (<span id="item-amount">0</span>)
                </div>       
            </div>
            <div className="cart-expanded">
                <div className="cart-item small-shirt">
                    <div className="item-image">
                        <img src="assets/classic-tee.jpg" alt=""/>
                    </div>
                    <div className="item-description">
                        <p>Classic Tee</p>
                        <p><span id="small-amount">1</span>x <span className="cart-price">$75.00</span></p>
                        <p>Size: S</p>
                    </div>
                </div>

                <div className="cart-item medium-shirt">
                    <div className="item-image">
                        <img src="assets/classic-tee.jpg" alt=""/>
                    </div>
                    <div className="item-description">
                        <p>Classic Tee</p>
                        <p><span id="medium-amount">1</span>x <span className="cart-price">$75.00</span></p>
                        <p>Size: M</p>
                    </div>
                </div>

                <div className="cart-item large-shirt">
                    <div className="item-image">
                        <img src="assets/classic-tee.jpg" alt=""/>
                    </div>
                    <div className="item-description">
                        <p>Classic Tee</p>
                        <p><span id="large-amount">1</span>x <span className="cart-price">$75.00</span></p>
                        <p>Size: L</p>
                    </div>
                </div>
            </div>
        </header>

        <section className="section app">
            <div className="container">
                <div className="image">
                    <img src="assets/classic-tee.jpg" alt=""/>
                </div>
                <div className="content">
                    <h2 id="title">Classic Tee</h2>
                    <p id="price">$75.00</p>
                    <p id="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse recusandae voluptate quos pariatur, sed eum sunt asperiores consequuntur, facere nulla obcaecati officiis soluta labore vitae veritatis commodi, amet eligendi?
                    </p>
                    <p id="size-text">
                        Size<span id="required">*</span> <span id="display-size"></span>
                    </p>
                    <div className="size-buttons">
                        <div className="size-button small" data-size="S" data-cost="75">S</div>
                        <div className="size-button medium" data-size="M" data-cost="75">M</div>
                        <div className="size-button large" data-size="L" data-cost="75">L</div>
                    </div>
                    <input type="button" value="Add to Cart" id="add-to-cart" onClick={this.handleAddClick}/>
                </div>
            </div>
        </section>
      </div>
    )
  }
}

export default App;
