import React, { useState } from "react";
import { Input, StaticInput } from "../../../components/Forms/Input/Input";
import PasswordInput from "../../../components/Forms/PasswordInput/PasswordInput";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../../lib/utils/definitions";
import { SearchInput } from "../../../components/Forms/SearchInput";

const InputSearchDemo: React.FC = () => {

  usePageTitle("Input", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Input", href: "/demo/input" },
  ]);

  const defaultSearch = (val: string, q: string) => {
    return !!~val.toLowerCase().indexOf(q.toLowerCase());
  };


  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie Davis' },
  ];


  const [searchTerm, setSearchTerm] = useState('');

  let sample = data.filter((x) => {
    return defaultSearch(`${x.name}$`, searchTerm);
  });


  return (
    <section className="centered centered--wide">

      <h3>Default</h3>
      <div className="grid mb-3">
        <SearchInput placeholder="Search..." onTextInput={setSearchTerm} value={searchTerm} />

        <div className="mt-5">
          {sample.map((item) => (
            <div key={item.id} className="mb-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <h3>Small</h3>
      <div className="grid mb-3">
        <SearchInput placeholder="Search..." onTextInput={setSearchTerm} value={searchTerm} size="sm" />
        <div className="mt-5">
          {sample.map((item) => (
            <div key={item.id} className="mb-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>


      <h3>Medium</h3>
      <div className="grid mb-3">
        <SearchInput placeholder="Search..." onTextInput={setSearchTerm} value={searchTerm} size="md" />

        <div className="mt-5">
          {sample.map((item) => (
            <div key={item.id} className="mb-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>


      <h3>Large</h3>
      <div className="grid mb-3">
        <SearchInput placeholder="Search..." onTextInput={setSearchTerm} value={searchTerm} size="lg" />
        <div className="mt-5">
          {sample.map((item) => (
            <div key={item.id} className="mb-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <h3>Extra large</h3>
      <div className="grid mb-3">
        <SearchInput placeholder="Search..." onTextInput={setSearchTerm} value={searchTerm} size="xl" />
        <div className="mt-5">
          {sample.map((item) => (
            <div key={item.id} className="mb-2">
              {item.name}
            </div>
          ))}
        </div>
      </div>

    </section>

  )
};

export default InputSearchDemo;