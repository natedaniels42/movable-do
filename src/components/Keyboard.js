import React, { useState } from 'react';

import '../App.css';

const Keyboard = (props) => {    
    const { handleKeyClick, current } = props;
    return (
        <div id="keyboard">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="600.000000pt" height="278.000000pt" viewBox="0 0 600.000000 378.000000"
            preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,378.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                    <path onClick={handleKeyClick} className="key" id="c-key" d="M 10 20 L 10 2020 L 340 2020 L 340 1020 L 460 1020 L 460 20 L 10 20"></path>
                    <path onClick={handleKeyClick} className="black key" id="d-flat-key" d="M 340 1020 L 580 1020 L 580 2020 L 340 2020 L 340 1020"></path>
                    <path onClick={handleKeyClick} className="key" id="d-key" d="M 460 20 L 910 20 L 910 1020 L 790 1020 L 790 2020 L 580 2020 L 580 1020 L 460 1020 L 460 20"></path>
                    <path onClick={handleKeyClick} className="black key" id="e-flat-key" d="M 790 1020 L 1030 1020 L 1030 2020 L 790 2020 L 790 1020"></path>
                    <path onClick={handleKeyClick} className="key" id="e-key" d="M 910 20 L 1360 20 L 1360 2020 L 1030 2020 L 1030 1020 L 910 1020 L 910 20"></path>
                    <path onClick={handleKeyClick} className="key" id="f-key" d="M 1360 20 L 1810 20 L 1810 1020 L 1690 1020 L 1690 2020 L 1360 2020 L 1360 20"></path> 
                    <path onClick={handleKeyClick} className="black key" id="g-flat-key" d="M 1690 1020 L 1930 1020 L 1930 2020 L 1690 2020 L 1690 1020"></path>
                    <path onClick={handleKeyClick} className="key" id="g-key" d="M 1810 20 L 2260 20 L 2260 1020 L 2140 1020 L 2140 2020 L 1930 2020 L 1930 1020 L 1810 1020 L 1810 20"></path>
                    <path onClick={handleKeyClick} className="black key" id="a-flat-key" d="M 2140 1020 L 2380 1020 L 2380 2020 L 2140 2020 L 2140 1020"></path>
                    <path onClick={handleKeyClick} className="key" id="a-key" d="M 2260 20 L 2710 20 L 2710 1020 L 2590 1020 L 2590 2020 L 2380 2020 L 2380 1020 L 2260 1020 L 2260 20"></path>
                    <path onClick={handleKeyClick} className="black key" id="b-flat-key" d="M 2590 1020 L 2830 1020 L 2830 2020 L 2590 2020 L 2590 1020"></path>
                    <path onClick={handleKeyClick} className="key" id="b-key" d="M 2710 20 L 3160 20 L 3160 2020 L 2830 2020 L 2830 1020 L 2710 1020 L 2710 20"></path>
                </g>
            </svg>
            <p id="note">{current.name}</p>
        </div>
    )
}

export default Keyboard;