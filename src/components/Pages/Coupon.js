import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Table from "../components/table/Table";
import "../assets/css/categoryname.css";
import "../assets/css/grid.css";

const customerTableHead = ["ID", "coupon name", "coupon token", "Action"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.coupon_name}</td>
    <td>{item.coupon_slug}</td>
    <td>
      <button type="button" className="coupon-active-btn">
        active
      </button>
      <button
        // onClick={updatecoupon(
        //   item.id,
        //   item.coupon_name,
        //   item.coupon_slug
        // )}
        type="button"
        className="coupon-edit-btn"
      >
        edit
      </button>
      <button type="button" className="coupon-delete-btn">
        delete
      </button>
    </td>
  </tr>
);

const Coupon = () => {
  const [coupons, setcoupons] = useState([]);
  const [showADD, setShowADD] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setupdateData] = useState({ id: -1, name: "", slug: "" });

  const history = useHistory();

  const catagorynameref = useRef();
  const catagoryslugref = useRef();

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id, name, slug) => {
    setShowUpdate(true);
    setupdateData({ id: id, name: name, slug: slug });
    console.log(updateData);
  };

  const handleCloseADD = () => setShowADD(false);
  const handleShowADD = () => setShowADD(true);
  useEffect(() => {
    fetchcoupon();
    console.log(coupons);
  }, []);
  const fetchcoupon = async () => {
    await fetch("http://127.0.0.1:8000/api/coupon")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setcoupons(json);
      });
  };
  const Addcoupon = async () => {
    await fetch("http://127.0.0.1:8000/api/coupon/add", {
      method: "POST",
      body: JSON.stringify({
        title: catagorynameref.current.value,
        code: catagoryslugref.current.value,
        value: "420",
        status: 1,
        created_at: "2022-04-18T04:49:19.000000Z",
        updated_at: "2022-04-19T15:41:39.000000Z",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json();
      history.push("/coupon");
      handleCloseADD();
      window.location.reload(false);
    });
  };

  const updatecoupon = async () => {
    await fetch("http://127.0.0.1:8000/api/coupon/update", {
      method: "PUT",
      body: JSON.stringify({
        id: updateData.id,
        title: updateData.title,
        code: updateData.code,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletecoupon = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/coupon/delete/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
    console.log(id);
  };

  return (
    <div>
      <h2 className="page-header">coupon</h2>
      {/* <!-- Button trigger modal --> */}
      <Button variant="success" onClick={handleShowADD}>
        Add coupon
      </Button>

      {/* <!-- Modal ADD --> */}
      <Modal show={showADD} onHide={handleCloseADD}>
        <Modal.Header closeButton>
          <Modal.Title>Add coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>coupon name</Form.Label>
              <Form.Control
                type="text"
                placeholder="coupon name"
                ref={catagorynameref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>coupon slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="coupon slug"
                ref={catagoryslugref}
              />
            </Form.Group>

            <Button onClick={Addcoupon} variant="success">
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseADD}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <!-- Modal update --> */}
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>coupon name</Form.Label>
              <Form.Control
                type="text"
                placeholder="coupon name"
                ref={catagorynameref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>coupon slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="coupon slug"
                ref={catagoryslugref}
              />
            </Form.Group>

            <Button variant="success" onClick={updatecoupon}>
              Update
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="row"></div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headData={customerTableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={coupons}
                // renderBody={(item, index) => renderBody(item, index)}
              />
              <table>
                <tbody>
                  {coupons.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.code}</td>
                      <td>
                        <button type="button" className="coupon-active-btn">
                          active
                        </button>
                        <button
                          onClick={() =>
                            handleShowUpdate(item.id, item.title, item.code)
                          }
                          type="button"
                          className="coupon-edit-btn"
                        >
                          edit
                        </button>
                        <button
                          onClick={() => deletecoupon(item.id)}
                          className="coupon-delete-btn"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
