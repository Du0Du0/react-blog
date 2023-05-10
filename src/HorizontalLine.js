const HorizonLine = ({ color, text1, text2 }) => (
  <div div style={{marginTop: '60px'}} >
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      margin: "auto",
      marginTop: "20px",
      alignItems: "center",
      flexDirection: "row",
      position: "relative",
      height: "1px",
      width: "800px",
    }}
  >
    <span
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "0 10px",
        zIndex: 1,
      }}
    >
      <span style={{color: '#333333', fontWeight : 'bold'}}>{text1}</span>
      <span style={{color: 'rgb(0, 192, 154)', fontWeight : 'bold'}}>{text2}</span>
    </span>
    <hr
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: color,
        border: "none",
        margin: 0,
        position: "absolute",
        top: "50%",
        left: 0,
        zIndex: 0,
      }}
    />
  </div>
  </div>
);
  
  export default HorizonLine;
  