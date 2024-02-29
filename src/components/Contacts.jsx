import { useRef } from "react";
import CustomHook from "../hooks/CustomHook";

function Contacts() {
  const refTab = useRef()
 CustomHook(refTab)
  return (
    <section className="Contacts" ref={refTab}>
      <h2 className="title">CONTACTS</h2>
      <form className="contacts-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div>
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Contacts;
