import React, { useEffect, useState } from "react";
import Cases from "../../Data/Cases";
import { Paper } from "@mui/material";

const CaseStudy = ({ id }) => {
  const [show, setShow] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);

  useEffect(() => {
    console.log(show);
  }, [show]);

  return (
    <section id={id} className="case-study-section offset">
      <article className="case-study-content">
        <h2 className="section-title">Case Studies</h2>
        <p className="subtitle">
          Here are some of my current Works in Progress. These projects are
          still under development, so please check back for updates on my
          progress and to see the final results once they're completed.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Cases &&
            Cases.map((item) => {
              return (
                <Paper
                  elevation={3}
                  sx={{
                    ".light &": {
                      backgroundColor: "#eeeeee",
                    },
                    ".dark &": {
                      backgroundColor: "#5d5d5d",
                      color: "#2d2e32",
                    },
                  }}
                  className="case-study"
                  key={item.id}
                >
                  <h3 className="case-study-title">{item.title}</h3>
                  <p className="case-study-description">{item.description}</p>
                  <button
                    className="case-study-btn"
                    onClick={() => {
                      setCurrentCase(item);
                      setShow(!show);
                    }}
                  >
                    Read More
                  </button>
                </Paper>
              );
            })}
        </div>
      </article>
      {show && (
        <div
          className={`modal ${show ? "active" : ""}`}
          onClick={() => setShow(!show)}
        >
          <div className="modal-content">
            <h2 className="current-case-title">{currentCase.title}</h2>
            <hr style={{ marginBottom: "1rem" }} />
            {currentCase.body.map((item, index) => {
              return (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5rem",
                      margin: ".5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    {item.body.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                    {item.list && (
                      <ul style={{ marginLeft: "2rem" }}>
                        {item.list.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
            <button className="btn-close" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudy;
