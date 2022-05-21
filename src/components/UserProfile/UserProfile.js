import React from 'react'
import { Link, useParams } from "react-router-dom";

import UserData from './userApi';

const UserProfile = () => {
    const { userId } = useParams();
    const user = UserData.filter(itemInArray => itemInArray.id === userId);
    const { id, name, category } =user[0]

    return (
        <>
            <section>
                <h3 className="text-center section p-3">User Profile</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-3 border border-dark">
                            <div className="row col-12">
                                <img src="../images/logo512.png" alt="" className="img-fluid rounded mx-auto" height="250px" width="250px"></img>
                            </div>
                            <div className="row col-12 d-flex justify-content-center align-items-center">
                                <div>
                                    <h3>{name}</h3>
                                    <h5>{category}</h5>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>

                            </div>
                            <div className="row col-12">
                                <h3>ACCOUNT</h3>
                                <ul className="p-4">
                                    <li>Personal Information</li>
                                    <li>Education</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-9">
                            <h3 className="text-center section p-3">Personal Information</h3>
                            <div>
                                <h3 className="d-inline">Name :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Email :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Phone :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Date Of Birth :</h3>
                                <span>{name}</span>
                            </div>

                            <h3 className="text-center section p-3">Education</h3>
                            <div>
                                <h3 className="d-inline">Name :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Email :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Phone :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Date Of Birth :</h3>
                                <span>{name}</span>
                            </div>

                            <h3 className="text-center section p-3">Experince</h3>
                            <div>
                                <h3 className="d-inline">Name :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Email :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Phone :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Date Of Birth :</h3>
                                <span>{name}</span>
                            </div>

                            <h3 className="text-center section p-3">Overview</h3>
                            <div>
                                <h3 className="d-inline">Name :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Email :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Phone :</h3>
                                <span>{name}</span>
                            </div>
                            <div>
                                <h3 className="d-inline">Date Of Birth :</h3>
                                <span>{name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserProfile
