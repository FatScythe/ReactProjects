import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading)
    return (
      <main id='six'>
        <section className='section loading'>
          <h1>Loading...</h1>
        </section>
      </main>
    );

  const { title, company, dates, duties } = jobs[value];

  return (
    <main id='six'>
      <section className='section'>
        <div className='title'>
          <h2>experience</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((job, index) => {
              return (
                <button
                  className={`job-btn ${value === index && "active-btn"}`}
                  onClick={() => setValue(index)}
                  key={job.id}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon' />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>

        <button type='button' className='btn'>
          more info
        </button>
      </section>
    </main>
  );
};

export default Jobs;
