import React,{ useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiMailSend,BiMessageAltDots } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationArrow} from "react-icons/fa";



const Contact = () =>{
 const form = useRef();
 

 const [nameData,setname] = useState("")
 const [textData,setText] = useState("")
 const [errorData,setErrorData] = useState(false)
 const [nameError,setNameError] = useState(false)
 const [textError,setTextError] = useState(false)
 const [success, setSucces] = useState(false);

 const resetErrors = () => {

    setErrorData(false)
    setNameError(false)
    setTextError(false)
    return

 }
 const timed = () => {
    setSucces(true)
    setTimeout(() => {
        setSucces(false)
      }, 2000);
 }
    const sendEmail = (e) => {
      e.preventDefault();
      if(nameData && textData){
        console.log("emailed")
        emailjs.sendForm('service_z3touz5', 'template_x3wb8up', form.current, '8NKjNTPmQMovSJ-0p')
        e.target.reset()
        timed()
        return 
      }
      else{
           setErrorData(true)
           if(!nameData){
            setNameError(true)
           }
       
           if(!textData){
            setTextError(true)
           }
       return
      }
     
    };

    
    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>
                

                <div className='contact__info'>
                    <div className='contact__card'>
                     < BiMailSend className='contact__card-icon'/>
                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>maxmiz512@gmail.com</span>
                        <a href='mailto:maxmiz512@gmail.com' className='contact__button'>
                            Email me <IoIosArrowRoundForward className='contact__button-icon'/>
                        </a>
                    </div>

                    <div className='contact__card'>
                       <BsWhatsapp className='contact__card-icon'/>
                        <h3 className='contact__card-title'>Whatsapp</h3>
                        <span className='contact__card-data'>+250-780-439-884</span>
                        <a href="https://api.whatsapp.com/send?phone=+250780439884&text=I'm%20interested%20in%20your%20services" className='contact__button'>
                            Send a text <IoIosArrowRoundForward className='contact__button-icon'/>
                        </a>
                    </div>

                    <div className='contact__card'> 
                       <BiMessageAltDots className='contact__card-icon'/>
                        <h3 className='contact__card-title'>Messenger</h3>
                        <span className='contact__card-data'>user.fb123</span>
                        <a href='/#' className='contact__button'>
                            Write me <IoIosArrowRoundForward className='contact__button-icon'/>
                        </a>
                    </div>
                </div>
                </div>

                <div className='contact__content'>
                    <h3 className='contact__title'>Tell me about your project</h3>

                    <form className='contact__form' ref={form} onSubmit={sendEmail}>
                       <div className='contact__form-div'>
                            <label className='contact__form-tag'>Name</label>
                            <input
                            autoComplete = 'off' 
                            type='text'
                            name='name'
                            className={nameError ? 'error contact__form-input' : 'contact__form-input'}
                            placeholder='Insert your name'
                            value={nameData}
                            onChange={((event)=>{setname(event.target.value)})}
                            onFocus={()=>{resetErrors()}}  
                            />
                       </div> 
                       <div className='contact__form-div'>
                            <label className='contact__form-tag'>Email</label>
                            <input
                            autoComplete = 'off' 
                            type='email'
                            name='email'
                            className='contact__form-input'
                            placeholder='Insert your email'
                            />
                       </div> 
                       <div className='contact__form-div'>
                            <label className='contact__form-tag'>Project</label>
                             <textarea 
                             autoComplete = 'off' 
                             name='project' 
                             cols="30" 
                             rows="10"
                             className={textError? 'error contact__form-input contact__form-area' :'contact__form-input contact__form-area'}
                             placeholder='Write your project'
                             value={textData}
                            onChange={((event)=>{setText(event.target.value)})}
                            onFocus={()=>{resetErrors()}}
                             ></textarea>
                             {errorData ? <p className='error-message'>please fill the form correctly</p> : null}
                             {success ?  <p className='success-message'>thank you, message sent. </p> : null}
                             <button className="button button--flex button-form">
                                Say Hello 
                             <FaLocationArrow className="button-icon"/>
                             </button>
                       </div> 
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact