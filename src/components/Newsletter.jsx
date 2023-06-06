import {React} from  'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className="grid mx-auto max-w-[1240px] lg:grid-cols-3 ">
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips and tricks</h1>
                    <p>Sign up to our newsletter and stay updated</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                        <input type="email" className='p-3 flex w-full rounded-md text-black ' placeholder='Enter email' />
                        <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Notify me</button>
                    </div>
                    <p>We care about your <span className='text-[#00bf9a] '>Privacy</span></p>

                </div>
            </div>
        </div>
    )
}

export default Newsletter ;