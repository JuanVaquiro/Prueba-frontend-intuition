import PropTypes from 'prop-types'

const Buttons = ({ type, text }) => {
  const btnClass = type === 'primary'
    ? 'text-black bg-white hover:bg-primary hover:text-white focus:ring-2'
    : 'text-white bg-gray-700 hover:bg-gray-800 focus:ring-2'

  return (
    <button
      type="button"
      className={`font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none ${btnClass}`}
    >
      {text}
    </button>
  )
}

Buttons.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  text: PropTypes.any.isRequired
};

export default Buttons
