import { Instagram, Youtube } from "iconsax-react";

const Nav = () => {
    return ( 

        <>
        <div className=" px-4 md:px-8 py-4 bg-projectblack flex justify-between text-projectwhite items-center text-xl">
            <div>Oluwaseyi Jesuton</div>
            <div> 
                <div className="inline-flex ">
                    
                    <Youtube/>
                    <Instagram/>
                </div>
                <button className="bg-projectteal p-3 hidden md:inline-flex rounded-md text-white"> WORK WITH OLUWASEYI </button>
            </div>
        </div>
        </>
     );
}
 
export default Nav;