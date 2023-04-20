import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../components/DummyData/dummyData";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import "./user-list.css";
import "../../components/DummyData/dummy.css";

const Userlist = () => {
  const [data, setData] = useState(rows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <img src={params.row.avatar} alt="" className="userlist-img" />
            {params.row.firstName}
          </>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction Window",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlist-button-edit">Edit</button>
            </Link>
            <button
              className="userlist-button"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlineOutlinedIcon className="userlist-button-delete" />
            </button>
          </>
        );
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((items) => items.id !== id));
  };

  return (
    <div className="user-list">
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Userlist;
