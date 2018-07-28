import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    
    
]
const buildControls = (props)=>(
<div className={classes.BuildControls}>
{console.log(props.totalPrice)}
<p>Current Burger Price: {props.totalPrice}</p>
    {
        controls.map((ctrl)=>{
           if(ctrl.type!=undefined){
            {console.log(ctrl.type),"ingrediant type"}
           return  <BuildControl key={ctrl.label} label = {ctrl.label} added={()=>{props.ingrediantAdded(ctrl.type)}}
            removed ={()=>{ props.removeingrediantRemoved(ctrl.type)}}
        
        />
           }
        }
    )
    }
    <button className='waves-effect waves-light btn'  onClick={props.purchase} >Checkout</button>
</div>
);
export default buildControls