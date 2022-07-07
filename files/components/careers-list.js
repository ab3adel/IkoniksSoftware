
import CareerCard from './career-card'
import CareerSearch from './career-search'

let arr= [1,2,3,4]


const CareersList =()=>{



    return (
        <div className="container">
            <div className="row">

                <div className="col-12 col-lg-3 col-md-3 col-sm-3 p-3 ">
                    <CareerSearch />
                </div>
                <div className="col-12 col-lg-9 col-md-9 col-sm-9  p-2">
                    
                    {
                        arr.map((ele,index)=>
                            <CareerCard />
                        )
                    }
                    
                    
                </div>
            </div>
          
        </div>
    )
}
export default CareersList;