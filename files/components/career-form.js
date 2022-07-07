import React from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const CareerForm =({open,setOpen}) =>{
    const [cv,setCV]=React.useState(null)
const handleCv=()=>{
    let cv= document.querySelector('#cv')
    cv.click()
   
}
const checkFile =(e)=>{
   
if (e.target.files.length>0){
    setCV(e.target.files[0].name)

}

}

    return (
        <div className={open?'drawer-bottom showDrawer':'drawer-bottom invisible'} >
            <div className='row form-close-btn-container' >
                <button className='btn btn-primary form-career-close-btn' onClick={()=>setOpen(false)}>
                <i class="fa fa-window-close" aria-hidden="true"></i>
                </button>
            </div>
        <div className='container form-container'>
            <div className='row'>

                <form>
                <div className='form-row'>


                <div className='form-group col-12 col-sm-6 form-career-input'>
                    <input className="form-control" placeholder='First Name'/>
                
                </div>
                <div className='form-group col-12 col-sm-6 form-career-input'>
                    <input className="form-control" placeholder='Last Name'/>
                
                </div>
                </div>
                <div className='form-row'>


                    <div className='form-group col-12 col-sm-6 form-career-input'>
                        <input className="form-control" placeholder='Email'/>
                    
                    </div>
                    <div className='form-group col-12 col-sm-6 form-career-input'>
                        <PhoneInput placeholder="Phone Number" international />
                    
                    </div>
                    
                </div>
                <div className='form-row'>
                            <div className='form-group col-1 col-sm-1 form-career-input'>
                                <input className="form-control invisible" placeholder='CV,Attachments' 
                                id="cv" type="file" onChange={checkFile}/>
                            
                            </div>
                            <div className="form-group col-11 col-sm-5 form-career-input">
                                <div className={cv?"file":"cv"} onClick={handleCv}>
                                       { cv?cv:
                                       ' Attachmetns Files ,CV'
                                        }
                                </div>
                            </div>
                </div>
                <div className=' form-row'>
                    <div className='form-group col-12 col-sm-12'>
                        <textarea className="form-control coverLetter"
                            placeholder='Cover Letter'
                             rows={8} />
                    </div>
                </div>
               
            
                </form>

            </div>
            <div className="row d-flex justify-content-center ">
                <div className="col-6 col-6 form-career-submit-btn">
                    <button className='btn btn-primary fon-weight-bold'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
        </div> 
    )
}
export default CareerForm;