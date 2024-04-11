import React from 'react'
import Nav from './Home/Nav'
import Hero from './Home/Hero'
import {Link} from 'react-router-dom'


const MainPage = () => {
  return (
    <>

<header className='bg-[#0D1F23]  font-bold  w-full  min-h-[10px] text-white   mx-10  relative top-0   mt-0' >
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl  flex items-center justify-center font-poppins capitalized'>School <span className='text-[#DBFDC8]'>Mate</span></h2>

        <div className='flex   max-lg:hidden'>
          <Link to='/register'>          <button className='px-10 py-1'>
            <a  className='text-[20px]' href=''>Register</a>
          </button>
</Link>
<Link to='/login'>
<button className='px-10 py-1 ml-6  border-2 border-[#DBFDC8]'>
            <a  className='text-[20px]' href=''>Login</a>
          </button>

</Link>
        </div>
      </div>
      


      
    </header>

    <section className='bg-[#0D1F23] min-h-[500px] flex items-start justify-center mt-[10rem]'>
<div className="flex flex-col  justify-between text-center  " data-aos='fade-right'>
<h2 className='text-3xl text-white font-bold'> Welcome To <span className='text-[#DBFDC8] font-Roboto '>SCHOOLMATE</span><br/> </h2>

<h3 className='text-2xl text-white font-bold mt-[5rem]'>get instant <span className='text-[#DBFDC8] font-Roboto '>timetable scheduling</span> </h3>
<h3 className='text-2xl text-white font-bold mt-[5rem]'>and  <span className='text-[#DBFDC8] font-Roboto '>examination timetable scheduling</span></h3>



</div>

      
    </section>







    
    

    </>
      
  )
}

export default MainPage
