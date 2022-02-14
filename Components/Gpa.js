import React, { useEffect, useState } from "react";
import SgpaComponent from "./SgpaComponent";

function Gpa() {
  const [subjects, setSubjects] = useState(["Name"]);
  const [grades, setGrades] = useState(["A+"]);
  const [points, setPoints] = useState([4]);
  const [credits, setCredits] = useState([1]);
  const [sgpa, setSgpa] = useState();
  function handleAdd() {
    setSubjects((prev) => [...prev, "Name"]);
    setGrades((prev) => [...prev, "A+"]);
    setPoints((prev) => [...prev, 4]);
    setCredits((prev) => [...prev, 1]);
  }
  useEffect(() => {
    // handlePoints();
    calcSgpa();
  });

  function calcSgpa() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
      if (credits[i] !== "none" || points[i] !== "none") {
        totalCredits = totalCredits + parseFloat(credits[i]);
      }
    }

    for (let i = 0; i < points.length; i++) {
      if (credits[i] !== "none" || points[i] !== "none") {
        totalPoints += points[i] * credits[i];
      }
    }

    setSgpa(totalPoints / totalCredits);
    totalPoints = 0;
    totalCredits = 0;
  }

  function handleGrade(event, i) {
    let newGrades = [...grades];
    newGrades[i] = event.target.value;
    handlePoints(newGrades[i], i);
    setGrades(newGrades);
  }

  function handleDelete(valueIndex) {
    setPoints(points.filter((point, index) => valueIndex !== index));
    setCredits(credits.filter((credit, index) => valueIndex !== index));
    setGrades(grades.filter((grade, index) => valueIndex !== index));
    setSubjects(subjects.filter((subject, index) => valueIndex !== index));
  }

  function handleCredits(event, i) {
    let newCredits = [...credits];
    newCredits[i] = event.target.value;
    setCredits(newCredits);
  }

  function handlePoints(grades, i) {
    if (grades === "A+" || grades === "A") {
      const newPoints = [...points];
      newPoints[i] = 4;
      setPoints(newPoints);
    }
    if (grades === "A-") {
      let newPoints = [...points];
      newPoints[i] = 3.67;
      setPoints(newPoints);
    }
    if (grades === "B+") {
      let newPoints = [...points];
      newPoints[i] = 3.33;
      setPoints(newPoints);
    }

    if (grades === "B") {
      let newPoints = [...points];
      newPoints[i] = 3.0;
      setPoints(newPoints);
    }
    if (grades === "B-") {
      let newPoints = [...points];
      newPoints[i] = 2.67;
      setPoints(newPoints);
    }
    if (grades === "C+") {
      let newPoints = [...points];
      newPoints[i] = 2.33;
      setPoints(newPoints);
    }
    if (grades === "C") {
      let newPoints = [...points];
      newPoints[i] = 2.0;
      setPoints(newPoints);
    }
    if (grades === "C-") {
      let newPoints = [...points];
      newPoints[i] = 1.67;
      setPoints(newPoints);
    }
    if (grades === "D+") {
      let newPoints = [...points];
      newPoints[i] = 1.37;
      setPoints(newPoints);
    }
    if (grades === "D") {
      let newPoints = [...points];
      newPoints[i] = 1.0;
      setPoints(newPoints);
    }
    if (grades === "F") {
      let newPoints = [...points];
      newPoints[i] = 0;
      setPoints(newPoints);
    }
  }
  return (
    <div className="flex justify-center items-center flex-col space-y-3">
      <div className="flex justify-center items-center p-3 text-white bg-purple-400 rounded-md">
        <div className="pb-2" />
        <h1 className="text-xl font-semibold 2xl:text-2xl"> GPA : {sgpa}</h1>
      </div>
      <br />

      {subjects.map((subject, i) => {
        return (
          <div className="">
            <SgpaComponent
              handleDelete={handleDelete}
              subject={subject}
              grade={grades[i]}
              credit={credits[i]}
              point={points[i]}
              index={i}
              handleGrade={handleGrade}
              handleCredits={handleCredits}
            />
          </div>
        );
      })}
      <button
        className="p-2 text-white font-semibold bg-green-400 rounded-md hover:bg-green-500 transition"
        onClick={handleAdd}
      >
        + Add More
      </button>
      <div className="pb-2" />
    </div>
  );
}

export default Gpa;
