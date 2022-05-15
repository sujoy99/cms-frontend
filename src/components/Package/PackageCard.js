import React from 'react'

const PackageCard = ({ packageData }) => {
    return (
        <>
            {
                packageData.map((curElem) => {

                    const { name, description } = curElem

                    return (
                        <>

                            <div className="col-4 mb-2" key={name}>
                                <div className="card card-body rounded shadow-lg p-4" style={{height: "200px"}}>
                                    <span>Name : {name}</span>
                                    <span>Description : {description}</span>
                                </div>
                            </div>

                        </>
                    )

                })
            }
        </>
    )
}

export default PackageCard
