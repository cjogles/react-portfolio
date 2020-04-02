// import React, { useState } from "react";
// import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
// import { grey, blue, green } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// const Carousel = ({ handleOpen, setHandleOpen, isMobile }) => {
//   const [index, setIndex] = useState(0);
//   return (
//     <>
//       <div className="project3">
//         <AutoRotatingCarousel
//           label="View Project"
//           open={handleOpen.open}
//           onStart={() => {
//             if (index === 0) {
//               window.location.replace("http://localhost:3000/0")
//             } else if (index === 1) {
//               window.location.replace("https://www.w3schools.com")
//             } else if (index === 2) {
//               window.location.replace("https://www.w3schools.com")
//             }
//           }}
//           onClose={() => setHandleOpen({ open: false })}
//           autoplay={false}
//           mobile={isMobile}
//           style={{ position: "absolute" }}
//           onChange={(index) => {
//             setIndex(index);
//           }}
//         >
//           <Slide
//             media={
//               <img src="images/plant.jpg" alt="screenshot of plant purpose website home page"/>
//             }
//             mediaBackgroundStyle={{ backgroundColor: grey[50], }}
//             style={{ backgroundColor: blue[900], height: '100%'}}
//             title="Plant Purpose"
//             subtitle="Worked in front end developer role with six other full stack developers creating an app that reminds users to water their plants."
//           />
//           <Slide
//             media={
//               <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
//             }
//             mediaBackgroundStyle={{ backgroundColor: grey[50], maxWidth: '100%' }}
//             style={{ backgroundColor: blue[900], maxWidth: '100%' }}
//             title="Ever wanted to be popular?"
//             subtitle="Well just mix two colors and your are good to go!"
//           />
//           <Slide
//             media={
//               <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
//             }
//             mediaBackgroundStyle={{ backgroundColor: grey[50], maxWidth: '100%' }}
//             style={{ backgroundColor: blue[900], maxWidth: '100%' }}
//             title="May the force be with you"
//             subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
//           />
//         </AutoRotatingCarousel>
//       </div>
//     </>
//   );
// };

// export default Carousel;
