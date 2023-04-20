import React, { useEffect, useState,  } from 'react'
import "./App.css"
import { useSearchParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
const Home = () => {
    const [ data, setdata ] = useState( [] )
    const [ query, setQuery ] = useState( "" );
  const [params, setParams ] = useSearchParams()
  let name = params.get("q"); //
    useEffect(() => {
      name &&  setQuery(name)   
       const getData = setTimeout(() => {
        query  &&   fetch(
                `https://dummyjson.com/products/search?q=${query}`)
                            .then((res) => res.json())
                            .then((json) => {
                                setdata(json.products)
                             query &&  setParams({q:query})
                                });
             }, 2000)
        return () => clearTimeout(getData)
            
    }, [query])

  useEffect(()=>{
  !name  &&  fetch(
        `https://dummyjson.com/products`)
                    .then((res) => res.json())
                    .then((json) => {
                        setdata(json.products)
                        });
  },[])
    return (
        <div>

            <div style={ { width: "800px", margin: "auto" } }>
                <h1>Search</h1>
                <input
                    onChange={ (e)=>setQuery(e.target.value) }
                    type="text"
                    placeholder={name}
                    value={name}
                />
                <h1 style={ { width: "300", margin: "auto", } }>Product</h1>
    
                { !data.length?              <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:
                    data.map( ( item ) => (
                        <div style={ { background: "pink", width: "900px", display: "flex" } }>
                            <div style={ { background: "skyblue", width: "250px", padding: "10px", margin: "10px" } }>

                                <img src={ item.images[ 0 ] } width="200px" height="200px" />
                                <h5> Brand:{ item.brand }</h5>
                                <p style={ { width: "150px" } }>{ item.description }</p>
                                <h4> price:${ item.price }</h4>
                            </div>

                        </div>
                    ) )
                }
            </div>






        </div>
    )
}

export default Home