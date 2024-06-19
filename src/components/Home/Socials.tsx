import Link from "next/link";


import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"


const socials = [
    { icon: <FaGithub />, path: "https://github.com/M-Muiz" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/muizdev" },
    { icon: <FaInstagram />, path: "#" }
];

const Socials = ({ containerStyles, iconStyles }: any) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link target="_blank" href={item.path} key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
