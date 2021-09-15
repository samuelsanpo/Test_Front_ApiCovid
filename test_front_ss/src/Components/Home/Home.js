import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import './Home.css'

const baseUrl = 'https://api.covid19api.com/countries';

  // Desarrollado por Samuel Sanabria
function Home() {


console.log("Desarollado por Samuel Sanabria");

    function SearchingTerm(term){
        return function(x){
            return x.Country.toLowerCase().includes(term) || !term;
        }
    }

    const [data, setData] = useState([]); 
    const [term, setTerm] = useState(""); 
    
    const getData=() => {
        axios.get(baseUrl).then(response => {
           const dataArray = Object.values(response.data);
           setData(dataArray);
    
        })
    }   
    
    useEffect(async()=>{
       await getData(); 
    },[])

    
      return (
        <div className="container">
          <div className='title'>
            <h1>Covid indicators</h1>
            <input className='input' name="term" onChange={e => setTerm(e.target.value)} placeholder=" Buscar... "></input>
          </div>

          {data.filter(SearchingTerm(term)).map(dataR => (
           <Card
           Country={dataR.Country}
           Slug={dataR.Slug}
           ISO2= {dataR.ISO2}/>
                ))}
        </div>
      );


      
    }

   
    
    export default Home;
    