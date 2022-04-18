import React ,{useState} from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactInfos from "@/components/contact-infos";
import GoogleMap from "@/components/google-map";
import ContactForm from "@/components/contact-form";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "context/search-context";
import MenuContextProvider from "context/menu-context";
import HeaderOne from "@/components/header-one";
import {Snackbar,Alert} from "@mui/material"

const ContactPage = () => {
  const [fields,setFields]=useState({
    Name:'',NameError:false,
    Company:'',CompanyError:false,
    Email:'',EmailError:false,
    Subject:'',SubjectError:false,
    Message:'',MessageError:false
})
const [loading,setLoading]= useState(false)
const [notification,setNotification]=useState({
    show:false,
    severity:'success',
    message:''
})
const handleField =(name,value,err)=>{
  let newFields= {...fields}
  newFields[name]=value
  setFields(pre=>({...pre,...newFields}))
}
const emptyFields= ()=>{
  let newFields= {...fields}
  Object.keys(newFields).map(ele=>{
      newFields[ele]=''
  })
  setFields(pre=>({...pre,...newFields}))
  }
  
  const checkErro =()=>{
      let newFields= {...fields}
      let errors=Object.keys(newFields).filter (ele=>
          !ele.includes('Error') && ele !== "Subject" && !newFields[ele] 
      )
      errors.map(ele=>{
         newFields[`${ele}Error`]=true
      })
      setFields(pre=>({...pre,...newFields}))
      console.log(errors)
      if (errors.length>0) return true
      return false 
  }
  const sendMessage =async() =>{
    if (checkErro()) return 
let formData= new FormData()
formData.append('name',fields['Name'] )
formData.append('email',fields['Email'] )
formData.append('company',fields['Company'] )
formData.append('subject',"message")
formData.append('message',fields['Message'] )
setLoading(true)
await fetch('http://backend.test.ikoniks.de/api/website/contacts',{
    method:'POST',
    body:formData
})
.then(res=>{
    if (res.ok) {
        setNotification(pre=>({...pre,show:true
                       ,message:'your message sent successfully',severity:'success'}))
        setLoading(false)
        emptyFields()  

    }
    else {
        setNotification(pre=>({...pre,show:true
            ,message:'your message wasn not send',severity:'error'}))
        setLoading(false)
    }
})
.catch(err=>{
    setLoading(false)
    console.log(err)
})
}
const handleClose=() =>{
  setNotification(pre=>({...pre,show:false}))
}
console.log(fields)
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact Page">
          <HeaderOne />
          <PageBanner title="Contact Us" name="Contact" />
          <ContactForm 
                      fields={fields} 
                      handleField={handleField} 
                        sendMessage={sendMessage}
                      />
          <GoogleMap extraClass="contact-page" />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
      <Snackbar open={notification.show} onClose={handleClose} autoHideDuration={6000}>
        <Alert severity={notification.severity}>
           {notification.message}
        </Alert>
      </Snackbar>
    </MenuContextProvider>
  );
};

export default ContactPage;
