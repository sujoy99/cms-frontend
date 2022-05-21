import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Table from "../components/table/Table";
import "../assets/css/categoryname.css";
import "../assets/css/grid.css";

const customerTableHead = ["ID", "Item name", "Item token", "Action"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.Item_name}</td>
    <td>{item.Item_slug}</td>
    <td>
      <button type="button" className="Item-active-btn">
        active
      </button>
      <button
        // onClick={updateItem(
        //   item.id,
        //   item.Item_name,
        //   item.Item_slug
        // )}
        type="button"
        className="Item-edit-btn"
      >
        edit
      </button>
      <button type="button" className="Item-delete-btn">
        delete
      </button>
    </td>
  </tr>
);

const Items = () => {
  const [Items, setItems] = useState([]);
  const [showADD, setShowADD] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setupdateData] = useState({ id: "", name: "", slug: "" });

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
    fetchItem();
    console.log(Items);
  }, []);
  const fetchItem = async () => {
    await fetch("http://127.0.0.1:8000/api/item")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  };
  const AddItem = async () => {
    await fetch("http://127.0.0.1:8000/api/item/add", {
      method: "POST",
      body: JSON.stringify({
        item_name: catagorynameref.current.value,
        item_slug: catagoryslugref.current.value,
        created_at: "2022-04-18T23:20:19.000000Z",
        updated_at: "2022-04-19T15:38:58.000000Z",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json();
      history.push("/item");
      handleCloseADD();
      window.location.reload(false);
    });
  };

  const updateItem = async () => {
    await fetch("http://127.0.0.1:8000/api/item/update", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        item_name: "new course 34",
        item_slug: "new_34",
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

  const deleteItem = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/item/delete/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
    console.log(id);
  };

  return (
    <div>
      <h2 className="page-header">Item</h2>
      {/* <!-- Button trigger modal --> */}
      <Button variant="success" onClick={handleShowADD}>
        Add Item
      </Button>

      {/* <!-- Modal ADD --> */}
      <Modal show={showADD} onHide={handleCloseADD}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item name"
                ref={catagorynameref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Item slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item slug"
                ref={catagoryslugref}
              />
            </Form.Group>

            <Button onClick={AddItem} variant="success">
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
          <Modal.Title>Update Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item name"
                ref={catagorynameref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Item slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item slug"
                ref={catagoryslugref}
              />
            </Form.Group>

            <Button variant="success" onClick={updateItem}>
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
                bodyData={Items}
                // renderBody={(item, index) => renderBody(item, index)}
              />
              <table>
                <tbody>
                  {Items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.item_name}</td>
                      <td>{item.item_slug}</td>
                      <td>
                        <button type="button" className="Item-active-btn">
                          active
                        </button>
                        <button
                          onClick={() =>
                            handleShowUpdate(
                              item.id,
                              item.item_name,
                              item.item_slug
                            )
                          }
                          type="button"
                          className="Item-edit-btn"
                        >
                          edit
                        </button>
                        <button
                          onClick={() => deleteItem(item.id)}
                          className="Item-delete-btn"
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

export default Items;
