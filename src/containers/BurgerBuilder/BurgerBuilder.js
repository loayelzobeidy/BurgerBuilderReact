import React, {Component}from 'react';
import Aux from '../../hoc/Aux' ;
import {connect} from 'react-redux';
import * as action_types from '../../store/actions'
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
            <Burger  className='col s1'ingrediants = {this.props.ings}/>
            
            <BuildControls className='col s1' ingrediantAdded = {this.props.onIngrediantAdd} removeingrediantRemoved={this.props.onIngrediantRemove}
            totalPrice ={this.props.totalPrice}
            purchasable ={this.purchasable}
            purchase = {this.purchaseHandler}
            />
            </div>
            </div>
            
        </Aux>
    );    
    }

}
const mapDispatchToProps = dispatch=>{
    return {
        onIngrediantAdd:(ingredian)=>dispatch({type:action_types.ADD_INGREDIANT,ingrediantName:ingredian}),
        onIngrediantRemove:(ingredian)=>dispatch({type:action_types.REMOVE_INGREDIANT,ingrediantName:ingredian})
       
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingrediant,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);