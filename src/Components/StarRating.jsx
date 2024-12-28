import React, { useState } from 'react'
import './StarRating.css'
import { FaStar } from 'react-icons/fa'
import useLocalRate from "./LRate";




function StarRating({ number = 5 }) {
    
    // const [rating, setrating] = useState(0)
    const [rating , setrating] = useLocalRate("Ratting" , 0)
    // const [hover, setHover] = useState(0)

    function handleClick (getCurrentIndex) {
        setrating(getCurrentIndex)
    }

    // function handleMouseEnter (getCurrentIndex) {
    //     setHover(getCurrentIndex)
    // }
    // function handleMouseLeave () {
    //     setHover(rating)
    // }
    return (
        <div className='Star-rating'>
            {
                [...Array(number)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        // className={index <= (rating || hover)  ? 'activeStars' : 'unActiveStars'}
                        className={index <= rating   ? 'activeStars' : 'unActiveStars'}
                        onClick={() => handleClick(index)}
                        // onMouseMove={() => handleMouseEnter(index) }
                        // onMouseLeave={() => handleMouseLeave(index) }
                        size={23}
                    />

                })
            }
             <h2>({rating})<span>{rating > 1 ? "Stars" : "Star" }</span></h2>
            </div>
    //   [...Array(5)].map((_,index) => {
        // }
    // )
    )
}

export default StarRating
