import LoginForm from "../../organisms/LoginForm/LoginForm";
import { motion } from "framer-motion";
import "./login-card.css";

const LoginCard = () => {
  return (
    <motion.div
      className="login-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h1 className="login-title">Login</h1>
      <LoginForm />
    </motion.div>
  );
};

export default LoginCard;
