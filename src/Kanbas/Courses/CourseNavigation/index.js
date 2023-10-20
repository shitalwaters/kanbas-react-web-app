import {Link, useLocation, useParams} from 'react-router-dom';

const CourseNavigation = () => {
  const { courseid } = useParams();
  const location = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings"
  ];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link 
            to={`/course/${courseid}/${link.toLowerCase().replace(" ", "-")}`}
            className={location.pathname.includes(link.toLowerCase().replace(" ", "-")) ? "active" : ""}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CourseNavigation;
