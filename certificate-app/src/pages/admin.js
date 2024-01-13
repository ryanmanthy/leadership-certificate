import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      {/* Search Bar for Students */}
      <div className="p-4">
        <input type="search" placeholder="Search students..." className="input input-bordered input-red-500 w-full mb-4" />
      </div>

      {/* Add Seminar Form */}
      <div className="p-4">
        <div className="card bg-white shadow-xl p-4">
          <h2 className="text-2xl mb-2">Add Seminar</h2>
          <div className="form-control">
            <label className="label" htmlFor="seminar-id">
              <span className="label-text">Seminar ID</span>
            </label>
            <input type="text" id="seminar-id" placeholder="Seminar ID" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="seminar-title">
              <span className="label-text">Seminar Title</span>
            </label>
            <input type="text" id="seminar-title" placeholder="Seminar Title" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="seminar-description">
              <span className="label-text">Seminar Description</span>
            </label>
            <textarea id="seminar-description" placeholder="Seminar Description" className="textarea textarea-bordered" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="seminar-hours">
              <span className="label-text">Hours</span>
            </label>
            <input type="number" id="seminar-hours" placeholder="Hours" className="input input-bordered" />
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-red-500">Add Seminar</button>
          </div>
        </div>
      </div>

      {/* Manage Users */}
      <div className="p-4">
        <div className="card bg-white shadow-xl p-4">
          <h2 className="text-2xl mb-2">Manage Users</h2>
          {/* Form and controls for managing users */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
