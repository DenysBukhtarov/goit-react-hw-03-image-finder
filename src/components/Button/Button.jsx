import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ omClick }) => { 
    return (
        <button className="Button-load" onClick={onclick}>
                Load more
            </button>
    );
};

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
};