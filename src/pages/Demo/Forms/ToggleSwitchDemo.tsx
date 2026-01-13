import React from "react";
import Toggle from "../../../components/Forms/Toggle/Toggle";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";


const ToggleSwitchDemo: React.FC = () => {


  usePageTitle("ToggleSwitch", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "ToggleSwitch", href: "/demo/toggleswitch" },
  ]);
  
  const [checked, onChange] = React.useState(false);

  return (
    <>
      <section className="centered centered--wide">
        <h3>Default</h3>
        <Toggle checked={checked}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Label left</h3>
        <Toggle checked={checked} labelPosition="left"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Label right</h3>
        <Toggle checked={checked} labelPosition="right"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Colored</h3>
        <Toggle checked={checked} labelPosition="right"
          color={ColorDefinitions.Purple}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Validation</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          validationErrorMessage='Field is required'
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Inline TODO</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />
      </section>
      <section className="centered centered--wide bg-surface-dark">
        <h3>Default</h3>
        <Toggle checked={checked}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Label left</h3>
        <Toggle checked={checked} labelPosition="left"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Label right</h3>
        <Toggle checked={checked} labelPosition="right"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Colored</h3>
        <Toggle checked={checked} labelPosition="right"
          color={ColorDefinitions.Purple}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Validation</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          validationErrorMessage='Field is required'
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Inline TODO</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />
      </section>
      <section className="centered centered--wide bg-surface-light">
        <h3>Default</h3>
        <Toggle checked={checked}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Label left</h3>
        <Toggle checked={checked} labelPosition="left"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Label right</h3>
        <Toggle checked={checked} labelPosition="right"
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />

        <h3>Colored</h3>
        <Toggle checked={checked} labelPosition="right"
          color={ColorDefinitions.Purple}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Validation</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          validationErrorMessage='Field is required'
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />


        <h3>Inline TODO</h3>
        <Toggle checked={checked}
          color={ColorDefinitions.Primary}
          label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'} `}
          onChange={onChange} />
      </section>

    </>
  )
};

export default ToggleSwitchDemo;
