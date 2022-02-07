import React from "react";

export default function ActionButton(props) {
  const { icon, children, onClick } = props;
  return (
    <>
      <div className="action_button" onClick={onClick}>
          {icon && <div className="action_image">{icon}</div> }
          <span>{children}</span>
      </div>
    </>
  );
}
