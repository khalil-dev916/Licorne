import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color, marginRight: '2px' }}>
          {value >= i ? (
            <FaStar />
          ) : value >= i - 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      {text && <span style={{ marginLeft: '5px' }}>{text}</span>}
    </div>
  );
};

Rating.defaultProps = {
  color: '#f8e825',
};

export default Rating;