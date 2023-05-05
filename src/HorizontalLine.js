const HorizonLine = ({ color, text }) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginTop : '20px',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'relative',
        height: '1px',
        width: '800px'
     
        
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '0 10px',
          zIndex: 1,
        }}
      >
        {text}
      </span>
      <hr
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: color,
          border: 'none',
          margin: 0,
          position: 'absolute',
          top: '50%',
          left: 0,
          zIndex: 0,
        }}
      />
    </div>
  );
  
  export default HorizonLine;
  