import * as action_types from './actions';
const initialState = 
    {
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
const reducer =(state = initialState,action)=>{
    switch(action.type){
        case(action_types.ADD_INGREDIANT):
        return{
            ...state,
            ingrediant:{
                ...state.ingrediant,
                [action.ingreadiantName] :  state.ingrediant[action.ingreadiantName]+1
            }
        }
        case(action_types.REMOVE_INGREDIANT):
        return{
            ...state,
            ingrediant:{
                ...state.ingrediant,
                [action.ingreadiantName] :  state.ingrediant[action.ingreadiantName]-1
            }
        }
        default :return state
    }

};
export default reducer
