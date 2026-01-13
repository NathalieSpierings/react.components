import moment from "moment";
import React, { useState } from "react";
import { DateInput } from "../../../components/Forms/DateInput/DateInput";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";


const DateInputDemo: React.FC = () => {

  usePageTitle("Pageoverlay", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Pageoverlay", href: "/demo/pageoverlay" },
  ]);
    const [startdatum, setStartdatum] = useState(new Date())


  return (
    <section className="centered centered--wide">
      <h1>Default</h1>
      <DateInput label="Startdatum" value={startdatum} onChange={(d) => setStartdatum(d!)} />
        <div id="msg">Startdatum is: {moment(startdatum).format('DD-MM-YYYY')}</div>
   
    </section>
  )
};

export default DateInputDemo;