import React, { useState } from "react";
import RadioButton from "../../../components/Forms/RadioButton/RadioButton";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";

const RadioButtonDemo: React.FC = () => {

  usePageTitle("RadioButton", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "RadioButton", href: "/demo/radio" },
  ]);

  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
    <section className="centered centered--wide">
    <h1>Default</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Disabled</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        disabled={true}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Color</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Magenta}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />
      <h1>Required</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Primary}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
        validationErrorMessage='Field is required.'
      />

      <h1>Group</h1>
      <div>
        <RadioButton
          value='option1'
          label='Option 1'
          name="group1"
          checked={selectedValue === 'option1'}
          onChange={handleRadioChange}
        />
        <RadioButton
          value='option2'
          label='Option 2'
          name="group1"
          checked={selectedValue === 'option2'}
          onChange={handleRadioChange}
        />
      </div>
      <p>Selected value: {selectedValue}</p>
    </section>
    <section className="centered centered--wide bg-surface-dark">
    <h1>Default</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Disabled</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        disabled={true}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Color</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Magenta}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />
      <h1>Required</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Primary}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
        validationErrorMessage='Field is required.'
      />

      <h1>Group</h1>
      <div>
        <RadioButton
          value='option1'
          label='Option 1'
          name="group1"
          checked={selectedValue === 'option1'}
          onChange={handleRadioChange}
        />
        <RadioButton
          value='option2'
          label='Option 2'
          name="group1"
          checked={selectedValue === 'option2'}
          onChange={handleRadioChange}
        />
      </div>
      <p>Selected value: {selectedValue}</p>
    </section>
    <section className="centered centered--wide bg-surface-light">
    <h1>Default</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Disabled</h1>
      <RadioButton
        value='option1'
        label='Option 1'
        disabled={true}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />

      <h1>Color</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Magenta}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
      />
      <h1>Required</h1>
      <RadioButton
        value='option1'
        label='I am a required radiobutton'
        color={ColorDefinitions.Primary}
        checked={selectedValue === 'option1'}
        onChange={handleRadioChange}
        validationErrorMessage='Field is required.'
      />

      <h1>Group</h1>
      <div>
        <RadioButton
          value='option1'
          label='Option 1'
          name="group1"
          checked={selectedValue === 'option1'}
          onChange={handleRadioChange}
        />
        <RadioButton
          value='option2'
          label='Option 2'
          name="group1"
          checked={selectedValue === 'option2'}
          onChange={handleRadioChange}
        />
      </div>
      <p>Selected value: {selectedValue}</p>
    </section>
    </>
  )
};

export default RadioButtonDemo;