import React, { FC } from "react";

interface Step1Props {
  firstName: string;
  onChange: (value: string) => void;
}

const Step1: FC<Step1Props> = ({ firstName, onChange }) => {
  
  return (
    <div>
      <label>FirstName:</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="FirstName"
      />
    </div>
  );
};

export default Step1;