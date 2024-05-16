import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    textAling: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
