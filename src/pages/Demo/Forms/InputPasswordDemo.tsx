import React, { useState } from "react";
import PasswordInput from "../../../components/Forms/PasswordInput/PasswordInput";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";

const InputPasswordDemo: React.FC = () => {

  usePageTitle("Input", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Password Input", href: "/demo/inputpassword" },
  ]);

  const [password, setPassword] = useState('');

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <section className="centered centered--wide">

      <h3>Default</h3>
      <div className="grid mb-3">
        <PasswordInput 
        name="password" 
        label="Password" 
        onChange={onChangePassword}
        value={password} />
      </div>

      <h3>Password with check</h3>
      <div className="grid mb-3">
        <PasswordInput
          name="password"
          label="Password"
          value={password}
          usePasswordCheck={true}
          onTextInput={setPassword}
          onKeyUp={() => handleKeyUp}
        />
      </div>



    </section>

  )
};

export default InputPasswordDemo;