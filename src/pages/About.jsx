import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 text-gray-500' >
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col border border-black px-8 py-4 justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to V meet.Your Trusted Partner in managing Your Healthcare Needs Conveniently And Efficient At Vmeet. We understand
            The challenges Individuals face when it comes to scheduling doctors Appointment And managing their Health Records.
          </p>
          <p>
            Vmeet is Committed To Excillence in healthcare Technology. We Continuously Strive TO Enhance Our Platform Integrating. The Latest
            Advanced TO improve User Experience And Deliver Superior Service Whether Youre Booking Your first Appointment Or Managing Ongoing care.Vmeet here to support you.Every step of the way
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our vision at Vmeet. is to Create A seamless Healthcare Experience For Every User. We Aim to Bridge The Gap between patient and healthcare providers. Making it easier for you TO access The care you need. when you need it.
          </p>
        </div>
      </div>

      <div className='text-xl my-4 '>
        <p> WHY <span className='text-shadow-gray-700 font-semibold'>CHOOSE US </span></p>
      </div>

      <div className=' flex flex-col md:flex-row mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p> Streamlined appointment Scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professional in your area.</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendation and reminder to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
};

export default About;
