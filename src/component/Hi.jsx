import feature from '../assets/image/feature.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Hi() {
    const GitHub ='https://github.com/ErickDhoz'; 
    const Instagram ='https://www.instagram.com/erickdhoz/?hl=es-la';
    const linkedIN ='https://www.linkedin.com/in/erickdhoz/';


    return ( 
        <div className=" grid h-screen justify-center items-center md:flex p-20  mt-20 m-5 rounded-lg">
            <div className=' w-96 md:w-1/2 grid p-5'>
            <h1 className='text-gray-600 font-bold md:text-5xl text-3xl text-center hover:text-cyan-400'>Frontend Developer.</h1>
            <p className='text-gray-600 md:text-2xl text-2xl md:mt-10 mt-5 text-justify'>I like to craft solid and scalable frontend products with great user experiences.</p>
            <div className='flex mt-10 justify-center'>
              <div className='mr-5 text-gray-800'><a href={GitHub} className='hover:text-green-600'><GitHubIcon/></a></div>
                <div className='mr-5 text-gray-800'><a href={linkedIN} className='hover:text-blue-600'><LinkedInIcon/></a></div>
                  <div className='mr-5 text-gray-800'><a href={Instagram} className='hover:text-pink-600'><InstagramIcon/></a></div>
            </div>            
            </div>
            
            
            <div className='w-full md:w-1/2 p-1 md:p-5'>
                <img src={feature} alt='photo developer' className='md:h-96 m-2'/>
            </div>
            
        </div>
    );
}

export default Hi;