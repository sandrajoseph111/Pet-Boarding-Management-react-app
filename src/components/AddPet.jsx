import axios from 'axios'
import React, { useState } from 'react'


const AddPet = () => {
    const [input, changeInput] = useState(
        {
            bookingID: "",
            petName: "",
            petType: "",
            breed: "",
            age: "",
            weight: "",
            vaccinationStatus: "",
            ownerName: "",
            ownerPhone: "",
            ownerEmail: "",
            checkinDate: "",
            checkoutDate: "",
            kennelNum: ""
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
         }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:2000/Pet-add", input).then(

            (response) => {
                alert("pet added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding pet", error)
                alert("failed to add pet")
            }
        )
    }
  return (
    <div>
        

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">bookingID</label>
                                <input type="text" className="form-control" name="bookingID" value={input.bookingID} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">petName</label>
                                <input type="text" className="form-control" name="petName" value={input.petName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">petType</label>
                                <input type="text" className="form-control" name="petType" value={input.petType} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">breed</label>
                                <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">age</label>
                                <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">weight</label>
                                <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">vaccinationStatus</label>
                                <input type="text" className="form-control" name="vaccinationStatus" value={input.vaccinationStatus} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">ownerName</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">ownerPhone</label>
                                <input type="text" className="form-control" name="ownerPhone" value={input.ownerPhone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">ownerEmail</label>
                                <input type="text" className="form-control" name="ownerEmail" value={input.ownerEmail} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">checkinDate</label>
                                <input type="date" className="form-control" name="checkinDate" value={input.checkinDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">checkoutDate</label>
                                <input type="date" className="form-control" name="checkoutDate" value={input.checkoutDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">kennelNum</label>
                                <input type="text" className="form-control" name="kennelNum" value={input.kennelNum} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default AddPet