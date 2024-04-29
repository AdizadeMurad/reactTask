import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [datacategory, setCountdataCategory] = useState([]);
  const [search, setCountsearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCountdataCategory(data));
  }, []);


  function sortAsc(params) {
   setCountdataCategory( datacategory.toSorted((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0)))
  }
  function sortDesc(params) {
    setCountdataCategory(datacategory.toSorted((a,b) => (a[params] < b[params]) ? 1 : ((b[params] < a[params]) ? -1 : 0)))
  }


  return (
    <>
      <div className="searchInputarea">
        <input
          className="searchInput"
          type="text"
          placeholder=" Search"
          value={search}
          onChange={(e) => setCountsearch(e.target.value)}
        />
       
       <div className="btn">
      <button onClick={()=>sortAsc("price")} className="az"><i class="fa-solid fa-arrow-down-1-9"></i></button>
      <button onClick={()=>sortDesc("price")} className="za"><i class="fa-solid fa-arrow-down-9-1"></i></button>
       </div>
      </div>

      <div className="cards">
        {datacategory
          .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <div className="card-general" key={x.id}> 
              <h2>{x.title}</h2>
              <p>{x.description}</p>
              <p>Price : {x.price}</p>
            </div>
          ))}
      </div>
    </>
  );
}
export default App;
