import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import './Table.css'

  // Desarrollado por Samuel Sanabria
function Table(props){



  const Slug = props.match.params.path;
  const baseUrl =`https://api.covid19api.com/dayone/country/${Slug}'`;
  const [data, setData] = useState([]); 
  const dataArrayFail = new Array({Active: 1,
    City: "",
    CityCode: "",
    Confirmed: "NA",
    Country: "Information not found",
    CountryCode: "NA",
    Date: "NA",
    Deaths: "NA",
    ID: "NA",
    Lat: "NA",
    Lon: "NA",
    Province: "NA"})

  const getData=() => {
    axios.get(baseUrl).then(response => {

               
       if(response.data[1] == undefined) {
        setData(dataArrayFail[0]);
  
           }else{
            const dataArray = Object.values(response.data);
            setData(dataArray[1])

           }

       

    })
}   

useEffect(async()=>{
   await getData(); 
},[])


    return (
    
        <div className='container-table' >
            <div><Link className='link-table' to={{pathname: `/home`}}><KeyboardReturnIcon/></Link></div>
            <div className= 'content-table'>
            <div className='title-table'> <h1>Country {data.Country}</h1></div> 
            <div className='info-table'><p>Country Code: </p> {data.CountryCode}</div>
            <div  className='info-table'><p>Latitude: </p> {data.Lat}</div>
            <div  className='info-table'><p>Longitude: </p> {data.Lon}</div>
            <div  className='info-table'><p>Cases: </p> {data.Confirmed}</div>
            <div  className='info-table'><p>Status: </p> {data.Active}</div>
            <div  className='info-table'><p>Date: </p> {data.Date}</div>
            </div>
        </div>
    )
}

export default Table;