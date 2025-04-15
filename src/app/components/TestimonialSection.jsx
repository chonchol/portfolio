// components/Testimonials.js

import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO at StartupX",
      feedback:
        "This service transformed our online presence. Highly recommended!",
      avatar: "/avatars/jane.jpg",
    },
    {
      name: "John Smith",
      role: "Marketing Lead at Brandly",
      feedback: "Top-notch support and an intuitive platform.",
      avatar: "/avatars/john.jpg",
    },
    {
      name: "Emily Davis",
      role: "Founder at CraftyCo",
      feedback: "Exactly what we needed. Fast, professional, and sleek.",
      avatar: "/avatars/emily.jpg",
    },
  ];

  return (
    <section className="py-16" id="testimonial">
      {/* <div className="flex justify-between align-middle gap-5"> */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div>
          <h4 className="text-sm text-indigo-400">Testimonial</h4>
          <h2 className="text-5xl my-4">What my Clients says about me</h2>
          <p className="mb-10">knowledge, expertise, advice and confidence</p>
          <a href="https://www.upwork.com/freelancers/~016a3f0d2af53c23bc">
            <button className="bg-indigo-100 text-indigo-600 px-6 py-3 rounded-full font-medium">
              View all testimonial
            </button>
          </a>
        </div>
        <div>
          <TestimonialCard
            name={"Naveed Ratansi"}
            designation="CEO, Cheetahconversions"
            feedback={
              "I had the pleasure of working with Chonchol Mahmud on a few website projects, and he was fantastic to collaborate with. Chonchol is incredibly knowledgeable about web development and has a diverse skill set that made it easy to bring my ideas to life. What stood out the most was how great he is at communicating—he kept me in the loop every step of the way and made sure everything was clear. He’s also super responsive, which made the whole process smooth and stress-free. Whether it was designing, coding, or troubleshooting, Chonchol always delivered high-quality work. If you’re looking for someone who’s skilled, reliable, and easy to work with, I’d definitely recommend him!"
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <TestimonialCard
            name={"Martina Heinzle"}
            designation="CEO"
            feedback={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui maiores laboriosam vitae. "
            }
          />
          <TestimonialCard
            name={"Andrew Messier "}
            designation="Founder, Tournamatch"
            feedback={
              "It was truly a pleasure working with Choncol for the last 1.5 years. He helped me with a variety of tasks, did exactly what I asked him to do, communicated well and often. He is a genuine good person who will work hard to make sure you are satisfied. I highly recommend him and hope there's an opportunity for us to work together in the future. I'm terminating the contract at present only because I don't have enough work to keep him busy. Thank you and God bless!"
            }
          />
        </div>
      </div>
    </section>
  );
}
