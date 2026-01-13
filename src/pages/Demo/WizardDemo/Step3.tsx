import React, { FC } from "react";

interface Step3Props {
    subject: string;
  onChange: (value: string) => void;
}

const Step3: FC<Step3Props> = ({ subject, onChange }) => {
  
  return (
    <div>
      <label>Subject:</label>
      <input
        type="text"
        value={subject}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Subject"
      />
    </div>
  );
};

export default Step3;