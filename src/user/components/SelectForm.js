import React from 'react';
import SelectOptions from "./SelectOptions"

const SelectForm = ({className}) => {
  // console.log(className);
    return (
        <select className={className} id="optionsMatch">
          <SelectOptions />
        </select>
    );
}

export default SelectForm;
