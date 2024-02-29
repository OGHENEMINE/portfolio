import { useRef } from "react";
import CustomHook from "../hooks/CustomHook";

function Contacts() {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="Contacts" ref={refTab}>
      <h2 className="title">CONTACTS</h2>
      <form name="contact" data-netlify="true" className="contacts-form">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            placeholder="Enter your name"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Enter your message"
            id="message"
            name="message"
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Contacts;
