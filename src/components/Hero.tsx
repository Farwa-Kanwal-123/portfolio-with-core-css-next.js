"use client";
import Image from "next/image";
import SocialMedia from "./Social";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Prac = () => {
  return (
    <section className="home" id="home">
      <div className="home-img objectFit='cover'">
        <Image src="/pf.jpg" alt="portfolio-image" width={350} height={300} priority className="img"/>
      </div>
      <div className="home-content">
        <h3>Hello, Myself</h3>
        <h1>Farwa Kanwal</h1>
        <h3>
          And I&#39;m a{" "}
          <span className="multiple-text">
            {/* type writer animation,use code from npm library 'react-type-animation'*/}
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </h3>
        <p>
          As a dedicated web developer, I specialize in crafting innovative and
          visually stunning websites that captivate audiences and drive results.
          With a passion for clean code and a keen eye for design, I transform
          complex ideas into user-friendly digital experiences. Let@#39;s
          collaborate to bring your vision to life.
        </p>

        <SocialMedia />
        <Link href="#" className="btn">
          Download CV
        </Link>
      </div>
    </section>
  );
};

export default Prac;
