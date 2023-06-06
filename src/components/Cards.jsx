import {React} from 'react'
import Single from '../assets/u3.png'

const Cards = ()=>{
    return (
        <div className='w-full py-[10rem] px-4 bg-white '>
            <div className="grid mx-auto max-w-[1240px] md:grid-cols-3 gap-8 ">
                <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 '>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white ' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b  mx-8'>7 DAYS Trial</p>
                        <p className='py-2 border-b  mx-8'>SSend up to 2GB</p>
                    </div>
                    <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
                </div>
                
                <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 '>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white ' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b  mx-8'>7 DAYS Trial</p>
                        <p className='py-2 border-b  mx-8'>SSend up to 2GB</p>
                    </div>
                    <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
                </div>
                
                <div className='w-full shadow-xl flex flex-col p-4 my-4 hover:scale-105 duration-300 '>
                    <img src={Single} className='w-20 mx-auto mt-[-3rem] bg-white ' alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b  mx-8 mt-8'>500 GB Storage</p>
                        <p className='py-2 border-b  mx-8'>7 DAYS Trial</p>
                        <p className='py-2 border-b  mx-8'>SSend up to 2GB</p>
                    </div>
                    <button className=" text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
                </div>

            </div>
        </div>
    )
}

export default Cards;