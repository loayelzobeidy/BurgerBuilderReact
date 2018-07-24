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
   totalPrice : 4,
   purchasable : false,
   pruchased :false,
    }
    purchase = ()=>{
        let ingrediants = {
            ...this.state.ingrediant
        }
        console.log(ingrediants,'ingrediants')
        const sum =Object.keys(ingrediants).map((iskey)=>
    {
        return ingrediants[iskey];
    }).reduce((sum,el)=>{
        return sum+el;
    },0)
    console.log(sum,'susmm')
    let temp = (this.state.totalPrice>4)
    console.log(temp)
    this.setState({purchasable :temp});
    console.log(this.state,'purchaseeeee')
    }
    addIngrediantHandler = (type)=>{
        const oldCount = this.state.ingrediant[type];
        const newCount = this.state.ingrediant[type]+1;
        this.purchase();        
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
        this.purchase();        
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
        this.purchase();
        this.setState({ingrediant:updatedIngrediant,totalPrice:newPrice})
    }
    purchaseHandler=()=>{
        this.setState({pruchased:true})
        console.log(this.state)
    }
    render(){
    return (
        <Aux>
            <div className = 'container'>
            
            <div className = 'row'>
            <Burger  className='col s1'ingrediants = {this.state.ingrediant}/>
            
            <BuildControls className='col s1' ingrediantAdded = {this.addIngrediantHandler} removeingrediantRemoved={this.removeIngrediantHandler}
            totalPrice ={this.state.totalPrice}
            purchasable ={this.purchasable}
            purchase = {this.purchaseHandler}
            />
            </div>
            </div>
            
        </Aux>
    );    
    }

}
export default BurgerBuilder;