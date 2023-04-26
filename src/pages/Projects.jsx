import mockData from "../assets/mockData.js";
import Cardproyect from "../component/Cardproyect";



function Projects() {
    return ( 
        <div className="flex justify-center flex-wrap md:mt-10 mt-10 z-0">
            
                {mockData.map(data=>(
                    <Cardproyect
                    link={data.link}
                    title={data.title}
                    image={data.image}
                    /> 
                )
                   
                )}
                
            
        </div>
     );
}

export default Projects;