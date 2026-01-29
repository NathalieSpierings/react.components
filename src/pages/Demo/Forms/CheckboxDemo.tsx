import React, { useState } from "react";
import Checkbox from "../../../components/Forms/Checkbox/Checkbox";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";


const CheckboxDemo: React.FC = () => {
  usePageTitle("Checkbox", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Checkbox", href: "/demo/checkbox" },
  ]);
  

  const [checked, onChange] = useState(false);


  return (
    <>
     <h2>Surface light</h2>
    <section className="centered centered--wide bg-surface-light">
      <h1>Checkbox</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange} />

<Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={true}
        onChange={onChange} />


      <h1>Checkbox color</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange}
        color={ColorDefinitions.Pink}
      />
      <h1>Validation error</h1>
      <div className="form-field form-field__invalid">
        <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
          defaultChecked={false}
          onChange={onChange}
        />
        <div className="field-validation-error">
          <span>The field is required.</span>
        </div>
      </div>
    </section>

     <h2>Surface</h2>
    <section className="centered centered--wide bg-surface">
      <h1>Checkbox</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange} />

          <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={true}
        onChange={onChange} />

      <h1>Checkbox color</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange}
        color={ColorDefinitions.Pink}
      />
      <h1>Validation error</h1>
      <div className="form-field form-field__invalid">
        <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
          defaultChecked={false}
          onChange={onChange}
        />
        <div className="field-validation-error">
          <span>The field is required.</span>
        </div>
      </div>
    </section>
    
    <h2>Surface dark</h2>
    <section className="centered centered--wide bg-surface-dark">
      <h1>Checkbox</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange} />

         <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={true}
        onChange={onChange} />

      <h1>Checkbox color</h1>
      <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
        defaultChecked={false}
        onChange={onChange}
        color={ColorDefinitions.Pink}
      />
      <h1>Validation error</h1>
      <div className="form-field form-field__invalid">
        <Checkbox label={`Are you sure you like this: ${checked ? 'sure!' : 'nahh'}`}
          defaultChecked={false} validationErrorMessage="The field is required."
          onChange={onChange}
        />
      </div>
    </section>
    
    
    </>
  )
};

export default CheckboxDemo;
