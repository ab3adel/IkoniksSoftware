import React from 'react'
import FeatherIcon from 'feather-icons-react'


const CareerDetails =({setOpen})=>{


    return (

                    <div className="card career-details-container p-2 mb-2 mt-2">
                      <div className="stickyPosition-btn">
                        <button className='btn btn-primary' onClick={()=>setOpen(true)}>
                            Apply now
                        </button>
                      </div>
                        <div className='card-body career-details-body  pt-0'>
                            <div className='card-title career-details-title '>
                               <div className="row career-details-mainTitle font-weight-bold pb-1">
                                  Front End Developer
                               </div>
                               <div className="row">
                                <div className="col-4 col-sm-4 d-flex justify-content-evenly">
                                    Full Time 
                                    <FeatherIcon icon={"briefcase"}/>
                                </div>
                                <div className='col-4 col-sm-4 d-flex justify-content-evenly'>
                                    Remote
                                    <FeatherIcon icon="map-pin"/>
                                </div>
                                <div  className='col-4 col-sm-4'>
                                    Ikoniks

                                </div>
                               </div>
                              
                            </div>
                            <div className="card-text career-details-content">
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                        Qualifications:
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                        Title :
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                        Title :
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                       Title :
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                       Title :
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                                <div className='row'>
                            
                                    <div className='col-4 col-sm-4 font-weight-bold'>
                                        Title :
                                    </div>
                                    <div className='col-12 col-sm-12'>
                                        Eiusmod ea adipisicing reprehenderit proident velit aliqua 
                                        cupidatat voluptate cupidatat consectetur. Nulla dolore nisi 
                                        veniam voluptate magna cupidatat et et. Occaecat Lorem laborum 
                                        sint consectetur. Tempor non ea nulla proident proident 
                                        reprehenderit sunt minim consectetur excepteur aliqua et sit.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
        
    )

}
export default  CareerDetails;