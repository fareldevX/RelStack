import { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import useNotification from "../../Hooks/useNotification";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";
import { validationFormContact } from "../../utils/validationFormContact";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const { notify } = useNotification();

  const submit = async (e) => {
    try {
      e.preventDefault();

      const error = validationFormContact(form);
      if (error) {
        notify({ type: "error", message: error });
        return;
      }

      await axios.post(
        "https://portfolio-backend-ori-six.vercel.app/contact",
        form
      );

      notify({
        type: "success",
        message: "Message sent — thank you!",
      });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      notify({
        type: "error",
        message: "Failed to send.",
      });
      console.error(err);
    }
  };

  return (
    <Section id="contact" className={styles.contactSection}>
      <Container className={styles.center}>
        <div className={styles.wrapperBio}>
          <div className={styles.bio}>
            <h2>Have an idea? Let's build it.</h2>
            <a
              href="mailto:farelarlishorlando@gmail.com"
              className={styles.email}
            >
              farelarlishorlandoo@gmail.com <FiSend />
            </a>
          </div>

          <div className={styles.socialMedia}>
            <a
              href="https://www.linkedin.com/in/farel-arlish-orlando-8a5370399"
              target="_blank"
            >
              <span>Linkedin</span>
            </a>
            <a href="https://www.instagram.com/farelarlish/" target="_blank">
              <span>Instagram</span>
            </a>
            <a href="https://github.com/fareldevX" target="_blank">
              <span>Github</span>
            </a>
            <a href="https://wa.me/622322472554" target="_blank">
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className={styles.wrapperForm}>
          <form onSubmit={submit}>
            <h3>Quick Inquiry</h3>
            <div className={styles.groups}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className={styles.groups}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className={styles.groups}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about you need..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button className={styles.btnSend}>Send Request</button>
          </form>
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
