import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};
const defaultProps = {
  className: '',
  background: '#ffffff',
  title: '',
  icon: '',
};

function Section({
  className,
  background,
  title,
  icon,
  children
}) {
  return (
    <section className={`Section ${className}`} style={{  background: background }}>
      <div className="container title-container" data-aos="fade-up">
        <h1 className="title">{title}</h1>
        <i className={icon} data-aos="zoom-in" data-aos-delay="400" />
      </div>

      { children }
    </section>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
