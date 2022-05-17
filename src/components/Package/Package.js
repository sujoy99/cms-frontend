import React from 'react'
import packageData from './packageApi';
import PackageCard from './PackageCard'

const Package = () => {
    return (
        <>
            <h3 className="section p-3">Latest Package</h3>
            <div className="container-fluid">
                <div className="row">
                    {/* playercard starts  */}
                    <PackageCard packageData={packageData} />
                </div>
            </div>

            <h3 className="section p-3">Maximum Purchase Package</h3>
            <div className="container-fluid">
                <div className="row">
                    {/* playercard starts  */}
                    <PackageCard packageData={packageData} />
                </div>
            </div>

            <h3 className="section p-3">All Package</h3>
            <div className="container-fluid">
                <div className="row">
                    {/* playercard starts  */}
                    <PackageCard packageData={packageData} />
                </div>
            </div>
        </>
    )
}

export default Package
