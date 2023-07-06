import { useState, useRef } from "react";

// Styles Import:
import styles from "../styles/comps/contactForm.module.scss";

// Component Import:
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  return (
    <div className={"section"} id="contactFrom">
      <p className={"sectionTitle"}>Contact</p>
      <form ref={form} method="POST" className={styles.Contact_Form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.Input}
          required
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.Input}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className={styles.Input}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
        <div className={"CallToActionBox"}>
          <button className={"Button"} value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
