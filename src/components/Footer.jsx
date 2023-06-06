import {React} from 'react';
import {
    FaDribbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer =()=>{

    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-100 '>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] '>React.</h1>
                <p className='py-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, harum debitis 
                    rem consequuntur alias facere, placeat ducimus consectetur 
                    voluptates iure et explicabo modi culpa ex doloribus in libero voluptatibus iste?
                </p>
                <div className='flex justify-between md:w-[75%] my-6 '>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;