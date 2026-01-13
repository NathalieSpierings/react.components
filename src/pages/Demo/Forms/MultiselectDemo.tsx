import React, { useState } from "react";
import Multiselect from "../../../components/Forms/Multiselect/Multiselect";
import { ColorDefinitions, SizeDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { ContentItemType } from "../../../components/UI/ContentItem";
import { Dropdown } from "../../../components/Forms/Dropdown";

const MultiselectDemo: React.FC = () => {

  usePageTitle("Multiselect", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Multiselect", href: "/demo/multiselect" },
  ]);

  const items = [
    {
      id: '1',
      content: 'Option 1',
      postfix: <small>54949881</small>,
    },
    {
      id: '2',
      content: 'Option 2',
      postfix: <small>54949882</small>,
    },
    {
      id: '3',
      content: 'Option 3',
      postfix: <small>54949883</small>,
    },
    {
      id: '4',
      content: 'Option 4',
      postfix: <small>54949884</small>,
    },
    {
      id: '5',
      content: 'Option 5',
      postfix: <small>54949885</small>,
    },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <section>

      <h1>Default</h1>
      <div className="grid mb-3">
        <Multiselect title="My label goes here..."
          items={items}
          selected={selected}
          setSelected={setSelected} />
      </div>

      <h1>Bordered</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.SurfaceDark}
          title="My label goes here..."
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.SurfaceDark}
          collectionItemBorder="bordered"
        />
      </div>

      <h1>InsideDropdown</h1>
      <div className="grid mb-3">
        <Dropdown
          background={ColorDefinitions.Surface}
          dropdownToggle={{
            label: 'click me',
          }}
        >
          <Multiselect
            background={ColorDefinitions.Theme100}
            borderColor={ColorDefinitions.Theme100}
            title="My label goes here..."
            items={items}
            selected={selected}
            setSelected={setSelected}
            collectionBorderColor={ColorDefinitions.Theme100}
            collectionItemBorder="underlined"
          />
        </Dropdown>
      </div>

      <h1>Background</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Olive}
          borderColor={ColorDefinitions.Olive}
          title="My label goes here..."
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Olive}
          collectionItemBorder="underlined"
        />
      </div>

      <h1>NoTitle</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Theme100}
          borderColor={ColorDefinitions.Theme100}
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Theme100}
          collectionItemBorder="underlined"
        />
      </div>

      <h1>NoCheckAll</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Theme100}
          borderColor={ColorDefinitions.Theme100}
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Theme100}
          collectionItemBorder="underlined"
          showCheckAll={false}
        />
      </div>

      <h1>NoSearch</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Theme100}
          borderColor={ColorDefinitions.Theme100}
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Theme100}
          collectionItemBorder="underlined"
          showSearch={false}
        />
      </div>

      <h1>NoHeader</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Theme100}
          borderColor={ColorDefinitions.Theme100}
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Theme100}
          collectionItemBorder="underlined"
          showHeader={false}
        />
      </div>

      <h1>Rounded</h1>
      <div className="grid mb-3">
        <Multiselect
          background={ColorDefinitions.Theme100}
          borderColor={ColorDefinitions.Theme100}
          title="My label goes here..."
          items={items}
          selected={selected}
          setSelected={setSelected}
          collectionBorderColor={ColorDefinitions.Theme100}
          collectionItemBorder="underlined"
          rounded={SizeDefinitions.ExtraLarge}
        />
      </div>

    </section>
  );
};

export default MultiselectDemo;
