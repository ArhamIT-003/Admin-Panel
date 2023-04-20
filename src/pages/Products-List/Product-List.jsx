import { DataGrid } from "@mui/x-data-grid";
import { Productsrows } from "../../components/DummyData/dummyData";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
import "./productlist.css";

export const ProductList = () => {
  const [data, setData] = useState(Productsrows);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product name",
      width: 300,
      editable: true,
      renderCell: (params) => {
        return (
          <>
            <img src={params.row.img} alt="" className="productlist-img" />
            {params.row.name}
          </>
        );
      },
    },
    {
      field: "stock",
      headerName: "stock",
      width: 300,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price Range",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productlist-button-edit">Edit</button>
            </Link>
            <button
              className="productlist-button"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteOutlineOutlinedIcon className="productlist-button-delete" />
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
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};
