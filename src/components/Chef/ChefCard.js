import React from 'react'
import { Link} from "react-router-dom";

const ChefCard = ({ chefData }) => {
    return (
        <>
            {
                chefData.map((curElem) => {

                    const { id, name, category } = curElem

                    return (
                        <>
                            <div className="card">
                                <div className="card-header"></div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">
                                            <img src="./images/logo512.png" alt="" className="img-fluid rounded" height="50px" width="50px"></img>
                                        </div>
                                        <div className="col-11">
                                            <div className="row">
                                                <div className="col-10">
                                                    <h4>{name}</h4>
                                                    <h5>{category}</h5>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star checked"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                </div>
                                                <div className="col-2">
                                                    {/* <a className="btn btn-sm btn-primary p-3 rounded" href="/aboutChef/1">Choose</a> */}
                                                    <Link to={`/aboutChef/${id}`} className="btn btn-sm btn-primary p-3 rounded">Choose</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="card-footer"></div>
                            </div>

                        </>
                    )

                })
            }
        </>
    )
}

export default ChefCard
