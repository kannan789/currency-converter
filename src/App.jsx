import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [from, setFrom]=useState(0);
  const [to,setTo]=useState(0);
  const [fromCurrency,setFromCurrency]=useState("USD");
  const [toCurrency,setToCurrency]=useState("INR");
  const [amount,setAmount]=useState(95.31);

  const handleConversion = () => 
  {
        let conversion= amount * from;
        setTo(conversion);
  }

//   useEffect( ()=>{
//  const fetchData= async () => {
//   try{
//     let response= await fetch("https://api.api-ninjas.com/v1/convertcurrency?have=USD&want=INR&amount=1"
//     ,
//     {
//       method: 'GET',
//       headers: {
//         'X-API-Key': 'l4JhZe7nuIlRcCjkjWzOeOMgJzYdQ4SZBHoFWCSM'
//       }
//     }
//     );
//     console.log(response);
//     let data= await response.json();
//     console.log("Data:",data);
//     let calc=Number(data.new_amount);
//     // setAmount(calc);
//   }
//   catch(error)
// {
//   console.log("Error in fetching data:", error);
// }
// }

//   fetchData();
//   }
  
//   ,[]);

  return (
    <>
      <h2>Currency Converter</h2>
      <div style={{display: "flex", flexDirection:"column", gap:"10px", backgroundColor:"#CD9AE3", width:"500px",margin:"20px auto",padding: "40px", borderRadius:"5px"}}>
      <label style={{marginLeft:"-275px"}}>From</label>
      <div style={{display: "flex",margin:" 0 auto", gap:"100px"}}>
          
           <input style={{padding:"5px 5px",borderRadius:"5px"}} type="number" value={from} onChange={(e)=> setFrom(e.target.value)}></input>
           <select>
              <option>usd</option>
           </select>
      </div>
      <div>
        <button style={{width:"150px", backgroundColor:"#F04FD2",color:"#FFFFFF", padding:"5px 10px", borderRadius:"5px", border:"none"}} onClick={handleConversion}>Convert</button>
      </div>
      <label style={{marginLeft:"-300px"}}>To</label>
      <div style={{display: "flex",margin:" 0 auto", gap:"100px"}}>
           
           <input style={{padding:"5px 5px",borderRadius:"5px"}} type="number" value={to}></input>
           <select>
              <option>inr</option>
           </select>
      </div>
      </div>

    </>
     
  )
}

export default App
