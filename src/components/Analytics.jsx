import {React} from 'react'
import Laptop from '../assets/aaa.jpg'

const Analytics = ()=>{
    return(
        <div className='w-full bg-white py-16 px-4'>
            <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 ">
                <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4 '/>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#00bf9a] font-bold'>ANALYTICS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Efficiently</h1>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus 
                        delectus debitis? Unde saepe harum velit ut quaerat quis 
                        molestias, pariatur eaque nemo quidem sequi, sit doloremque maiores? A, nisi.
                    </p>
                    <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>

                </div>
            </div>
        </div>
    )
}


export default Analytics;