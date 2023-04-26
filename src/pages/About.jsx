import foto from '../assets/image/Foto-HV.png';
function About() {
    return (
        <div className="bg-indigo-white w-full h-screen md:flex justify-center items-center">
            <div className="w-full md:w-1/2 md:h-96 h-64 rounded-lg flex justify-center items-center mt-10 pt-20">
                <img src={foto}
                    alt='Foto Erick M.'
                    className='md:w-96 w-48 md:ml-40 md:pr-10 md:mb-5'/>
            </div>
            <div className="w-full  p-3 md:p-5 md:mr-40 m-0">
                <h1 className="text-center text-indigo-600 font-bold md:text-5xl md:mt-11 mt-5 text-2xl">Hi, i am Erick Machado De la Hoz</h1><br/>
                <article className="md:text-sx text-justify md:font-sans md:mt-10 mt-1 px-2">Hello! I'm a junior web programmer focused on front-end development with skills in React, HTML, CSS, JavaScript, Redux, and Tailwind CSS. I'm passionate about creating attractive and optimized user interfaces that provide an exceptional user experience.
                    
                    As a web programmer, I create websites and mobile applications using modern technologies and best development practices. My primary focus is on front-end development, which means I ensure that the user interface is attractive, easy to use, and optimized for a wide range of devices and browsers.
                    
                    My expertise in React, HTML, CSS, JavaScript, Redux, and Tailwind CSS allows me to create highly functional and responsive web applications. I always strive to learn and stay up-to-date with the latest web development technologies and trends to deliver innovative and customized solutions for each project.
                    
                    I love working in teams and collaborating with other developers, designers, and UX experts to create solutions that are intuitive and satisfying for end-users. I'm excited to have the opportunity to work on new projects and help bring ideas to life. Thank you for visiting my web portfolio!</article>
            </div>


        </div>
    );
}

export default About;
