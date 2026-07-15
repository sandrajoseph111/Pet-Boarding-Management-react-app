import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewPet = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:2000/view-Pet").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>

<table class="table">
                <thead>
                    <tr>
                        <th scope="col">bookingID</th>
                        <th scope="col">petName</th>
                        <th scope="col">petType</th>
                        <th scope="col">breed</th>
                        <th scope="col">age</th>
                        <th scope="col">weight</th>
                        <th scope="col">vaccinationStatus</th>
                        <th scope="col">ownerName</th>
                        <th scope="col">ownerPhone</th>
                        <th scope="col">ownerEmail</th>
                        <th scope="col">checkinDate</th>
                        <th scope="col">checkoutDate</th>
                        <th scope="col">kennelNum</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                    (value,index)=>{
                        return(
                            <tr>
                                <th scope="row">{value.bookingID}</th>
                                    

                                    
                                    
                                    <td>{value.petName}</td>
                                    <td>{value.petType}</td>
                                    <td>{value.breed}</td>
                                    <td>{value.age}</td>                                    
                                    <td>{value.weight}</td>                                
                                    <td>{value.vaccinationStatus}</td>                                
                                    <td>{value.ownerName}</td>                                
                                    <td>{value.ownerPhone}</td>                                
                                    <td>{value.ownerEmail}</td>                                
                                    <td>{value.checkinDate}</td>  
                                    <td>{value.checkoutDate}</td>                              
                                    <td>{value.kennelNum}</td>                              

                                </tr>
                        )
                    }
                )}
                 </tbody>
            </table>
                        
              
    </div>
  )
}

export default ViewPet