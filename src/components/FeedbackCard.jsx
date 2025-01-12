import { quotes } from '../assets'


const FeedbackCard = ({ content, img, title, name }) => (
  <div className='text-white flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px]
        mr-0 md:mr-10 sm:mr-5 my-5 feedback-card'>
    <img src={quotes} className='w-[42.6px] h-[27.6px] ' alt={quotes}/>
    <p className='font-poppins font-normal text-[18px] leading-[32.4px] my-10'>
      {content}
    </p>

    <div className='flex'>
      <img src={img} className='w-[48px] h-[48px] rounded-full' alt={name} />

      <div className='flex flex-col ml-4'>
        <h4 className='font-poppins font-semibold text-[20px] leading-[32px]'>
          {name}
        </h4>

        <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>
          {title}
        </p>
      </div>
    </div>
  </div>
)

export default FeedbackCard