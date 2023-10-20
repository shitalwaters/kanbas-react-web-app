import './index.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChartPie, faBook, faCalendar, faInbox, faClock, faPlay, faArrowCircleRight, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function KanbasNavigation() {
  const links = [
    { path: '../Account/index.html', label: 'Account', icon: faUserCircle },
    { path: '#', label: 'Dashboard', icon: faChartPie },
    { path: '../Courses/index.html', label: 'Courses', icon: faBook },
    { path: '#', label: 'Calendar', icon: faCalendar },
    { path: '#', label: 'Inbox', icon: faInbox },
    { path: '#', label: 'History', icon: faClock },
    { path: '#', label: 'Studio', icon: faPlay },
    { path: '#', label: 'Commons', icon: faArrowCircleRight },
    { path: '#', label: 'Help', icon: faQuestionCircle },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="fixed-sidebar">
          {links.map((link, index) => (
            <div className="icon-link" key={index}>
              <Link to={link.path} className="sidebar-link">
                <FontAwesomeIcon icon={link.icon} />
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KanbasNavigation;
