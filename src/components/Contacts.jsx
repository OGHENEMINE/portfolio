import { useRef } from "react";
import CustomHook from "../hooks/CustomHook";

function Contacts() {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="Contacts" ref={refTab}>
      <h2 className="title">CONTACTS</h2>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            id="message"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contacts;
