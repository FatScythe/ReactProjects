import { useTwelveContext } from "./context";
import phoneImg from "./images/phone.svg";
const Hero = () => {
  const { CloseSubMenu } = useTwelveContext();
  return (
    <section className='hero' onMouseOver={CloseSubMenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            eligendi possimus obcaecati enim facilis earum consequuntur vitae
            repellat laboriosam esse.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
