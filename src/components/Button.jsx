import React from "react";
import {CircularProgress} from "@material-ui/core";


const Button = ({children, onClick, loading}) => {
  
  return(
    <div style={{height: "40px"}}>
      <button className="primary-button" onClick={onClick}>
        <div style={{display: "flex", alignItems: "center", gap: 8}}>
          {children}

          {loading &&
            <CircularProgress size={18} thickness={8} color="secondary" />
          }
        </div>
      </button>
    </div>
  )
};

export default Button;