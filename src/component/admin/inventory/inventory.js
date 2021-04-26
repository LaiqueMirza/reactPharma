import React from "react";
import "./inventory.css"
import { Link } from "react-router-dom";
import NavBar from "../navBar/navBar";

const Inventory = () => {
  let medicineData = JSON.parse(localStorage.getItem("medicine"));

  console.log(medicineData);
const deleteInventory= (name) =>{
  console.log(name);
  console.log("e");
  medicineData.every(item => {
    if(item.name === name){
      return false
    }
    return true
  })
  console.log(medicineData)
}
  return (
    <div className="inventoryDiv">
      <NavBar />
      <div className="inventoryHeadDiv">
        <h2>Inventory</h2>
        <button className="inventoryButton">
          <Link
            to="/medicine"
            style={{ textDecoration: "none", color: "#f9f9f9" }}
          >
            ADD MEDICINE
          </Link>
        </button>
      </div>
      {medicineData ? (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Discount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {medicineData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.manufacturerName}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.discount}</td>
                <td><i 
                onClick={deleteInventory(item.name)}
                className="fa fa-trash deleteIcon"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>There is no medicine to display</h3>
      )}
    </div>
  );
};

export default Inventory;
