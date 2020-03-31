import React from 'react';
import firebase from '../firebase';


function Dropdown(props){

    function handleClick(event){
      return props.sortBy(event.target.value);
    }

return <div className = "dropdown">
        <label htmlFor="sort">Sort By :</label>

        <select onClick = {handleClick} id="sort">
        {/* <option value="random">Random</option> */}
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        {/* <option value="recent">Recent</option> */}
        </select>
    </div>    
}

export default Dropdown;