import React, { useState } from "react";
import { DateInput } from "../../../components/Forms/DateInput/DateInput";
import Datepicker from "../../../components/Forms/Datepicker/Datepicker";
import { Input, StaticInput } from "../../../components/Forms/Input/Input";
import PasswordInput from "../../../components/Forms/PasswordInput/PasswordInput";
import Select from "../../../components/Forms/Select/Select";
import { TextArea } from "../../../components/Forms/TextArea";
import { ColorDefinitions, IconDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";

const InputDemo: React.FC = () => {

  usePageTitle("Input", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Input", href: "/demo/input" },
  ]);



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  const [password, setPassword] = useState('');

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

   const handleKeyUp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
      <section className="centered centered--wide">

        <h3>Default</h3>
        <div className="grid mb-3">
          <Input
            color={ColorDefinitions.Surface}
            name="firstname"
            label="Firstname"
            onChange={onChangeFirstname}
            value={firstName}
          />
        </div>

        <h3>Small</h3>
        <div className="grid mb-3">
          <Input name="lastName"
            label="Lastname"
            onChange={onChangeLastname} value={lastName}
          />
        </div>

        <h3>Simple</h3>
        <div className="grid mb-3">
          <Input name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            variant="simple"
          />
        </div>

        <h3>Static</h3>
        <div className="grid mb-3">
          <StaticInput label={'Firstname'} value="John" />
        </div>

        <h3>StaticWithColon</h3>
        <div className="grid mb-3">
          <StaticInput label={'Firstname'} value="John" colon={true} />
        </div>

        <h3>StaticInline</h3>
        <div className="grid mb-3">
          <StaticInput label={'Firstname'} value="John" inline={true} />
        </div>

        <h3>StaticInlineWithColon</h3>
        <div className="grid mb-3">
          <StaticInput label={'Firstname'} value="John" inline={true} colon={true} />
        </div>

        <h3>Inline</h3>
        <div className="grid mb-3">
          <div className="form-inline">
            <Input
              inline={true}
              variant="simple"
              name="firstname"
              label="Firstname"
              onChange={onChangeFirstname}
              value={firstName}
            />
            <Input
              inline={true}
              variant="simple"
              name="lastname"
              label="Lastname"
              onChange={onChangeLastname}
              value={lastName}
            />
          </div>
        </div>

        <h3>InfoText</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            infoText="Your name will be private"
          />
        </div>

        <h3>AddonBefore</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            addonIcon={IconDefinitions.calendar_day}
            addonIconDuotone={true}
            addonVariant="before"
          />
        </div>

        <h3>AddonOnFocus</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            addonIcon={IconDefinitions.user}
            addonIconDuotone={true}
            addonVariant="focus"
          />
        </div>

        <h3>AddonInline</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            addonIcon={IconDefinitions.user}
            addonIconDuotone={true}
            addonVariant="inline"
          />
        </div>

        <h3>Colored</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            color={ColorDefinitions.Green}
          />
        </div>


        <h3>Validation</h3>
        <div className="grid mb-3">
          <Input
            name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            validationErrorMessage="Field is required"
          />
        </div>

        <h3>Password</h3>
        <div className="grid mb-3">
           <PasswordInput name="password" label="Password" onInput={onChangePassword} value={password} />
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

        <h3>AutocompleOn</h3>
        <div className="grid mb-3">
          <Input
            name="firstname"
            label="Firstname"
            onChange={onChangeFirstname}
            value={firstName}
            autoComplete="on"
          />
        </div>

        <h3>OnTextInput</h3>
        <div className="grid mb-3">
          <Input name="firstname" label="Firstname" onTextInput={setFirstName} value={firstName} />
        </div>


<h3>OnInput</h3>
        <div className="grid mb-3">
           <Input
            name="firstname"
            label="Firstname"
            onInput={(e) => setFirstName((e.target as HTMLInputElement).value)}
            value={firstName}
        />
        </div>



      </section>

  )
};

export default InputDemo;