import React, { useEffect, useState } from 'react'
import   './backToTop.css'

import {
    AiOutlineUp
  } from "react-icons/ai";

const BackToTop = () => {


    const [showBackToTopBtn, setShowBackToTopBtn] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setShowBackToTopBtn(true);
        } else if (scrolled <= 500) {
            setShowBackToTopBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }



    return (
        <div>
            {showBackToTopBtn && (
                


                    
<AiOutlineUp className='ToTop' onClick={scrollToTop}    /> 
            )}
        </div>
    )
}

export default BackToTop