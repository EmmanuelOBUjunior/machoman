import PropTypes from "prop-types"
const Button = ({text}) => {
  return (
    <button className="px-8 py-4 rounded-md border-2 border-solid border-blue-400 bg-slate-950 blueShadow duration-200"><p>{text}</p></button>
  )
}

export default Button


Button.propTypes = {
    text: PropTypes.string.isRequired,
}