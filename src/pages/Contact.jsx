function Contact() {
    return ( 
        <div className="bg-white w-full h-screen flex justify-center items-center transition-property: opacity;">
            <div className="grid ">
                <div className="flex justify-center items-center mb-5">
                    <h1 className="text-5xl text-gray-400 font-bold">Contact</h1>
                </div>
                <div>
                
                <input type='text' placeholder=' Name' className="border-solid border-2 border-indigo-400 mb-5 rounded-lg w-96"/> 
                </div>
                <div>
                
                <input type='text' placeholder=' Email'className="border-solid border-2 border-indigo-400 mb-5 rounded-lg w-96"/>
                </div>
                <div >
                    <textarea placeholder=' your text' className="border-solid border-2 border-indigo-400 w-96  h-44 rounded-lg"></textarea>
                </div>
                <div className="flex justify-center items-center">
                    <button className="bg-indigo-500 rounded-lg p-1 w-96 text-white font-bold">Submit</button>
                </div>
                
            </div>
        </div>
     );
}

export default Contact;