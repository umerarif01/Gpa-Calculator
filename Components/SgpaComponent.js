import React from "react";

function SgpaComponent(props) {
  return (
    <div
      className="flex flex-row space-x-5 shadow-md py-4 px-4
     font-semibold rounded-md "
    >
      {/* 2xl:w-[520px] */}
      <input
        type="text"
        id="name"
        name="subjectName"
        placeholder={props.subject}
        className="border-2 border-gray-100 rounded-md p-2 w-[75px] 2xl:w-[200px]"
        // border-2 border-gray-300 rounded-lg p-1
      />

      <select
        className="border-2 border-gray-100 rounded-lg p-1"
        onChange={(event) => props.handleCredits(event, props.index)}
        credits={props.credit}
      >
        <option credits="1">1</option>
        <option credits="2">2</option>
        <option credits="3">3</option>
        <option credits="4">4</option>
        <option credits="None">None</option>
      </select>
      <div className="">
        <p className="w-[35px] p-2">{props.point}</p>
      </div>
      <select
        className="border-2 border-gray-200 rounded-lg p-1"
        onChange={(event) => props.handleGrade(event, props.index)}
        grade={props.grade}
      >
        <option grade="A+">A+</option>
        <option grade="A">A</option>
        <option grade="A-">A-</option>
        <option grade="B+">B+</option>
        <option grade="B">B</option>
        <option grade="B-">B-</option>
        <option grade="C+">C+</option>
        <option grade="C">C</option>
        <option grade="C-">C-</option>
        <option grade="D+">D+</option>
        <option grade="D">D</option>
        <option grade="F">F</option>
        <option credits="None">None</option>
      </select>
      <button
        className="text-red-500 font-bold"
        onClick={() => props.handleDelete(props.index)}
      >
        X
      </button>
    </div>
  );
}

export default SgpaComponent;
