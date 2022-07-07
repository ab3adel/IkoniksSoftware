import React from 'react'



export const CareerSearch=()=>{



    return (
        <div className ="col-12 col-sm-12 p-0  stickyPosition">

            <div className ="card career-search-container">
                <div className="card-title career-search-title">
                    Enter your keyword search:
                </div>
                <div className="card-body career-search-body">
                    <div className="row">
                       <div className='col-8 col-sm-8'>

                            <input type="text" placeholder='Search' className="form-control career-search-input"/>
                       </div>
                       <div className='col-4 col-sm-4'>

                            <button className="btn career-search-btn " > Search</button>
                       </div>
                      
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default CareerSearch;