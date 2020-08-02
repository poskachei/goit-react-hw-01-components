import React from 'react';
import PropTypes from 'prop-types';
import './statistics.sass';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="stat-title">{title}</h2>
      <ul className="stat-list">
        {stats.map(upload => (
          <li key={upload.id} className="stat-item">
            <span className="stat-label">{upload.label}</span>
            <span className="stat-percentage">{upload.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics;
