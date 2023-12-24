import React from 'react'
import './testimonial.css'


import AVA1 from "../../assets/images/dreamsclues.jpeg"
import AVA2 from "../../assets/images/wizick.jpeg"
import AVA3 from "../../assets/images/sevenskies.jpeg"
import AVA4 from "../../assets/images/edubbey-icon.png"


// core version + pagination modules:
import {Pagination} from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';


// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: 1,
    image: AVA1,
    name: "Dreams Clues Gifting Company",
    review: " He's a very reliable person to work with, and very Intelligent and resourceful"
  },
  {
    id: 2,
    image: AVA2,
    name: "Wizick Legal Company",
    review: "He's very considerate, and very prompt with response and delivers earlier than expected"
  },
  {
    id: 3,
    image: AVA3,
    name: "Sevenskies International",
    review: "Wow, a personality that meets and exceeded our expectations, little nervous but don't judge a book by it's cover, He's brilliant"
  },
  {
    id: 4,
    image: AVA4,
    name: "Edubbey Dynamic Solutions Ltd.",
    review: "He's a genius with innate ability, tell him what you want and he will deliver, Highly resourceful and recommended"
  }

]


const Testimonial = () => {
  return (
	<section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {
          data.map(({id, image, name, review}) => {
              return (
                    <SwiperSlide key={id} className="testimonial">
                      <div className="client__avatar">
                        <img src={image} alt={name} />
                      </div>
                      <h5>{name}</h5>
                      <small className="client__review">{review}</small>
                    </SwiperSlide> 
              )
          })
        }   
    </Swiper>
  </section>
  )
}
// const Testimonial = () => {
//   return (
// 	<section id="testimonials">
//     <h5>Review from clients</h5>
//     <h2>Testimonials</h2>

//     <div className="container testimonials__container">
//       <article className="testimonial">
//         <div className="client__avatar">
//           <img src={AVA1} alt="avatar one" />
//         </div>
//         <h5>Muhammad Sabahuzzaman</h5>
//         <small className="client__review">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Similique placeat quas, debitis distinctio natus at itaque, 
//             quae omnis, doloribus nihil eaque soluta! Perspiciatis ipsam 
//             sit repellat voluptatem officia. Consequuntur, aut!
//         </small>
//       </article>
//       <article className="testimonial">
//         <div className="client__avatar">
//           <img src={AVA1} alt="avatar one" />
//         </div>
//         <h5>Muhammad Sabahuzzaman</h5>
//         <small className="client__review">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Similique placeat quas, debitis distinctio natus at itaque, 
//             quae omnis, doloribus nihil eaque soluta! Perspiciatis ipsam 
//             sit repellat voluptatem officia. Consequuntur, aut!
//         </small>
//       </article>
//       <article className="testimonial">
//         <div className="client__avatar">
//           <img src={AVA1} alt="avatar one" />
//         </div>
//         <h5>Muhammad Sabahuzzaman</h5>
//         <small className="client__review">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Similique placeat quas, debitis distinctio natus at itaque, 
//             quae omnis, doloribus nihil eaque soluta! Perspiciatis ipsam 
//             sit repellat voluptatem officia. Consequuntur, aut!
//         </small>
//       </article>
//       <article className="testimonial">
//         <div className="client__avatar">
//           <img src={AVA1} alt="avatar one" />
//         </div>
//         <h5>Muhammad Sabahuzzaman</h5>
//         <small className="client__review">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
//             Similique placeat quas, debitis distinctio natus at itaque, 
//             quae omnis, doloribus nihil eaque soluta! Perspiciatis ipsam 
//             sit repellat voluptatem officia. Consequuntur, aut!
//         </small>
//       </article>
//     </div>
//   </section>
//   )
// }

export default Testimonial