import React from 'react'

const Booking = () => {
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
                                    <input type="date" className="form-control col-4" name="startDate" id="" />
                                </div>
                                <input type="checkbox" name="more" id="" />If you want more than one day
                                <div className="col-4">
                                    <p>Ending Date :</p>
                                    <input type="date" className="form-control" name="endDate" id="" />
                                </div>

                                <h3 className="bg-primary p-3">Chef Schedule</h3>
                                <input type="checkbox" name="morning" id="morning" />Morning
                                <input type="checkbox" name="evening" id="evening" />Evening
                                <input type="checkbox" name="night" id="night" />Night

                                <h3 className="bg-primary p-3">Food Type</h3>
                                <div className="col-4">
                                    <select class="form-select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="row col-4 mx-auto">
                                    <button>Submit</button>
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
