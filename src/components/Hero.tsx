import Image from "next/image";
import SocialMedia from "./Social";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-img objectFit='cover'">
        <Image src="/pf.jpg" alt="portfolio-image" width={350} height={300} />
      </div>
      <div className="home-content">
        <h3>Hello, Myself</h3>
        <h1>Farwa Kanwal</h1>
        <h3>
          And I&#39;m a <span className="multiple-text">Web Developer</span>
        </h3>
        <p>
          As a dedicated web developer, I specialize in crafting innovative and
          visually stunning websites that captivate audiences and drive results.
          With a passion for clean code and a keen eye for design, I transform
          complex ideas into user-friendly digital experiences. Let@#39;s
          collaborate to bring your vision to life.
        </p>

        <SocialMedia />
        <a href="#" className="btn">
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
