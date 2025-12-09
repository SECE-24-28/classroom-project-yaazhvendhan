import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'




const Testimonials = () => {

const testimonial=["Their iced Americano keeps me going all day. It’s stronger and smoother than any other coffee shop’s version! -James T","I love the personalized touch, every order comes with a handwritten note. It makes me feel valued every time -Smith ","I tried other roasters, but always come back to CoffeeBean. The beans are fresh, the flavor is unmatched, and delivery is lightning-fast.-luna"]

const [currentIndex,setCurrentIndex]=useState(0)

useEffect(()=>{
    const id=setInterval(()=>
    {
        setCurrentIndex(previousIndex=>{
            if(previousIndex===testimonial.length-1){
                return previousIndex=0
            } else{
                return previousIndex=previousIndex+1

            }
        })

    },5000)

    return ()=>clearInterval(id)
},[])


  return (
    <div className='tmls'>
        <div class='rc'></div>

        <h3>Our Customer Reviews</h3>
        <div className="rws">
            <p className="rws1">{testimonial[currentIndex]}</p>
           
        </div>
        

    </div>
  )
}

export default Testimonials
