import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import "./medicine.css"

const Medicine = () => {
    
const [name, setName] = useState();
const [manufacturerName, setManufacturerName] = useState();
const [price, setPrice] = useState();
const [discount, setDiscount] = useState();
const [stock, setStock] = useState();

const history = useHistory();
let medicineData;
useEffect(() => {
    medicineData = JSON.parse(localStorage.getItem("medicine"))  
    if(!medicineData){
        localStorage.setItem("medicine", JSON.stringify([]))
    }
},[])
   
  const medicineSubmit =(e) => {
    if(name && manufacturerName && discount && price && stock){
      let medicineObject = {
        name,
        manufacturerName,
        price,
        discount,
        stock,
      }
      let medicineData = JSON.parse(localStorage.getItem("medicine"))  
      medicineData.push(medicineObject);
        console.log(medicineData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("medicine", JSON.stringify(medicineData));
      history.push("/admin")
    } else{
    alert("Fill All The Details Correctly")
  }
  }
//   Name, Manufacturer Name, Price, Stock, Discount
    return ( <div className="medicineDiv">
  <h2>ADD NEW MEDICINE</h2>
         <div 
         className="medicine-form"
        >
         <label className="medicine-label" htmlFor="name">Name*</label>
        <br></br>
        <input
          type="text"
          name="name"
          className="medicineInput"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label className="medicine-label" htmlFor="manufacturerName">Manufacturer Name*</label>
        <br></br>
        <input
          type="text"
          name="manufacturerName"
          className="medicineInput"
          required
          placeholder="Manufacturer Name"
          value={manufacturerName}
          onChange={(e) => setManufacturerName(e.target.value)}
        />
        <br></br>
       <label className="medicine-label" htmlFor="price">price*</label>
        <br></br>
        <input
          type="number"
          name="price"
          className="medicineInput"
          required
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <br></br>
        <label className="medicine-label" htmlFor="discount">discount*</label>
        <br></br>
        <input
          type="text"
          name="discount"
          className="medicineInput"
          required
          placeholder="400612"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <br></br>
        <label className="medicine-label" htmlFor="stock">Stock</label>
        <br></br>
        <input
          type="number"
          name="stock"
          className="medicineInput"
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
        />
        <br></br>
      
        <br></br>
        
        <input
        className="medicine-submitButton" 
        type="submit" 
        value="Submit"
        onClick={medicineSubmit}
        />
    
      </div>
    </div> );
}
 
export default Medicine;