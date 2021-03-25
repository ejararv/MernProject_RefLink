import React, { useEffect,  } from 'react'
import emailjs from 'emailjs-com';
import {useMessage} from '../hooks/message.hook'
import { useHttp } from '../hooks/http.hook'


export const TeamPage = () => {

    const message = useMessage()
    const { error, clearError } = useHttp()

    useEffect(() => {
        message(error)
        clearError()
      }, [error, message, clearError])
    
      useEffect(() => {
        window.M.updateTextFields()
      }, [])
    

    //   const form = document.getElementsByName('contact-form') 

    //   function clearForm(){
    //     var form =  document.getElementsByName('contact-form')
    //     form.values=''
    //   }
      function sendEmail(e) {
        e.preventDefault()

        emailjs.sendForm('service_drn7479', 'template_reflink', e.target, 'user_QyVIERmwsAfUqFrZoMeCQ')
            .then((result) => {
                
                 message(result.text = 'Dziekuje ')
                   
               
            }, (error) => {
                message(error.text = 'Błąd')
            })

          
    } 
    


    return (
        <>
            <header class="masthead">
                <div class="fon">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">SKONTAKTUJ SIĘ Z NAMI</h2>
                        </div>
                        <form className="contact-form" id="contact-form"onSubmit={sendEmail }  >
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input class="form-control" type="text" name="user_name" placeholder="Wpisz imię *" required="required" data-validation-required-message="Proszę wpisać swoje imię." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="email" name="user_email" placeholder="Wpisz email *" required="required" data-validation-required-message="Podaj swój adres e-mail." />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-group-textarea mb-md-0">
                                        <textarea class="form-control" name="message" placeholder="Twoja wiadomość *" required="required" data-validation-required-message="Wpisz wiadomość."></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <div id="success"></div>
                                <button class="btn btn-primary btn-block text-uppercase" type="submit" id="ToastSend">Wysłać</button>
                            </div>
                        </form>
                    </div>
                </div>
            </header>
            <section class="page-section bg-light">
                <br />
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">NASZ ZESPÓŁ</h2>
                        <h3 class="section-subheading text-muted">Ten projekt został opracowany przez:</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/team-1.jpg" alt="" />
                                <h4>Lizaveta Sobaleva</h4>
                                <p class="text-muted">Lead Designer<br />Junior Developer</p>

                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="team-member">
                                <img class="mx-auto rounded-circle" src="assets/team-3.jpg" alt="" />
                                <h4>Vladimir Rashatsko</h4>
                                <p class="text-muted">Lead Designer<br />Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}