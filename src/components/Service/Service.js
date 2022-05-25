import React from 'react'
// import serviceData from './ServiceApi';
import ServiceCard from './ServiceCard'

const Service = () => {
    return (
        <>
            <div><br></br></div>
            <h3 className="section p-3" >We serve</h3>
            <div className="container-fluid">
                <div className="row">
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5 mt-5">
                    {/* playercard starts  */}
                    <ServiceCard  />
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5 mt-5">
                    {/* playercard starts  */}
                    <ServiceCard  />
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5 mt-5">
                    {/* playercard starts  */}
                    <ServiceCard  />
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 mb-5 mt-5">
                    {/* playercard starts  */}
                    <ServiceCard  />
                </div>
            </div>
            </div>

            
        </>
    )
}

export default Service
