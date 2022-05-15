import React, { useState } from 'react'

import "./chef.css"

import chefData from './chefApi';
import ChefCard from './ChefCard'
const Chef = () => {

    return (
        <>
            <section>
                <h3 className="text-center section p-3">Chef List</h3>
                <div className="row">
                    <div className="col-12 ">
                        <a className="btn btn-secondary btn-lg float-end" href="/booking"><h3>Booking</h3></a>
                    </div>
                </div>
                <div className="container">
                    <ChefCard chefData={chefData} />
                </div>
            </section>
        </>
    )
}

export default Chef
