import React, { useState } from 'react';
import { KalkulatorItems } from './KalkulatorItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function DropdownKalkulator() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <div className='back'>
        {KalkulatorItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        </div>
      </ul>
    </>
  );
}

export default DropdownKalkulator;