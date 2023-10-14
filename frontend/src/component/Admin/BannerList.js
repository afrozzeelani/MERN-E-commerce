import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_BANNER_RESET } from "../../constants/BannerConstants"; // Import your constants
import { listBanners } from "../../actions/BannerActions";


const BannerList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const { error, banners } = useSelector((state) => state.banners); // Update the state selector

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.banner // Update the state selector
  );

  const deleteBannerHandler = (id) => {
    // eslint-disable-next-line no-undef
    dispatch(deleteBanner(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    if (deleteError) {
      alert.error(deleteError);
    }

    if (isDeleted) {
      alert.success("Banner Deleted Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: DELETE_BANNER_RESET });
    }

    dispatch(listBanners()); // Dispatch the listBanners action to get the list of banners
  }, [dispatch, alert, error, navigate, deleteError, isDeleted]);

  const columns = [
    { field: "id", headerName: "Banner ID", minWidth: 250, flex: 1.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
    },
    {
      field: "actions",
      flex: 1,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/banner/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteBannerHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = banners || []; // Use banners or an empty array

  return (
    <Fragment>
      <div className="dashboard">
        <SideBar />
        <div className="bannerListContainer">
          <h1 id="bannerListHeading">ALL BANNERS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="bannerListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BannerList;
