// /* eslint-disable react/jsx-no-target-blank */
// import React from 'react'
// import './portfolio.css'

// import IMG1 from "../../assets/images/dp.jpeg"
// import IMG2 from "../../assets/images/dp.jpeg"
// import IMG3 from "../../assets/images/dp.jpeg"
// import IMG4 from "../../assets/images/dp.jpeg"
// import IMG5 from "../../assets/images/dp.jpeg"
// import IMG6 from "../../assets/images/dp.jpeg"


// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: "Oba Farmz Price Flier Design",
//     demo: "live-link"
//   },
//   {
//     id: 2,
//     image: IMG2,
//     title: "Dreams Clues Product Flier Design",
//     demo: "live-link"
//   },
//   {
//     id: 3,
//     image: IMG5,
//     title: "Ishanbi Currency Exchange Greeting Flier",
//     demo: "live-link"
//   },
//   {
//     id: 4,
//     image: IMG3,
//     title: "Sevenskies Exam registeration Portal",
//     github: "https://github.com/tsucess/examwebsite",
//     demo: "https://sevenskiesportal.edu.my/examcenter/"
//   },
//   {
//     id: 5,
//     image: IMG4,
//     title: "Edubbey Online Learning System",
//     github: "https://github.com/tsucess/courses-edubbey.com",
//     demo: "https://courses.edubbey.com/"
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: "Wizick Document Automation Software",
//     github: "https://github.com/tsucess/wizick",
//     demo: "https://tsucess.github.io/wizick/"
//   },
// ]



// const Portfolio = () => {
//   return (
//     <section id="portfolio">
//       <h5>My Recent Work</h5>
//       <h2>Portfolio</h2>

//       <div className="container portfolio__container">
//         {
//           data.map(({ id, image, title, github, demo }) => {
//             return (
//               <article key={id} className="portfolio__item">
//                 <div className="portfolio__item-image">
//                   <img src={image} alt={title} />
//                 </div>
//                 <h3>{title}</h3>
//                 <div className="portfolio__item-cta">
//                   <a href={github} target="_blank" className="btn">GitHub</a>
//                   <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>
//                 </div>
//               </article>
//             )
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Portfolio