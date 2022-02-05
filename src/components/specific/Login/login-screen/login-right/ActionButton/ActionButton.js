import React from "react";

export default function ActionButton(props) {
  const { icon, children, onClick } = props;
  return (
    <>
      <div class="action_button" onClick={onClick}>
          {icon && <div class="action_image">{icon}</div> }
          <span>{children}</span>
      </div>
    </>
  );
}
