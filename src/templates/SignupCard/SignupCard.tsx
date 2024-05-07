import SignupForm from "../../organisms/SignupForm/SignupForm";
import { motion } from "framer-motion";
import "./signup-card.css";

const SignupCard = () => {
  return (
    <motion.div
      className="signup-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h1 className="signup-title">Signup!</h1>
      <SignupForm />
    </motion.div>
  );
};

export default SignupCard;
