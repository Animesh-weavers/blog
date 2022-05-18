import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./Component/NavigationBar";
import AddArticle from "./Component/Page/AddArticle";
import Articles from "./Component/Page/Articles";
import Profile from "./Component/Page/Profile";

export default class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Articles />} />
          <Route path="/addarticle" element={<AddArticle />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </>
    );
  }
}
