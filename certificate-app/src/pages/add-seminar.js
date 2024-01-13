import React from 'react';

const AddSeminar = () => {
  return (
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <div className="form-control w-full max-w-lg mx-auto my-10">
        <label className="label" htmlFor="seminar-name">
          <span className="label-text text-red-500">Seminar Name</span>
        </label>
        <input type="text" id="seminar-name" placeholder="Enter seminar name" className="input input-bordered input-red-500 w-full" />

        <label className="label" htmlFor="seminar-date">
          <span className="label-text text-red-500">Date</span>
        </label>
        <input type="date" id="seminar-date" className="input input-bordered input-red-500 w-full" />

        <label className="label" htmlFor="seminar-time">
          <span className="label-text text-red-500">Time</span>
        </label>
        <input type="time" id="seminar-time" className="input input-bordered input-red-500 w-full" />

        <label className="label" htmlFor="seminar-description">
          <span className="label-text text-red-500">Description</span>
        </label>
        <textarea id="seminar-description" placeholder="Describe the seminar" className="textarea textarea-bordered textarea-red-500 w-full" />

        <button className="btn btn-red-500 mt-4">Add Seminar</button>
      </div>
    </div>
  );
};

export default AddSeminar;
