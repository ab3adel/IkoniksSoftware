import React from 'react'
import {useRouter} from 'next/router'
import FeatherIcon from 'feather-icons-react'
let arr = new Array(30)
arr.fill(null)
let text = `
    Exercitation sint exercitation anim irure ullamco 
    do irure sit excepteur tempor magna. Pariatur ut do 
    eiusmod dolor in anim do tempor dolor occaecat ea. 
    Occaecat cillum reprehenderit sit ipsum velit dolor 
    commodo officia esse eiusmod. Velit magna duis nulla 
    adipisicing esse. Laboris minim velit dolor consectetur.
`
const CareerCard =() =>{
const router = useRouter()


    return (
      <div className= "row mb-2  m-sm-2 d-flex justify-content-center" onClick={()=>router.push('/career-details/1')}>
        <div className="col-12 col-lg-11 col-md-11 col-sm-11 ">
          <div className=" card career-card">
            <div className="card-body career-card-body">
                <div className="card-title career-card-title">
                   <div className='row d-flex justify-content-center career-card-mainTitle '>

                      Front End Developer
                   </div>
                   <div className="row align-item-start">
                   

                    <div className="col-sm-2 col-6 col-md-2 col-lg-2 align-item-center d-flex justify-content-evenly">
                      Remote
                      <FeatherIcon icon={'map-pin'} />
                    </div>
                    <div className="col-sm-2 col-6 col-md-2 col-lg-2 align-item-center d-flex justify-content-evenly">
                      Full Time
                      <FeatherIcon icon={'briefcase'} />
                    </div>
                    
                  </div>
               
                </div>

                <p className="card-text">
                   <div className="row align-itmes-start">
                       <div className='col-12 col-sm-4 col-md-4 col-lg-4 display-5 font-weight-bold pl-2'>

                            Full Description:
                       </div>
                   </div>
                   <div className="row justify-content-end">
                     <div className='col-12 col-sm-12 col-md-12 col-lg-12 p-3 position-relative'>
                        {
                          text.slice(25)
                        }

                 
                        <span className="hideText">
                        </span>
                     </div>

                   </div>
                </p>
                {
                    arr.map((ele,index)=>
                       (<div className="bubbles" 
                         style={{left:`${(index * 3)}%`}} />)
                    )
                  }
                  
            </div>
          
          </div>

        </div>
      </div>
    )
}
export default CareerCard;