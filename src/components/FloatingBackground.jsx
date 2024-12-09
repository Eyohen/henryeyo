import React from 'react';

const FloatingBackground = () => {
  const objects = [
    // Upper section
    { type: 'cube', color: '#FF9F1C', top: '5%', left: '10%', scale: 0.7 },
    { type: 'sphere', color: '#2EC4B6', top: '15%', left: '75%', scale: 0.6 },
    { type: 'pyramid', color: '#E71D36', top: '25%', left: '20%', scale: 0.8 },
    { type: 'cube', color: '#FF9F1C', top: '8%', left: '45%', scale: 0.5 },
    { type: 'sphere', color: '#2EC4B6', top: '18%', left: '85%', scale: 0.7 },
    { type: 'sphere', color: '#2EC4B6', top: '65%', left: '70%', scale: 0.7 },
    { type: 'pyramid', color: '#E71D36', top: '75%', left: '30%', scale: 0.6 },
    { type: 'cube', color: '#FF9F1C', top: '85%', left: '65%', scale: 0.8 },
    { type: 'sphere', color: '#2EC4B6', top: '70%', left: '15%', scale: 0.5 },
    { type: 'pyramid', color: '#E71D36', top: '80%', left: '85%', scale: 0.7 },
    
    
    // Middle section
    { type: 'pyramid', color: '#E71D36', top: '35%', left: '15%', scale: 0.6 },
    { type: 'cube', color: '#FF9F1C', top: '45%', left: '80%', scale: 0.8 },
    { type: 'sphere', color: '#2EC4B6', top: '55%', left: '25%', scale: 0.7 },
    { type: 'pyramid', color: '#E71D36', top: '40%', left: '60%', scale: 0.5 },
    { type: 'cube', color: '#FF9F1C', top: '48%', left: '40%', scale: 0.6 },
    { type: 'sphere', color: '#2EC4B6', top: '65%', left: '70%', scale: 0.7 },
    { type: 'pyramid', color: '#E71D36', top: '75%', left: '30%', scale: 0.6 },
    { type: 'cube', color: '#FF9F1C', top: '85%', left: '65%', scale: 0.8 },
    { type: 'sphere', color: '#2EC4B6', top: '70%', left: '15%', scale: 0.5 },
    { type: 'pyramid', color: '#E71D36', top: '80%', left: '85%', scale: 0.7 },

    
    // Lower section
    { type: 'sphere', color: '#2EC4B6', top: '65%', left: '70%', scale: 0.7 },
    { type: 'pyramid', color: '#E71D36', top: '75%', left: '30%', scale: 0.6 },
    { type: 'cube', color: '#FF9F1C', top: '85%', left: '65%', scale: 0.8 },
    { type: 'sphere', color: '#2EC4B6', top: '70%', left: '15%', scale: 0.5 },
    { type: 'pyramid', color: '#E71D36', top: '80%', left: '85%', scale: 0.7 },

    // Extra scattered objects
    { type: 'cube', color: '#FF9F1C', top: '32%', left: '92%', scale: 0.4 },
    { type: 'sphere', color: '#2EC4B6', top: '62%', left: '8%', scale: 0.4 },
    { type: 'pyramid', color: '#E71D36', top: '88%', left: '45%', scale: 0.4 },
    { type: 'cube', color: '#FF9F1C', top: '5%', left: '10%', scale: 0.7 },
    { type: 'sphere', color: '#2EC4B6', top: '15%', left: '75%', scale: 0.6 },
    { type: 'pyramid', color: '#E71D36', top: '25%', left: '20%', scale: 0.8 },
    { type: 'cube', color: '#FF9F1C', top: '8%', left: '45%', scale: 0.5 },
    { type: 'sphere', color: '#2EC4B6', top: '18%', left: '85%', scale: 0.7 },
  ];

  const renderObject = (obj, index) => {
    const baseStyle = {
      top: obj.top,
      left: obj.left,
      color: obj.color,
      transform: `scale(${obj.scale})`,
    };

    switch (obj.type) {
      case 'cube':
        return (
          <div 
            key={index}
            className={`floating-object cube float-delay-${index % 5 + 1}`}
            style={baseStyle}
          >
            <div className="cube-face cube-front"></div>
            <div className="cube-face cube-back"></div>
            <div className="cube-face cube-right"></div>
            <div className="cube-face cube-left"></div>
            <div className="cube-face cube-top"></div>
            <div className="cube-face cube-bottom"></div>
          </div>
        );
      case 'sphere':
        return (
          <div 
            key={index}
            className={`floating-object sphere float-delay-${index % 10 + 1}`}
            style={baseStyle}
          />
        );
      case 'pyramid':
        return (
          <div 
            key={index}
            className={`floating-object pyramid float-delay-${index % 10 + 1}`}
            style={baseStyle}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="floating-background">
      {objects.map((obj, index) => renderObject(obj, index))}
    </div>
  );
};

export default FloatingBackground;