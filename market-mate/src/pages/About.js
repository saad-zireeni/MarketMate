
import React from 'react';
import MyImg2 from "../components/ContactAbout/img/MyImg2.png";


const About = () => {
    return (
        <div className="container mt-5 "> 
            <h2 className="mb-3 " > <strong>About Us</strong> </h2>

            <img src={MyImg2} alt="" className="mx-auto d-block fade-in" />
            <h6 className="my-4 " >
                "Food is Energy and Energy is Life."
            </h6>
            <h6 className="my-4" >
                "We are grateful to share these products and our services with you."
            </h6>
            <h6 className="my-4" >
                "Lee Rosenthal - WebFoodStore.com"
            </h6>
            <p className="my-3">  
            {/* inside the p tag 3 p tags */}
            <p className="my-3">
                <strong>WebFoodStore.com</strong>  makes more food products more accessible to more people than ever before. Our ecommerce website is accessible by all visitors to positively impact businesses
                and consumers alike. We have partnered with the largest nationwide distributor removing costs and complexities from the supply chain for our customers. With 14 distribution centers
                across the country we typically deliver in three to five business days. We can redistribute 45,000 stocked products from more than 1,000 suppliers and our special order items are
                available as well.   </p>
                <p className="my-3">
                To meet consumer demands we are currently offering the top-selling and trending dry-goods and temperature controlled products including refrigerated, frozen, dairy, convenience store,
                specialty retail, natural and specialty foods, organic and plant-based, global imports, and more.
            </p>
            <p className="my-3">
                We are excited to work with you and earn your ongoing business and support.
            </p>
         
            </p>
  
        </div>
        // </div>
    );
};

export default About;
