import { OrderType, OrderDiet, getRecipes, getDiets } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



export default function NewComponent(){
let dispatch = useDispatch()

   const allDiets = useSelector(store => store.diets)

   useEffect(() => {
    dispatch(getDiets())
   }, [])

    function handleChangeOrder(event){
        event.preventDefault()
        dispatch(OrderType(event.target.value))
    }

    function handleChangeDiets(event){
        event.preventDefault()
        dispatch(OrderDiet(event.target.value))
    }
    return (
        <div className="FilterContainer">
        <div className="DietsFilter" >
        <select onChange={(event)=> handleChangeDiets(event)}>
            <option value="All">All Diets</option>
            {allDiets.map(d => 
            <option value={d.name}>{d.name}</option>)}
        </select>
        </div>
        <div className="AZFilter" >
        <select onChange={(event)=> handleChangeOrder(event)}> 
            <option value="All">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
        </div>
        <div claseName="HTLFilter">
        <select  onChange={(event)=> handleChangeOrder(event)}> 
            <option value="All">Default</option>
             <option value="HighToLow">HighToLow</option>
            <option value="LowToHigh">LowToHigh</option>
        </select>
        </div>
        </div>
    )  
}

