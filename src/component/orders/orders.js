import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import "./orders.css"

const Orders = () => {
    
const [orderId, setOrderId] = useState();
const [customerName, setCustomerName] = useState();
const [contactNumber, setContactNumber] = useState();
const [products, setProducts] = useState();
const [quantity, setQuantity] = useState();
const [totalAmount, setTotalAmount] = useState();

const history = useHistory();
let ordersData;
useEffect(() => {
    ordersData = JSON.parse(localStorage.getItem("orders"))  
    if(!ordersData){
        localStorage.setItem("orders", JSON.stringify([]))
    }
},[])
   
  const ordersSubmit =(e) => {
    if(orderId && customerName && products && contactNumber && quantity && totalAmount){
      let ordersObject = {
        orderId,
        customerName,
        contactNumber,
        products,
        quantity,
        totalAmount
      }
      let ordersData = JSON.parse(localStorage.getItem("orders"))  
      ordersData.push(ordersObject);
        console.log(ordersData,"1111111111111>>>>>>>>>>>>>>");
        localStorage.setItem("orders", JSON.stringify(ordersData));
      history.push("/admin")
    } else{
    alert("Fill All The Details Correctly")
  }
  }
// OrderId, Customer Name, Customer Contact Number, Products, Purchase quantity of each product, Total Amount

    return ( <div className="ordersDiv">
  <h2>ADD THE ORDER</h2>
         <div 
         className="orders-form"
        >
         <label className="orders-label" htmlFor="orderId">Order Id*</label>
        <br></br>
        <input
          type="text"
          name="orderId"
          className="ordersInput"
          required
          placeholder="Order Id "
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <br></br>
        <label className="orders-label" htmlFor="customerName">Customer Name*</label>
        <br></br>
        <input
          type="text"
          name="customerName"
          className="ordersInput"
          required
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <br></br>
       <label className="orders-label" htmlFor="contactNumber">Contact Number*</label>
        <br></br>
        <input
          type="number"
          name="contactNumber"
          className="ordersInput"
          required
          value={contactNumber}
          onChange={(e) => setContactNumber(parseInt(e.target.value))}
        />
        <br></br>
        <label className="orders-label" htmlFor="products">Products*</label>
        <br></br>
        <input
          type="text"
          name="products"
          className="ordersInput"
          required
          placeholder="400612"
          value={products}
          onChange={(e) => setProducts(e.target.value)}
        />
        <br></br>
        <label className="orders-label" htmlFor="quantity">Quantity</label>
        <br></br>
        <input
          type="number"
          name="quantity"
          className="ordersInput"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <br></br>
        <label className="orders-label" htmlFor="totalAmount">Total Amount*</label>
        <br></br>
        <input
          type="number"
          name="totalAmount"
          className="ordersInput"
          value={totalAmount}
          onChange={(e) => setTotalAmount(parseInt(e.target.value))}
        />
        <br></br>
        <br></br>
        
        <input
        className="orders-submitButton" 
        type="submit" 
        value="Submit"
        onClick={ordersSubmit}
        />
    
      </div>
    </div> );
}
 
export default Orders;