import image from '/src/assets/image1.jpg'
const Achievement = () => {
    return ( 
    <>
        <div className=" p-2 md:px-24  md:mt-16">
            <div className="md:grid grid-cols-2 gap-4">
                    <div className='col-span-1' >
                        <h1 className="text-projectteal ">
                        Notable Achievements
                        </h1>
                        <p>Since 2017, Oluwaseyi has received over 25+ awards & recognitions for her contributions to environmental protection and youth development, including</p>
                    </div>
                  
                    <div className='col-span-1'>
                            <img src={image}/>
                    </div>
            </div>
        </div>
    </>
     );
}
 
export default Achievement;