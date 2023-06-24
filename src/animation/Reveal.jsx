import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ children }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
        height: "fit-content",
        overflow: "hidden",
        blockSize: "fit-content",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        whileInView={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "white",
          zIndex: 20,
        }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default Reveal;
