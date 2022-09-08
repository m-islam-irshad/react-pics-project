import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Validator from "./Validator";



class App extends React.Component{

    onSearchSubmit(term)
    {
        axios.get("https://api.unsplash.com/search/photos", {
            //params hamary url last main add ho jy ga.
            params: {query: term},
            headers:{
                Authorization: "Client-ID B_Lj4nw8eL-7BoDnQ9sFChQV4HxcpcEUFCuUkF1MVVI"
            }
        }).then(response => {
            console.log(response.data.results);
        })
        // console.log(term)
    }



render(){

    return(
        <div>
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>

        {/* <div>
             <Validator/>
         </div> */}
        </div>
    );
}
}

export default App;