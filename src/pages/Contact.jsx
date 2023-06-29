import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_g5m6umq', 'template_lj15i23', form.current, 'IinW098G4N0WDjOkw').then((result) => {
            alert('Message sent, thanks')
            console.log(result.text);
        }, (error) => {
            alert('Error, the message could not be sent.')
            console.log(error.text);
        });
    };


    return (
        <form ref={form}
            onSubmit={sendEmail}>
            <div className="bg-white w-full h-screen flex justify-center items-center transition-property: opacity;">
                <div className="grid ">
                    <div className="flex justify-center items-center mb-5">
                        <h1 className="text-5xl text-gray-400 font-bold">Contact</h1>
                    </div>
                    <div>

                        <input name="user_name" type='text' placeholder=' Name' className="border-solid border-2 border-indigo-400 mb-5 rounded-lg w-96"/>

                    </div>
                    <div>

                        <input name="user_email" type='email' placeholder=' Email' className="border-solid border-2 border-indigo-400 mb-5 rounded-lg w-96"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder='Message' className="border-solid border-2 border-indigo-400 w-96  h-44 rounded-lg"></textarea>

                    </div>
                    <div className="flex justify-center items-center">

                        <button type="submit" value="Send" className="bg-indigo-500 rounded-lg p-1 w-96 text-white font-bold hover:bg-indigo-900 hover:text-indigo-400">Submit</button>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default Contact;
