import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Slidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Bhuwan Thapa
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" srcset="" />
          </a>
          <a>
            <img src="/instagram.png" alt="" srcset="" />
          </a>
          <a>
            <img src="/youtube.png" alt="" srcset="" />
          </a>
          <a>
            <img src="/dribbble.png" alt="" srcset="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
