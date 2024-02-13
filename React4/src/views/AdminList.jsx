import { useState } from "react";
import { Link } from "react-router-dom";
import PageAdminList from "../components/adminList/PageAdminList";
import Footer from "../components/NavFooter/Footer";
import Navbar from "../components/NavFooter/Navbar";
import "./AdminList.css";

function AdminList() {
  return (
    <>
      <Navbar />

      <PageAdminList />

      <Footer />
    </>
  );
}

export default AdminList;
