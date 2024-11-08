import { Link } from "react-router-dom"


const Button = ({ title = "click me", bgcolor = "#2b98f0", textcolor = "white", link = "#", hoverbgcolor = "transparent" }) => {
    return (
        <Link to={link}
            className={`bg-[${bgcolor}] border-[2px] border-[${bgcolor}] text-[${textcolor}] hover:border-[${bgcolor}] hover:bg-[${hoverbgcolor}] hover:text-[${bgcolor}] tracking-[1px] px-6 py-2 rounded text-[12px] font-semibold uppercase`}
        >
            {title}
        </Link>
    )
}

export default Button