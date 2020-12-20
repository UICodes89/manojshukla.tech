import React, {useState} from "react";
import "./ContactComponent.css";
function Contact(props) {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameHandler = (event) =>{
        setName(event.target.value);
    }
    const emailHandler = (event) =>{
        setEmail(event.target.value);
    }
    const messageHandler = (event) =>{
        setMessage(event.target.value);
    }
    const encode  =  (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
      }
    
    const submiHandler = (event) =>{
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...{name, email, message} })
          })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    }
    return (
       <>
        <section id="contact">
            <h1 className="section-header">CONTACT</h1>
            <div className="contact-wrapper">
                <form className="form-horizontal"  name="contact" method="POST" data-netlify="true" onSubmit={submiHandler}>
                    <div className="form-group">
                        <div className="col-sm-12">
                           <div className="row">
                           <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value={name} onChange={nameHandler} />
                           </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <div className="row">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value={email} onChange={emailHandler}/>
                            </div>
                        </div>
                    </div>
                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" value={message} onChange={messageHandler}></textarea>
                    
                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" >
                        <div className="button">
                        <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                        </div>
                    </button>
                </form>

                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Dublin | IR</span></i></li>
                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:+353-834215190" title="Give me a call">+353 - (834) 215-190</a></span></i></li>
                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">manojkshukla89@gmail.com</a></span></i></li>
                    </ul>
                    <hr />
                      
                    <ul className="social-media-list">
                        <li><a href="https://www.facebook.com/mshukla08/ " target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/manoj-shukla-77505782/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li><a href=" https://www.instagram.com/manoj_k_shukla/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li><a href="https://github.com/UICodes89" target="_blank" className="contact-icon" rel="noopener noreferrer">
                        <i className="fa fa-git" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                    <hr />
                    <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
                </div>
            </div>
        </section>  
       </>
    );
}

export {
    Contact
}