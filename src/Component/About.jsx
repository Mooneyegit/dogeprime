import './about.css'
import aboutImg from '../assert/Images/dogoprimeface.png'

const About = () => {
  return (
    <div class="about_section">

    <div class="about">

        <img src={aboutImg} class="about_img" />

        <div class="about_text">

            <h1>About Me</h1>

            <p>Dogeprime is a community-driven project that aims to bring the best of both worlds: the Doge community and the Girlfriend community. We believe that the two communities have a lot in common, and we want to bring them together to create a new, stronger community that can achieve great things.</p>

            <p>Our mission is to create a safe space where Doge and Girlfriend enthusiasts can come together to share their love for their favorite things. We want to create a community that is inclusive, welcoming, and supportive, where everyone can feel comfortable being themselves.</p>
            <p>We are committed to building a community that is built on trust, respect, and mutual support. We believe that by working together, we can achieve great things and create a better world for everyone.</p>

            <img src={aboutImg} class="signature" />

            <div class="buttons">


            </div>

        </div>

    </div>


</div>
  )
};

export default About;
