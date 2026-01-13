import React, { FC } from "react";

interface Step4Props {
    message: string;
  onChange: (value: string) => void;
}

const Step4: FC<Step4Props> = ({ message, onChange }) => {
  
  return (
    <div>
      <label>Message:</label>
      <input
        type="text"
        value={message}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Message"
      />
    </div>
  );
};

export default Step4;