import React from "react";

const UpperForm = () => {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col">
            <label>Employee Name</label>

            <input
              type="text"
              className="form-control"
              placeholder="Employee Name"
            />
          </div>

          <div className="col">
            <label>Action Type</label>

            <select name="application" id="dog-names" className="form-control">
              <option value="">Select</option>
              <option value="rigatoni">CERT_TITLE_DEED_PLOT</option>

              <option value="dave">LEASE_REGISTRATION</option>

              <option value="pumpernickel">ADD_POA</option>

              <option value="reeses">LEASE_REGISTRATION</option>
            </select>
          </div>

          <div className="col">
            <label>Application Type</label>

            <select name="application" id="dog-names" className="form-control">
              <option value="">Select</option>
              <option value="rigatoni">lease renwal</option>

              <option value="dave">Tenancy contarct registartion</option>

              <option value="pumpernickel">Add Poa</option>

              <option value="reeses">Reeses</option>
            </select>
          </div>

          <div className="col">
            <label>Form Date</label>

            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <label>To Date</label>

            <input type="date" className="form-control" />
          </div>

          <div className="col">
            <label>Application Id</label>

            <input
              type="text"
              className="form-control"
              placeholder="e.g. 2898690"
            />
          </div>

          <div className="col">
            <button type="button" className="btn btn-primary mt-4">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpperForm;
