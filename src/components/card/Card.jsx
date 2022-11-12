import "./cards.styles.css";
import { motion } from "framer-motion";
import Icon from "../icon/Icon";
import { useRef, useState } from "react";
import PrincingInfo from "../pricingInfo/PrincingInfo";
import Modal from "react-modal";

const customStyles = {
  content: {
    textAlign: "center",
    width: "500px",
    height: "190px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50px",
  },
};

Modal.setAppElement("#root");

const Card = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    flip();
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#5a45f2";
  }

  function closeModal() {
    setIsOpen(false);
  }

  // primer valor estado, el segundo la funcion para cambiar el estado
  const [isFliped, setIsFliped] = useState(false);
  const [mail, setMail] = useState(false);

  const flip = () => {
    setIsFliped((current) => !current);

    setTimeout(() => {
      setMail((current) => !current);
    }, 250);
  };

  console.log(isFliped);
  return (
    <>
      <div>
        <Modal
        closeTimeoutMS={500}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Thank you!</h2>
          <div>We'll get in touch soon!</div>
          <br />
          <button className="closePopUp" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>

      <motion.div
        whileHover={{ backgroundColor: "#5a45f2", color: "white" }}
        transition={{ duration: 0.5 }}
        animate={{ transform: isFliped ? "scaleX(-1)" : "scaleX(1)" }}
        initial={{ transform: "scaleX(1)" }}
        className="plan"
      >
        <motion.div
          transition={{ duration: 0.5 }}
          animate={{ transform: isFliped ? "scaleX(-1)" : "scaleX(1)" }}
          initial={{ transform: "scaleX(1)" }}
        >
          {mail ? (
            <div>
              <h2 className="emailTitle">E-mail:</h2>
              <input className="inp" type="email" required />
              <br />
              <h1>Are you ready?</h1>
              <p>
                You will be the first to know about new releases,
                giveaways & special projects. Stay tuned.
              </p>
              <button type="submit" className="sendEmail" onClick={openModal}>
                Send e-mail *
              </button>
              <p className="terms">(*)"By clicking Send e-mail, I hereby agree and consent to the User Agreement, its policies, and the Privacy Policy."</p>
              <br />
              <button className="roundedButton" onClick={flip}>
                <Icon icon="close"></Icon>
              </button>
            </div>
          ) : (
            <div>
              <PrincingInfo {...props} onClick={flip} />
            </div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Card;
