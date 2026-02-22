// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "/src/components/ContactForm/styles.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbbzjej");

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div
      style={{
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 2em" }}>
        <>
          <p className={styles.formIntro}>
            Have a question or want to work together? Fill out the form below,
            and I'll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">
                Name<span className={styles.requiredAsterisk}>*</span>
              </label>
              <input id="name" type="text" name="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email address<span className={styles.requiredAsterisk}>*</span>
              </label>
              <input id="email" type="email" name="email" required />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">
                Message<span className={styles.requiredAsterisk}>*</span>
              </label>
              <textarea id="message" name="message" rows="5" required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={state.submitting}
            >
              Send
            </button>
          </form>
        </>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
