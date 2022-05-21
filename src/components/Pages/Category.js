import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Table from "../components/table/Table";
import "../assets/css/categoryname.css";
import "../assets/css/grid.css";
import { useAuth } from "../context/context";

const customerTableHead = ["ID", "Category name", "Category token", "Action"];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.category_name}</td>
    <td>{item.category_slug}</td>
    <td>
      <button type="button" className="category-active-btn">
        active
      </button>
      <button
        // onClick={updateCategory(
        //   item.id,
        //   item.category_name,
        //   item.category_slug
        // )}
        type="button"
        className="category-edit-btn"
      >
        edit
      </button>
      <button type="button" className="category-delete-btn">
        delete
      </button>
    </td>
  </tr>
);

const CategoryName = () => {
  const [categories, setcategories] = useState([]);
  const [showADD, setShowADD] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateData, setupdateData] = useState({ id: "", name: "", slug: "" });

  const history = useHistory();

  const catagorynameref = useRef();
  const catagoryslugref = useRef();

  const catagorynameUpdateref = useRef();
  const catagoryslugUpdateref = useRef();

  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id, name, slug) => {
    setShowUpdate(true);
    setupdateData({ id: id, name: name, slug: slug });
    console.log(updateData);
  };

  const handleCloseADD = () => setShowADD(false);
  const handleShowADD = () => setShowADD(true);
  const { currentUser } = useAuth();
  useEffect(() => {
    fetchCategory();
    console.log("usermail:", localStorage.getItem("adminEmail"));
  }, []);
  const fetchCategory = async () => {
    await fetch("http://127.0.0.1:8000/api/category")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setcategories(json);
      });
  };
  const AddCategory = async () => {
    await fetch("http://127.0.0.1:8000/api/category/add", {
      method: "POST",
      body: JSON.stringify({
        category_name: catagorynameref.current.value,
        category_slug: catagoryslugref.current.value,
        created_at: "2022-03-19T14:26:50.000000Z",
        status: 1,
        updated_at: "2022-03-19T14:26:50.000000Z",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      response.json();
      history.push("/categoryname");
      handleCloseADD();
      window.location.reload(false);
    });
  };

  const updateCategory = async () => {
    await fetch("http://127.0.0.1:8000/api/category/update", {
      method: "PUT",
      body: JSON.stringify({
        id: updateData.id,
        category_name: catagorynameUpdateref.current.value,
        category_slug: catagoryslugUpdateref.current.value,
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

  const deleteCategory = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/category/delete/${id}`, {
      method: "DELETE",
    });
    window.location.reload(false);
    console.log(id);
  };

  return (
    <div>
      <h2 className="page-header">Category</h2>
      {/* <!-- Button trigger modal --> */}
      <Button variant="success" onClick={handleShowADD}>
        Add category
      </Button>

      {/* <!-- Modal ADD --> */}
      <Modal show={showADD} onHide={handleCloseADD}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category name"
                ref={catagorynameref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="category slug"
                ref={catagoryslugref}
              />
            </Form.Group>

            <Button onClick={AddCategory} variant="success">
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
          <Modal.Title>Update category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Category name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category name"
                ref={catagorynameUpdateref}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category slug</Form.Label>
              <Form.Control
                type="text"
                placeholder="category slug"
                ref={catagoryslugUpdateref}
              />
            </Form.Group>

            <Button variant="success" onClick={updateCategory}>
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
                bodyData={categories}
                // renderBody={(item, index) => renderBody(item, index)}
              />
              <table>
                <tbody>
                  {categories.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.category_name}</td>
                      <td>{item.category_slug}</td>
                      <td>
                        <button type="button" className="category-active-btn">
                          active
                        </button>
                        <button
                          onClick={() =>
                            handleShowUpdate(
                              item.id,
                              item.category_name,
                              item.category_slug
                            )
                          }
                          type="button"
                          className="category-edit-btn"
                        >
                          edit
                        </button>
                        <button
                          onClick={() => deleteCategory(item.id)}
                          className="category-delete-btn"
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

export default CategoryName;
