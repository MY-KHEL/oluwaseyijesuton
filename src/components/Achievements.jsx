import { achievementData } from '../data/achievement_data';
import image from '/public/assets/image1.JPG'

const Achievement = () => {
    return ( 
    <>
        <div className=" p-2 md:px-24  md:mt-16 mb-8 ">
            <div className="md:grid grid-cols-2 gap-8">
                    <div className='col-span-1' >
                        <h1 className="text-projectteal text-xl/9 md:text-3xl/7 font-light heading mb-8 ">
                        Notable Achievements
                        </h1>
                        <p>Since 2017, Oluwaseyi has received over 25+ awards & recognitions for her contributions to environmental protection and youth development, including</p>

                        <div>
                            {achievementData.map((details)=>{
                                return(
                                    <div className="grid grid-cols-9 items-center mt-5 mb-4">
                                        <div className="col-span-1">
                                            <img src='/assets/ankara.jpg' className='w-5 h-5 rounded-full'/>
                                        </div>
                                        <div className="col-span-8">
                                            <p className='font-semibold uppercase'>{details.text}</p>
                                        </div>
                                    </div>
                                )
                                    
                            })}
                            
                        </div>

                        <a href="https://docs.google.com/document/d/1MhxJDr3sDAzlPN_hNe2H5fTyPFBymmUgcj3ZvGIuUhE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='uppercase  font-semibold  underline'>See full list</a>
                    </div>
                  
                    <div className=' mt-3 col-span-1 flex items-center'>
                            <img src={image}/>
                    </div>
            </div>
        </div>
    </>
     );
}
 
export default Achievement;