import { motion } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jhilvec", "template_yzt8fxo", formRef.current, {
        publicKey: "pkDnUMcEKiXgDnd8i",
      })
      .then(
        () => {
          setSuccess("MESSAGE SENT!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError("Failed..." + error.text);
          setSuccess(null);
        }
      );
  };

  return (
    <>
      <div className="contactWrapper">
        <motion.div
          className="contact"
          id="Contact"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
              <h2>Mail</h2>
              <span>thapabhuwan15@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Address</h2>
              <span>Butwal, Nepal</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
              <h2>Phone</h2>
              <span>+977 9815406495</span>
            </motion.div>
          </motion.div>
          <div className="formContainer">
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg
                width="256px"
                height="256px"
                viewBox="0 0 55 55"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#FFA500"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M14.87 32a17.67 17.67 0 0 1 0-25"
                  ></motion.path>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M20 26.87a10.41 10.41 0 0 1 0-14.71"
                  ></motion.path>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="m28 30-5.43 5.43a8.77 8.77 0 0 0-2.57 6.2V52"
                  ></motion.path>
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M40 56h9a3 3 0 0 0 3-3V19a3 3 0 0 0-3-3H31a3 3 0 0 0-3 3v19.33a2 2 0 0 0 3.42 1.42l4.46-4.45a3.23 3.23 0 0 1 4.41-.24 3.12 3.12 0 0 1 .12 4.53l-3.29 3.29a9.83 9.83 0 0 0-2.88 7 6.25 6.25 0 0 1-6.24 6.2"
                  ></motion.path>
                  <line x1="39" y1="52" x2="41" y2="52"></line>
                  <line x1="36" y1="20" x2="44" y2="20"></line>
                </g>
              </svg>
            </motion.div>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              ref={formRef}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                required
                placeholder="Name"
                name="name"
                autoComplete="off"
              />
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                autoComplete="off"
              />
              <textarea rows={8} placeholder="Message" name="message" />
              <button>Submit</button>
              {success && <div className="message">{success}</div>}
              {error && <div className="message">{error}</div>}
            </motion.form>
          </div>
        </motion.div>

        <button className="button">
          <a href="#Home">
            <svg class="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
            </svg>
          </a>
        </button>
      </div>
    </>
  );
};

export default Contact;
