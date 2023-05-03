import React from "react";

const HorizonLine = ({ color }) => (
    <hr style = {{
        color: color,
        backgroundColor: color,
        height: 1
    }}
    />
);

export default HorizonLine;