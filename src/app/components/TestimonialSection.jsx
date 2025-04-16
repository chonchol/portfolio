"use client";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Naveed Ratansi",
      role: "CEO, Cheetahconversions",
      feedback:
        "I had the pleasure of working with Chonchol Mahmud on a few website projects, and he was fantastic to collaborate with. Chonchol is incredibly knowledgeable about web development and has a diverse skill set that made it easy to bring my ideas to life. What stood out the most was how great he is at communicating—he kept me in the loop every step of the way and made sure everything was clear. He’s also super responsive, which made the whole process smooth and stress-free. Whether it was designing, coding, or troubleshooting, Chonchol always delivered high-quality work. If you’re looking for someone who’s skilled, reliable, and easy to work with, I’d definitely recommend him!",
      avatar: "/images/man.png",
    },
    {
      name: "Seth",
      role: "CTO at Givebanktickets",
      feedback:
        "Chonchol is a great developer. He understands the project and asks many questions to make sure he codes correctly. He can also learn things along the way if he doesn't know them. I'd recommend Chonchol for any project.",
      avatar: "/images/woman.png",
    },
    {
      name: "Andrew Messier",
      role: "Founder, Tournamatch",
      feedback:
        "It was truly a pleasure working with Choncol for the last 1.5 years. He helped me with a variety of tasks, did exactly what I asked him to do, communicated well and often. He is a genuine good person who will work hard to make sure you are satisfied. I highly recommend him and hope there's an opportunity for us to work together in the future. I'm terminating the contract at present only because I don't have enough work to keep him busy. Thank you and God bless!",
      avatar: "/images/man2.png",
    },
  ];

  return (
    <section className="py-8 md:py-16" id="testimonial">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h4
            className="text-sm text-indigo-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Testimonial
          </motion.h4>
          <motion.h2
            className="text-5xl my-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            What my Clients says about me
          </motion.h2>
          <motion.p
            className="mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            knowledge, expertise, advice and confidence
          </motion.p>
          <motion.a
            href="https://www.upwork.com/freelancers/~016a3f0d2af53c23bc"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all testimonial
            </motion.button>
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TestimonialCard
            name={testimonials[0].name}
            designation={testimonials[0].role}
            feedback={testimonials[0].feedback}
            avatar={testimonials[0].avatar}
          />
        </motion.div>
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <TestimonialCard
            name={testimonials[1].name}
            designation={testimonials[1].role}
            feedback={testimonials[1].feedback}
            avatar={testimonials[1].avatar}
          />
          <TestimonialCard
            name={testimonials[2].name}
            designation={testimonials[2].role}
            feedback={testimonials[2].feedback}
            avatar={testimonials[2].avatar}
          />
        </motion.div>
      </div>
    </section>
  );
}
