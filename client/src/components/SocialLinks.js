import {
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaTelegram,
} from "react-icons/fa"

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/lizzeth-garcia-27b841b4">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://stackoverflow.com/users/12558623/lizzeth-gardi">
        <FaStackOverflow />
      </a>
    </li>
    <li>
      <a href="https://t.me/LizzethGD">
        <FaTelegram />
      </a>
    </li>
    <li>
      <a href="https://github.com/lizzethgd">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
