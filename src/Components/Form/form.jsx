import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import '../Form/form.css'

export const App = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
    emailjs.sendForm("service_81fbmfo", "template_r71vkvm", form.current, "d8GpT9Ww7m77rDg3g").then(
      (result) => {
        console.log(result.text);
        alert("Nous traitons votre demande au plus vite ")
      },
     (error) => {
         console.log(error.text);
         alert("une erreur est survenu")
      }
    );  
    
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email"required />
      <label>Téléphone</label>
      <input type="text" name="user_tel"required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default App;