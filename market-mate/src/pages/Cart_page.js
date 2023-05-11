import React, { useState } from 'react';
import './cart-page.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react'
import { useContext } from 'react';
import { CartContext, ProductContext } from "../App";
import { Link, useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function Basic() {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleDelete = (id) => {
    setCart(cart.filter((cartt) => cartt.id !== id));
  };

  function calculatePrice() {
    let total = 0;
    cart.forEach((cartt) => {
      total += cartt.price * cartt.count;
    });
    return total.toFixed(2);
  }

  const increaseCount = (id) => {
    setCart((prevState) =>
      prevState.map((cartt) =>
        cartt.id === id ? { ...cartt, count: cartt.count + 1 } : cartt
      )
    );
  };

  const decreaseCount = (id) => {
    setCart((prevState) =>
      prevState.map((cartt) =>
        cartt.id === id && cartt.count > 0
          ? { ...cartt, count: cartt.count - 1 }
          : cartt
      )
    );
  };

  useEffect(() => {
    cart.forEach((cartt) => {
      if (cartt.count === 0) {
        handleDelete(cartt.id);
      }
    });
  }, [cart]);
  const navigat = useNavigate();
  const navTo = (event) => {
    event.preventDefault();
    navigat('Conff.js')
  }
  return (


    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#ffff" }}>
        <MDBContainer className="h-100 py-5"  >
          <MDBRow className="justify-content-center align-items-center h-100" >
            <MDBCol >
              <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
                <MDBCardBody className="text-black">
                  <MDBRow>
                    <MDBCol lg="7" className="px-5 py-4">
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-left text-muted"
                        style={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>
                        <span style={{ fontSize: "2rem", fontWeight: "bold", color: "black" }}>Shopping cart</span>
                        <br />
                        <br />
                        You have {cart.length} items in your cart
                      </MDBTypography>
                      {cart.map((cartt) => (
                        <div className="d-flex align-items-center mb-5" key={cartt.id}>
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              src={cartt.image}
                              fluid
                              style={{ width: "150px" }}
                              alt="Generic placeholder image"/>
                          </div>

                          <div className="flex-grow-1 ms-3">
                            <button
                              className="float-end bg-transparent border-0"
                              style={{ outline: 'none' }}
                              onClick={() => handleDelete(cartt.id)}>
                              <FontAwesomeIcon
                                icon={faTrash}
                                style={{ fontSize: '1.5rem', color: 'gray', marginTop: '30px' }}/>
                            </button>

                            <MDBTypography tag="h5" className="text-primary " >
                              <span style={{ color: "black" }}>{cartt.name}</span>
                            </MDBTypography>
                            <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                              Color: {cartt.color}
                            </MDBTypography>

                            <div className="d-flex align-items-center">
                              <p className="fw-bold mb-0 me-5 pe-3">{cartt.price}</p>

                              <div className="def-number-input number-input safari_only">
                                <button className="minus" onClick={() => decreaseCount(cartt.id)} ></button>
                                <input
                                  className="quantity fw-bold text-black"
                                  min={1}
                                  value={cartt.count}
                                  type="number"/>
                                <button className="plus" onClick={() => increaseCount(cartt.id)} ></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <hr
                        className="mb-4"
                        style={{
                          height: "3px",
                          backgroundColor: "#fab00f",}}/>

                      <div className="d-flex justify-content-between p-2 mb-2" style={{ backgroundColor: " #a4cc76" }}>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          Total:
                        </MDBTypography>
                        <MDBTypography tag="h5" className="fw-bold mb-0">
                          {calculatePrice()}$
                        </MDBTypography>
                      </div>

                      <div style={{ marginTop: '50px' }}>
                        {/* Your container here */}
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                          <a href="#!" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                            Back to shopping
                          </a>
                        </div>
                      </div>

                    </MDBCol>

                    <MDBCol lg="5" className="px-5 py-4" style={{ backgroundColor: "#ddd" }}>
                      <MDBTypography
                        tag="h3"
                        className="mb-5 pt-2 text-center fw-bold text-uppercase" >

                        Payment
                      </MDBTypography>

                      <form className="mb-5">
                        <label> Card Number</label>
                        <br />
                        <MDBInput
                          className="mb-5"
                          label="Name on card"
                          type="text"
                          size="lg"
                          defaultValue=""
                          placeholder='•••• •••• •••• ••••'
                          required />

                        <MDBInput
                          className="mb-5"

                          type="text"
                          size="lg"
                          defaultValue=""
                          placeholder='Name'

                          required />
                        <MDBRow>
                          <MDBCol md="6" className="mb-10 text-right">
                            <label>Expiration</label>
                            <MDBInput
                              className="mb-4"
                              type="text"
                              size="lg"
                              minLength="7"
                              maxLength="7"
                              defaultValue=""
                              placeholder="MM/YYYY"
                              required />
                          </MDBCol>
                          <MDBCol md="3" className="mb-5 text-right">
                            <label>Cvv</label>
                            <MDBInput
                              className="mb-4"
                              type="text"
                              size="lg"
                              minLength="3"
                              maxLength="3"
                              placeholder="&#9679;&#9679;&#9679;"
                              defaultValue=""
                              required />
                          </MDBCol>
                        </MDBRow>



                        <p className="mb-5">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit
                          <a href="#!"> obcaecati sapiente</a>.
                        </p>

                        <div className="d-flex justify-content-center mt-5">
                          <Link to="/Conff">  <button className="custom-btn" size="lg" style={{ width: '200px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            Buy now
                          </button>
                          </Link>
                        </div>

                        <MDBTypography
                          tag="h5"
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: "0" }}>
                        </MDBTypography>
                      </form>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}







            // { cart.length >0 ? (
            //   <div className="center">
            //     <FontAwesomeIcon className="iconc" icon={faShoppingCart} />
            //     <h2>Your cart is empty</h2>
            //     <p>Spend $0.00 more and get free shipping!</p>
            //      <Link to="/" > <button className="shopnow ">Shop Now</button></Link>
            //   </div>
            // ) : (





