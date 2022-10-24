import React, {useState} from "react";
import { Link } from "react-router-dom";
import './AddButton.css';
import AddBook from '../../icons/add.svg';

const AddButton = () => {

   
    return(
        <>
            <Link to="/search"><button className='addButton'><img src={AddBook} alt="add"/></button></Link>
            
        </>
        
    )
}

export default AddButton;