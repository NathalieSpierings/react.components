import React, { useState } from "react";
import Datepicker from "../../../components/Forms/Datepicker/Datepicker";
import { Input } from "../../../components/Forms/Input/Input";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";

const DatePickerDemo: React.FC = () => {

  usePageTitle("DatePicker", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "DatePicker", href: "/demo/datepicker" },
  ]);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="centered centered--wide">
      <h1>Default</h1>
      <Datepicker
      selected={startDate}
      onChange={(date: any) => setStartDate(date)}
      customInput={<Input label="Kies een datum" />}
    />    
    </section>
  )
};

export default DatePickerDemo;