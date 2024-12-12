import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../Tag';
import './Meal.css';

const Meal = (props) => (
  <a className="Meal" href={props.url} target="_blank" rel="noopener noreferrer">
    <div className="Meal__head">{props.type}</div>
    <div className="Meal__content">
      <div className="Meal__content__img">
        <img src={props.imgSrc} alt="Unavailable" />
      </div>
      <div className="Meal__content__desc">
        <h2 className="Meal__content__desc--heading">{props.heading}</h2>
        <h4 className="Meal__content__desc--source">{props.source}</h4>
      </div>
      <div className="Meal__content__labels">
        {props.tags.map((tag, i) => (
          <Tag icon={tag.icon} name={tag} key={`Tag__${i}`} />
        ))}
      </div>
    </div>
  </a>
);

Meal.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  heading: PropTypes.string.isRequired,
  source: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Meal.defaultProps = {
  imgSrc: '',
  source: '',
};

export default Meal;
