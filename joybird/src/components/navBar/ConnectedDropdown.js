import React, { useState } from 'react';
import { ConnectedItems } from './ConnectedItems.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';


function ConnectedDropdown () {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
         <ul onClick={handleClick} 
         className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {ConnectedItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() =>
                            setClick(false)}>
                              {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>


        </>
    )

}



export default ConnectedDropdown;