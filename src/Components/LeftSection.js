import arrow from '../Assets/SVG_margin.png'
import msg from '../Assets/SVG.png'
import logo1 from '../Assets/Clip path group.png'
import logo2 from '../Assets/SVG (1).png'
import logo3 from '../Assets/SVG (2).png'
import logo4 from '../Assets/SVG (3).png'
import logo5 from '../Assets/SVG (4).png'
import logo6 from '../Assets/SVG (5).png'
function LeftSection(){
    return (
        <div className='overflow-hidden'>
            <div className="flex items-center">
                <img className="w-[6cqw] md:w-[2cqw]" src={arrow} alt="arrow"/>
                <p className='text-[3.4cqw] md:text-[0.95cqw] font-[500] text-darkBlue font-inter' >Home</p>
            </div>
            <h4 className='font-jakarta text-[7cqw] md:text-[2.3cqw] font-[700] text-darkBlue pt-[3cqw] md:pt-[1.8cqw]'>Contact</h4>
            <div className="flex items-center gap-[2cqw] md:gap-[1cqw] pt-[8cqw] md:pt-[4cqw]">
                <div className='bg-purple rounded-[0.7cqw] flex justify-center items-center p-[1cqw] md:p-[0.5cqw]'>
                <img className="w-[3.7cqw] md:w-[1.5cqw]" src={msg} alt="msg"/>
                </div>
                <p className='text-[3cqw] md:text-[0.8cqw] font-[600] text-darkBlue font-inter tracking-wide' >CONTACT SALES</p>
            </div>
            <h1 className='text-[10cqw] md:text-[3.8cqw] font-jakarta text-darkBlue font-[700] leading-[11cqw] md:leading-[4.2cqw] pt-[9cqw] md:pt-[4cqw]'>Talk to our account
            expert</h1>
            <p className='md:text-[1cqw] text-darkBlue font-inter font-[400] pt-[4cqw] md:pt-[2cqw]'>Have questions about integrating our APIs? Fill out the form and a senior web
            expert will be in touch shortly.</p>
            <p className='md:text-[1cqw] text-purple font-jakarta font-[700] pt-[4cqw] md:pt-[2cqw]'>Join 6,000+ forward-thinking companies:</p>
            <div className='pt-[4cqw] md:pt-[2cqw] flex items-center gap-[4cqw] md:gap-[2cqw]'>
                <img src={logo1} alt='logo' className='w-[14cqw] md:w-[6cqw]'/>
                <img src={logo2} alt='logo' className='w-[12cqw] md:w-[5cqw]'/>
                <img src={logo3} alt='logo' className='w-[8cqw] md:w-[3cqw]'/>
                <img src={logo4} alt='logo' className='w-[8.5cqw] md:w-[3cqw]'/>
                <img src={logo5} alt='logo' className='w-[14cqw] md:w-[5cqw]'/>
                <img src={logo6} alt='logo' className='w-[11cqw] md:w-[4cqw]'/>
            </div>
        </div>
    )
}

export default LeftSection;