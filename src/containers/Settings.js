import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Settings.css";

// import { useRouteMatch, Route, Switch } from "react-router-dom";

export default function Settings() {
  return (
    <div className="Settings">
      <LinkContainer to={"/settings/email"}>
        <LoaderButton block size="lg" variant="light">
          Change Email
        </LoaderButton>
      </LinkContainer>
      <LinkContainer to="/settings/password">
        <LoaderButton block size="lg" variant="light">
          Change Password
        </LoaderButton>
      </LinkContainer>
    </div>
  );
}
