import PropTypes from 'prop-types';

export default function Greeting({ name }) {
  // This function returns a greeting message with the name passed as a prop.
  return <h1 className='neumorphic-greeting'>Hello, {name}!</h1>;
}


Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};