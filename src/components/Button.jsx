import { Link } from "react-router-dom"


const Button = ({ title = "click me", bgcolor = "#2b98f0", textcolor = "white", link = "#", hoverbgcolor = "transparent", hovertxt = "#f3e53d" }) => {
    return (
        <Link to={link}
            className={`bg-[${bgcolor}] border-[2px] border-[${bgcolor}] text-[${textcolor}] hover:border-[${bgcolor}] hover:bg-[${hoverbgcolor}] hover:text-[${hovertxt}] tracking-[1px] px-6 py-2 rounded text-[12px] font-semibold uppercase`}
        >
            {title}
        </Link>
    )
}

// Button.PropTypes = {
//     title: PropTypes.string,
//     bgcolor: PropTypes.string,
//     textcolor: PropTypes.string,
//     link: PropTypes.string,
//     hoverbgcolor: PropTypes.string,

// };

export default Button