import { about } from "../data/about_data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const About = () => {
useGSAP(()=>{
    gsap.to(".box",{
        opacity:1,
        y:20,
        duration: 0.5,
        stagger:0.3
    })

})

    return (
        <>
            <div className="mx-auto">



                {about.map((detail) => {
                    return (
                        <div className="grid md:grid-cols-2 md:gap-16 p-2  mx-auto md:w-7/8" key={detail.id}>
                            {detail.id % 2 == 1 ?
                                <>
                                    <div className="col-span-1 mt-4 box opacity-0 flex items-center ">
                                        <div className="">
                                        <h1 className="text-xl/10 md:text-3xl/12 font-light heading">{detail.blackText} <span className="text-projectteal">{detail.greenText}</span></h1>
                                        {detail.content.split("\n").map((line, index) => (
                                         <p className="lg:text-lg mt-4 " key={index}>{line}</p>
                                                    ))}

                                        <a href={detail.buttonLink}> <button className=" cursor-pointer bg-projectteal py-2 px-6 rounded-sm font-semibold text-white mt-5">{detail.buttonText}</button>  </a>
                                       <a href={detail.secondButtonLink} target="_blank" rel="noopener noreferrer">
                                        {detail.hasSecondButton && 
                                       <button className=" border-projectteal cursor-pointer border-2 block py-2 px-6 rounded-sm font-semibold text-projectteal mt-5"> {detail.secondButtonText}</button>}
                                       </a>
                                        </div>
                                    </div>
                                    <div className="col-span-1 my-6 box  flex items-center  ">
                                        
                                        <div className="w-full mx-auto">
                                                <img src={detail.imageLink} alt=""  />
                                        </div>

                                    </div></> :
                                <>
                                    <div className="col-span-1 flex items-center justify-end box ">
                                        <div className=" mx-auto lg:w-full  ">
                                        <img src={detail.imageLink} alt="" className="  " />
                                        </div>

                                    </div>
                                    <div className="col-span-1 mt-4 box opacity-0 flex items-center ">
                                        <div className="">
                                        <h1 className="text-xl/10 md:text-2xl/15 font-light heading ">{detail.blackText} <span className="text-projectteal">{detail.greenText}</span></h1>
                                        {detail.content.split("\n").map((line, index) => (
                                         <p className="lg:text-lg " key={index}>{line}</p>
                                                    ))}

                                        <button className="bg-projectteal py-2 px-6 rounded-sm font-semibold text-white mt-5">{detail.buttonText}</button>
                                        {detail.hasSecondButton && 
                                       <button className=" border-projectteal border-2 block py-2 px-6 rounded-sm font-semibold text-projectteal mt-5"> {detail.secondButtonText}</button>}
                                        </div>
                                    </div>
                                </>}
                        </div>

                    )
                })}
            </div>
        </>
    );
}

export default About;