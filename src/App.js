import React, { Component } from "react";
import SalaryPage from "./pages/salaryPage";
import PagesContainer from "./components/container/container";

export default class App extends Component {
  render() {
    return (
      <PagesContainer>
        <SalaryPage />
      </PagesContainer>
    );
  }
}
