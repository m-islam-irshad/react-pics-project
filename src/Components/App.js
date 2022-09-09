import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import Validator from "./Validator";
import ImageList from "./ImageList";
import List from "./List";

class App extends React.Component{

    state = { images: [] }; 

    onSearchSubmit = async (term) =>
    {
        const response = await unsplash.get("/search/photos", {
            //params hamary url last main add ho jy ga.
            params: {query: term},
            
        })
        // console.log(term)
        // console.log(response.data.results)
        this.setState({images: response.data.results})
    }



render(){

    return(
        <div>
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
        </div>

       
        {/* <Validator/> */} 
        {/* <List/> */}
         <ImageList images={this.state.images}/>
        </div>
    );
}
}

export default App;