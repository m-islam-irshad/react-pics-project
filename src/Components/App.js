import React from "react";
import SearchBar from "./SearchBar";
import Validator from "./Validator";



class App extends React.Component{

    onSearchSubmit(term)
    {
        console.log(term)
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