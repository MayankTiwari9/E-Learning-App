import React from 'react'

const OnlineCourseNav = () => {
    const OnlineCourseTopics = [
        { topic: "Java" },
        { topic: "JavaScript" },
        { topic: "Python" },
        { topic: "C" },
        { topic: "Cpp" },
      ];

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary w-100"
        data-bs-theme="dark"
      >
        <div className="container-fluid w-100">
          <div id="navbarText" style={{ width: "100%" }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around">
              {OnlineCourseTopics.map((item) => (
                <li className="nav-item" key={item.topic}>
                  <a className={`nav-link active`} href={`/online-course/${item.topic}`}>
                    {item.topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default OnlineCourseNav;