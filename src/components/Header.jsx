import Nav from "./Nav";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
const Header = () => {

  const textRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  // The texts to swap
  const texts = ["THE WORLD CHANGER", "EXECUTIVE DIRECTOR, U-RECYCLE INITIATIVE, AFRICA.","COACH,MULTIPY YOUR IMPAQT ACADEMY."];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.5, 
      y: 0// Fade in duration
    })
    .to(textRef.current, {
      opacity: 1, 
      duration: 5, // Hold the text for 10 seconds
    })
    .to(textRef.current, {
      opacity: 0,
    y:-20, // Move text up while fading out
      duration: 0.5,
      onComplete: () => setIndex((prev) => (prev + 1) % texts.length), // Change text
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0, // Move back down and fade in
      duration: 0.5,
    });

    return () => tl.kill();
  }, [index]);

//   return (
    
//   );


    return ( 
        < >

        <Nav/>
        <div className="bg-black/90 py-40 px-8 ">

            <div className=" flex items-center ">
                <div className=" text-projectwhite">
                <h1 className="text-5xl mb-4">Oluwaseyi Jesuton</h1>
                <p className="text-2xl " ref={textRef}> {texts[index]}</p>
            
                <button className="bg-projectteal p-4 rounded-md text-white mt-4"> WORK WITH OLUWASEYI </button>
                </div>
            </div>

        </div>
        <div className="py-8 bg-projectteal">

        </div>
        </>
     );
}
//  import { useEffect, useRef } from "react";
// import { gsap } from "gsap";


// const AnimatedBoxes = () => {
//   const boxesRef = useRef([]);



//   return (
//     <div style={{ padding: "50px", background: "#f0f0f0" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Scroll Down to See Animations</h2>
//       {[...Array(5)].map() => (
//         <div
//           key={i}
//           ref={(el) => {
//             if (el) boxesRef.current[i] = el;
//           }}
//           className="box"
//           style={{
//             margin: "50px auto",
//             padding: "20px",
//             background: "lightblue",
//             textAlign: "center",
//             fontSize: "1.5rem",
//             width: "200px",
//             borderRadius: "10px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           Box {i + 1}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedBoxes;

export default Header;