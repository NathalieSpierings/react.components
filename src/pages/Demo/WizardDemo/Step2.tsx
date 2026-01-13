import React, { FC } from "react";

interface Step2Props {
  lastName: string;
  onChange: (value: string) => void;
}

const Step2: FC<Step2Props> = ({ lastName, onChange }) => {
  
  return (
    <div>
      <label>LastName:</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Lastname"
      />
    </div>
  );
};

export default Step2;