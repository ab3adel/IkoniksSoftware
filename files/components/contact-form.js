import React,{useEffect} from "react";
import { ContactFormTitle } from "@/data";
import {CircularProgress} from '@mui/material'
const ContactForm = ({fields,handleField,sendMessage,loading}) => {
  const { subTitle, title, description } = ContactFormTitle;
const handleChange =(e) =>{

    handleField(e.target.name,e.target.value,false)
}

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <div
            
              className="contactFrom"
              id="contactForm"
            >
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className={fields['NameError']?"input-form required reqError":"input-form required"}
                    type="text"
                    name="Name"
                    id="f_name"
                    placeholder="Your Name"
                    onChange={(e)=>handleChange(e)}
                    value={fields['Name']}
                    
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
             className={fields['CompanyError']?"input-form required reqError":"input-form required"}
                    type="text"
                    name="Company"
                    id="l_name"
                    placeholder="Company Name"
                    onChange={(e)=>handleChange(e)}
                    value={fields['Company']}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className={fields['EmailError']?"input-form required reqError":"input-form required"}
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email Address"
                    onChange={(e)=>handleChange(e)}
                    value={fields['Email']}
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className={fields['PhoneError']?"input-form required reqError":"input-form required"}
                    type="number"
                    name="Phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={(e)=>handleChange(e)}
                    value={fields['Phone']}
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className={fields['MessageError']?"input-form required reqError":"input-form required"}
                    name="Message"
                    id="con_message"
                    placeholder="Write Message"
                    onChange={(e)=>handleChange(e)}
                    value={fields['Message']}
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
            
                id="con_submit"
                onClick={sendMessage}
                disabled={loading}
              >
              {loading?<CircularProgress size={30} />:  <span>Send Message</span>}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
