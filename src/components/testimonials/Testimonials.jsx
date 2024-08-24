// import React from "react";
// import "./testimonials.css";
// import Image1 from "../../assets/avatar-1.svg";
// import Image3 from "../../assets/avatar-3.svg";

// import {  Pagination } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

 
// const data = [
//     {
//       id: 1,
//       image: Image1,
//       title: "Houssem Haouali", 
//       subtitle: "Automation Engineer",
//       comment:
//         "You did an excellent job with the internship, and we are confident that as you continue on your path to success.Bravoo 👏🏼",
//     },
//     {
//       id: 2,
//       image: Image3,
//       title: "Thomas Gieles",
//       subtitle: "General Manager - OMV Tunisia",
//       comment:
//         "Dear Asma, it was nice meeting you and kudos on winning the quiz. This gives me the comfort and optimism that our Tunisian future leaders and colleagues are engaged! ",
//     },
//   ];
  

// const Testimonials = ()=> {
//     return (
//         <section className="testimonials container section">
//             <h2 className="section__title">Testimonials</h2>
//             <Swiper className="testimonials__container grid"
//             modules={[Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             loop={true}
//             grabCursor={true}
//             pagination={{clickable:true}}
//             >
//                 {data.map(({id,image,title,subtitle,comment}) => {
//                     return (
//                         <SwiperSlide className="testimonial__item" key={id}>
//                             <div className="thumb">
//                                 <img src={image} alt="" />
//                             </div>
//                             <h3 className="testimonials__title">{title}</h3>
//                             <span className="subtitle">{subtitle}</span>
//                             <div className="comment">{comment}</div>
//                         </SwiperSlide> 
//                     )
//                 })}
//             </Swiper>
//         </section>
//     )
// }
// export default Testimonials