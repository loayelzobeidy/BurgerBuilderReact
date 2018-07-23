import React, {Component}from 'react';
import Aux from '../../hoc/Aux' ;
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
const INGREDIANT_PRICES = {
 salad :4,
 meat:3,
 bacon:3,
 cheese:3,

}
class BurgerBuilder extends Component
{
    state={
   ingrediant:{
       salad:0,
       bacon:0,
       meat:0,
       cheese:0
   },
   totalPrice : 4
    }
    addIngrediantHandler = (type)=>{
        const oldCount = this.state.ingrediant[type];
        const newCount = this.state.ingrediant[type]+1;
        const updatedIngrediant={
            ...this.state.ingrediant
        };
        updatedIngrediant[type] = newCount;
        
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition;
        this.setState({ingrediant:updatedIngrediant,totalPrice:newPrice})
    }
    removeIngrediantHandler = (type)=>{
        const oldCount = this.state.ingrediant[type];
        if(oldCount==0)
        return
        const newCount = this.state.ingrediant[type]-1;
        const updatedIngrediant={
            ...this.state.ingrediant
        };
        updatedIngrediant[type] = newCount;
        
        const priceAddition = INGREDIANT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice-priceAddition;
        this.setState({ingrediant:updatedIngrediant,totalPrice:newPrice})
    }
    render(){
    return (
        <Aux>
            <Burger ingrediants = {this.state.ingrediant}/>
            
            <BuildControls  ingrediantAdded = {this.addIngrediantHandler} removeingrediantRemoved={this.removeIngrediantHandler}
            totalPrice ={this.state.totalPrice}
            />
        </Aux>
    );    
    }

}
export default BurgerBuilder;