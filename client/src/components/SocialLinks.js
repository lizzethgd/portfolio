import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa"

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="#">
        <FaDiscord />
      </a>
    </li>
    <li>
      <a href="#">
        <FaTelegram />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
