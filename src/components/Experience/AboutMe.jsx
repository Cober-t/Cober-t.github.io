import { about } from "../../constants.jsx"
import { Link } from "react-router-dom"


const AboutMe = () => {

    return (
        <div className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px] select-none">
                <h3 className="text-5xl font-bold font-nodeTitle uppercase">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 font-medium">
                    {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                    {about.items.map((item, index) => {
                        return <li key={index} className="flex items-center justify-center
                        xl:justify-start gap-4">
                            <span className={`text-white/60 font-medium font-tags text-3xl capitalize`}>
                            {item.fieldName}
                            </span>
                            {
                                about.items.length - 1 === index &&
                                <Link  to="/contact" className={`text-xl font-medium hover:text-accent`}>
                                    {item.fieldValue}
                                </Link>
                                ||
                                <span className={`text-xl capitalize font-medium capitalize"}`}>
                                {item.fieldValue}
                                </span>
                            }
                        </li>

                    })}
                </ul>
            </div>
        </div>
    )
}

export default AboutMe