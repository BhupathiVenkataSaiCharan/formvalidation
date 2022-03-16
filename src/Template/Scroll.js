import React, {useState} from 'react';
// import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';
import "./scroll.css";

const Scroll = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 100){
	setVisible(true)
	}
	else if (scrolled <= 100){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <>
        <button className={visible ? "buton2" : 'buton1'} onClick={scrollToTop}
            style={{position: "fixed", 
   width:" 70px",
   right:"20px",
   bottom: "40px",
   height: "70px",
   cursor: "pointer",
   borderRadius:"50%",
   color: "green"}}>To top</button>
    </>
);
}

export default Scroll;
