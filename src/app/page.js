import React from 'react';

const WaveComponent = () => {
  const waveStyle = {
    textAlign: 'center',
  };

  const waveItemStyle = {
    width: '5px',
    height: '100px',
    background: 'linear-gradient(45deg, cyan, #fff)',
    margin: '10px',
    animation: 'wave 1s linear infinite',
    borderRadius: '20px',
  };

  return (
    <div style={waveStyle}>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          style={{
            ...waveItemStyle,
            animationDelay: `${index * 0.1}s`,
          }}
        ></div>
      ))}
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @keyframes wave {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(1);
            }
            100% {
              transform: scale(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WaveComponent;
