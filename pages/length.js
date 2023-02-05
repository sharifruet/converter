import React, { useState, useEffect } from 'react';

const Length = () => {
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState('meters');
  const [feet, setFeet] = useState(0);
  const [yards, setYards] = useState(0);
  const [meters, setMeters] = useState(0);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  useEffect(() => {
    const performConversion = () => {
      switch (unit) {
        case 'meters':
          setMeters(value);
          break;
        case 'feet':
          setMeters(value * 0.3048);
          break;
        case 'yards':
		      setMeters(value*0.9144);
          break;
        default:
          break;
      }
      setFeet();
      setYards()
    };
    performConversion();
  }, [value, unit]);

  return (
    <div className="length">
      <div className="length__container">
	
			<input
			  type="number"
			  value={value}
			  onChange={handleValueChange}
			  className="length__input input"
			/>
	

			<input
			  type="text"
			  list="units"
			  value={unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase()}
			  onChange={handleUnitChange}
			  className="length__input unit"
			/>
	
        <datalist id="units">
          <option value="meters">Meters</option>
          <option value="feet">Feet</option>
          <option value="yards">Yards</option>
        </datalist>
      </div>
      <div className="length__converted">
		<div className="item"> <div className="content">{meters}</div> <div className="label">Meters</div></div>
        <div className="item"> <div className="content">{feet}</div> <div className="label">Feet</div> </div>
        <div className="item"> <div className="content">{yards}</div> <div className="label">Yards</div></div>
      </div>
    </div>
  );
};

export default Length;
