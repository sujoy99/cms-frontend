import React from 'react'

const ServiceCard = ({ serviceData }) => {
    return (
        // <>
        //     {
        //         serviceData.map((curElem) => {

        //             const { name, description } = curElem

        //             return (
        //                 <>

                            

        //                 </>
        //             )

        //         })
        //     }
        // </>

        <div className="col-4 mb-2">
                                <div className="card card-body rounded shadow-lg p-4" style={{height: "250px",width: "250px"}}>
                                    <span>Name : jhon</span>
                                    <span>Description : twst</span>
                                </div>
                            </div>
    )
}

export default ServiceCard
