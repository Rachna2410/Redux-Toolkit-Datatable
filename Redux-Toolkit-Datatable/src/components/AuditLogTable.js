import React from "react";
import DataTable from "react-data-table-component";

const AuditLogTable = ({ currentItems }) => {
  const columns = [
    { name: "Log ID", selector: (row) => row.logId },
    { name: "Application Type", selector: (row) => row.applicationType },
    { name: "Application ID", selector: (row) => row.applicationId },
    { name: "Action", selector: (row) => row.actionType },
    { name: "Action Details", selector: (row) => "-/-" },
    { name: "Date : Time", selector: (row) => row.creationTimestamp },
  ];

  return (
    <div className="container">
      <DataTable columns={columns} data={currentItems} />
    </div>
  );
};

export default AuditLogTable;
