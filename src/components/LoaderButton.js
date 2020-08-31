import React from "react";
import { Button, Spinner } from "react-bootstrap";
import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Spinner
          className="spinner"
          animation="border"
          aria-hidden="true"
          role="status"
          as="span"
          size="sm"
        />
      )}
      {props.children}
    </Button>
  );
}
