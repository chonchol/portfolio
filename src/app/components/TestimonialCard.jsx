"use client";
import { motion } from "framer-motion";
import Rating from "./Rating";

const TestimonialCard = ({ name, designation, feedback, avatar }) => {
  return (
    <motion.div
      className="bg-indigo-100 shadow-lg rounded-xl p-5"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-3"
      >
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
      </motion.div>
      <motion.p
        className="text-gray-600 text-sm leading-relaxed my-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        {feedback}
      </motion.p>
      <motion.div
        className="flex items-center gap-4 mb-3"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={avatar} className="w-12 h-12 rounded-full" alt={name} />
        <div>
          <motion.h3
            className="text-black font-medium"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-xs font-medium text-indigo-600"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {designation}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;
