import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const [values, setValues] = useState({
        startDate: "",
        endDate: "",
        schedule: "",
        foodType: ""
      })
      const [errors, setErrors] = useState({})
      const [dataIsCorrect, setDataIsCorrect] = useState(false)

      let navigate = useNavigate();

      const handleChange = (e) => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        })
        console.log(values)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        // setErrors(loginValidation(values))
        console.log(errors);
        setDataIsCorrect(true)
        console.log("no error---submited")
      }

      useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
          // ---> api call & take neccessary action here
          console.log("submited value", values);
          navigate(`/filterChef`);
        }
      }, [errors, dataIsCorrect, values, navigate])

    return (
        <>
            <section className="container">
                <div className="row">
                    <h3 className="text-center section p-3 ">Booking Process</h3>
                    <div className="p-3">
                        <ul className="fs-2">
                            <li>First select the time schedule.</li>
                            <li>First select the time schedule.</li>
                            <li>First select the time schedule.</li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <h3 className="text-center section p-3 ">Make your schedule</h3>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <form action="" className=" fs-3 p-3">
                                <h3 className="bg-primary p-3">Date</h3>
                                <p>Starting Date :</p>
                                <div className="col-4">
                                    <input type="date" className="form-control col-4" name="startDate" id="startDate" onChange={handleChange} />
                                </div>
                                <input type="checkbox" name="more" id="" />If you want more than one day
                                <div className="col-4">
                                    <p>Ending Date :</p>
                                    <input type="date" className="form-control" name="endDate" id="endDate" onChange={handleChange} />
                                </div>

                                <h3 className="bg-primary p-3">Chef Schedule</h3>
                                <input type="checkbox" name="schedule" id="morning" value="morning" onChange={handleChange} />Morning
                                <input type="checkbox" name="schedule" id="evening" value="evening" onChange={handleChange}/>Evening
                                <input type="checkbox" name="schedule" id="night" value="night" onChange={handleChange} />Night

                                <h3 className="bg-primary p-3">Food Type</h3>
                                <div className="col-4">
                                    <select className="form-select" name="foodType" onChange={handleChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                <div className="row col-4 mx-auto">
                                    <button onClick={handleSubmit}>Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Booking
