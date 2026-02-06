import React, { useState } from "react";
import { Input, StaticInput } from "../../../components/Forms/Input/Input";
import PasswordInput from "../../../components/Forms/PasswordInput/PasswordInput";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { ColorDefinitions, IconDefinitions } from "../../../lib/utils/definitions";
import { Select, StaticTextArea, TextArea } from "../../../components";

const InputDemo: React.FC = () => {

  usePageTitle("Input", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Input", href: "/demo/input" },
  ]);



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const onChangeFirstname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const onChangeLastname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };


  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
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
      <div className="grid mb-3">
        <div>
          <h3>Default</h3>
          <Input
            name="firstname"
            label="Firstname"
            onChange={onChangeFirstname}
            value={firstName}
          />

          <TextArea
            name="message"
            label="Message"
            onChange={onChangeMessage}
            value={message}
          />

          <h3>Inline</h3>
          <Input
            inline={true}
            name="firstname"
            label="Firstname"
            onChange={onChangeFirstname}
            value={firstName}
          />

          <TextArea
            inline={true}
            name="message"
            label="Message"
            onChange={onChangeMessage}
            value={message}
          />

        </div>
        <div>
          <h3>Simple</h3>
          <Input name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            variant="simple"
          />

          <TextArea
            variant="simple"
            name="message"
            label="Message"
            onChange={onChangeMessage}
            value={message}
          />

          <h3>Inline</h3>
          <Input name="lastName"
            label="Lastname"
            onChange={onChangeLastname}
            value={lastName}
            variant="simple"
            inline={true}
          />

          <TextArea
            variant="simple"
            name="message"
            label="Message"
            onChange={onChangeMessage}
            value={message}
            inline={true}
          />
        </div>
      </div>


      <h3>Small</h3>
      <Input name="lastName"
        label="Lastname"
        onChange={onChangeLastname} value={lastName} small={true}
      />

      <TextArea
        small={true}
        color={ColorDefinitions.Surface}
        name="message"
        label="Message"
        onChange={onChangeMessage}
        value={message}
      />




      <h3>Static</h3>
      <StaticInput label={'Firstname'} value="John" />
      <StaticTextArea label={'Message'} value="I am a message" />


      <h3>Static with colon</h3>
      <StaticInput label={'Firstname'} value="John" colon={true} />
      <StaticTextArea label={'Message'} value="I am a message" colon={true} />


      <h3>Static inline</h3>
      <StaticInput label={'Firstname'} value="John" inline={true} />
      <StaticTextArea label={'Message'} value="I am a message" inline={true} />
      <StaticInput label={'Lastname'} value="Doe" inline={true} />


      <h3>Static inline same line</h3>
      <StaticInput label={'Firstname'} value="John" inline={true} sameLine={true} />
      <StaticTextArea label={'Message'} value="I am a message" inline={true} sameLine={true} />


      <h3>Static inline with colon</h3>
      <StaticInput label={'Firstname'} value="John" inline={true} colon={true} />
      <StaticTextArea label={'Message'} value="I am a message" inline={true} colon={true} />


      <h3>Inline</h3>

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