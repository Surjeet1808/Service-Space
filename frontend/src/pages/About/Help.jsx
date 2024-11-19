import "./Help.css"
import FAQ from "../../components/Subcomponents/FAQ";
import axios from "axios"
import { useState,useEffect, useContext } from "react";
import { GlobleContext } from "../../context/globelcontext";

export default function Help(){
      const {faqs}=useContext(GlobleContext)
    return<>
        <div className="help">
            <div className="faq-container">
            <h1 id="faq-heading">Frequently Asked Questions</h1>
            <p id="faq-subheading">Do you need some help with something or do you have questions on some features</p>
            {faqs.map((faq)=>{
                return(
                <>

                <hr />
                <FAQ key={faq._id} que={faq.question} ans={faq.answer} />
                
                </>
            )
            })}
            </div>
            <div className="contactus">
                <h2>Have you any other questions or queries</h2>
                <p>do not hesitate to contact us with any queries</p>
                <form action="">
                    <input type="text" placeholder="Enter your Query" />
                    <button id="contact-btn">Submit</button>
                </form>
            </div>
        </div>
    </>
}