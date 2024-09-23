

const IconSVG = (props) => {
    return <img src={props.path} fill="currentColor" stroke="currentColor"
    className={props.class} onClick={props.onClick}/>
}

export default IconSVG