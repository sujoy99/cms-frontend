import React from 'react'
import { Link, useParams } from "react-router-dom";

import chefData from '../Chef/chefApi';
const AboutChef = () => {
  const { chefId } = useParams();
  const chef = chefData.filter(itemInArray => itemInArray.id === chefId);
  const {id, name, category} = chef[0]
  
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
                              <Link to={`/chefProfile/${id}`} className="btn btn-sm btn-primary p-3 rounded">About Chef</Link>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
          <div className="card-footer"></div>
      </div>
      
    </>
  )
}

export default AboutChef
