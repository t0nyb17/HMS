import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />

            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Live In Ease<br />
              With our Housing
              <br /> Management System
            </motion.h1>
          </div>

          <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              A Web Based Management System for Housing Society that suits you
              very easily
            </span>
            <span>Forget all difficulties a one-stop destination for you</span>
          </div>
          </motion.h1>

          <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
          <button className="btnGetStarted" onClick={() => window.open('/loginpage', '_blank')}>
            Get Started →
          </button>
          </motion.h1>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
