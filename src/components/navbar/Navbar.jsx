import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import MagButton from "../magButton/MagButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Bhuwan Thapa
        </motion.span>

        <motion.div
          className="downloadBtn"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        >
          <MagButton
            text="Dowload CV"
            link="/bhuwanCV.pdf"
            isDownloadable={true}
            style={{ padding: "10px" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
