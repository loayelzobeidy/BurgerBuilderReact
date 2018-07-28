import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props)=>{
    console.log(props,"burger props")
    let transforIngrediants = Object.keys(props.ingrediants).map(igkey=>{
     return [...Array(props.ingrediants[igkey])].map((_,i)=>{
   return  <BurgerIngredient type = {igkey}/>

     });
    }).reduce((arr,el)=>{
        console.log(arr)
       return  arr.concat(el);
    },[]);
    if(transforIngrediants.length===0)
    transforIngrediants = <p>pleasee addd ingrediant</p>
return(
    <div className={classes.Burger}>
    
    <BurgerIngredient type = "bread-top"/>
{transforIngrediants}
    <BurgerIngredient type = "bread-bottom"/>
    
    </div>
);
}
export default burger;