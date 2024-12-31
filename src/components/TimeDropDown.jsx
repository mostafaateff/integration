import React from 'react';

function TimeDropDown() {
  
  const hours = Array.from({ length: 12}, (_, index) => {
    const hour = index + 9; 
    const suffix = hour < 12 ? 'AM' : 'PM'; 
    return hour > 12 ? hour - 12  : hour ; 
  });

  return (
    <div className=" d-flex justify-content-between align-content-center  g-0">
    <div className=" w-30">
      <select className="form-select  rounded" aria-label="Select time" >
        <option selected className="buttons ">select time</option>
        {hours.map((hour, index) => (
          <option key={index} value={hour}>
            {hour}
          </option>
        ))}
      </select>
    </div>
    <div className="w-10 ms-1">
    <select className="form-select " aria-label="Select time" >
    <option selected className="buttons">am</option>
    <option value="1" className="buttons" >pm</option>
    </select>
    </div>
    </div>
  );
}

export default TimeDropDown;
