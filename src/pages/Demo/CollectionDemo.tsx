import React, { useState } from "react";
import usePageTitle from "../../lib/hooks/usePageTitle";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import { ContentItemType } from "../../components/UI/ContentItem";
import { Icon } from "../../components/UI/Icons/Icon";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import { Collection, CollectionViewSelector, CollectionViewSelectorOption } from "../../components/UI/Collection";

const CollectionDemo: React.FC = () => {


  usePageTitle("Colleciton", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Collection", href: "/demo/collection" },
  ]);

  const items: ContentItemType[] = [
    {
      id: '1',
      prefix: (<Icon icon={IconDefinitions.file_text} />),
      title: "List item title 1",
      postfix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
    },
    {
      id: '2',

      prefix: (<Icon icon={IconDefinitions.file_text} />),
      title: "List item title 2",
      postfix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
    },
    {
      id: '3',
      prefix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
      title: "List item title 3",
      postfix: (<span className="text-secondary">22-04-2022</span>),
      postfixPosition: "start"
    },
    {
      id: '4',
      prefix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
      title: "List item title 4",
      postfix: (<span className="text-secondary">9987954</span>),
    },
  ];


  const multiLineItems: ContentItemType[] = [
    {
      id: '1',
      prefix: (<Icon icon={IconDefinitions.file_text} />),
      title: "List item title 1",
      subtitle: "Subtitle 1",
      postfix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
    },
    {
      id: '2',
      prefix: (<Icon icon={IconDefinitions.file_text} />),
      title: "List item title 2",
      subtitle: "Subtitle 2",
      postfix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
    },
    {
      id: '3',
      prefix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
      title: "List item title 3",
      subtitle: "Subtitle 3",
      postfix: (<span className="text-secondary">22-04-2022</span>),
      postfixPosition: "start"
    },
    {
      id: '4',
      prefix: (<Icon icon={IconDefinitions.bin} size={SizeDefinitions.Small} />),
      title: "List item title 4",
      subtitle: "Subtitle 4",
      postfix: (<span className="text-secondary">9987954</span>),
    },
  ];


  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedMultiple, setSelectedMultiple] = React.useState<string[]>([]);

  const [viewOption, setViewOption] = useState<CollectionViewSelectorOption>('columns-4');

  return (
    <section className="centered centered--wide">

      <div className="content-item">
        <div className="actions">
          <CollectionViewSelector setViewOption={setViewOption } defaultView={viewOption}/>
        </div>
        <div className="meta">Options</div>
      </div>


      <h3>Default</h3>
      <Collection items={multiLineItems} view={viewOption}/>

      <h3>Bordered</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} itemBorder="bordered" view={viewOption}/>

      <h3>BorderedItems</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} itemBorder="underlined" view={viewOption}/>

      <h3>Compact</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} compact={true} view={viewOption}/>

      <h3>Medium</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} medium={true} view={viewOption}/>

      <h3>Rounded</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} rounded={SizeDefinitions.ExtraLarge3} view={viewOption}/>

      <h3>Hoverable</h3>
      <Collection items={multiLineItems} borderColor={ColorDefinitions.SurfaceDark} hoverable={true} selectable={true} view={viewOption}/>

      <h3>Background</h3>
      <Collection items={multiLineItems}
        colorMute={ColorDefinitions.Olive}
        borderColor={ColorDefinitions.Olive}
        background={ColorDefinitions.Olive}
        hoverable={true}
        selectable={true} view={viewOption}/>


      <h3>Selectable</h3>
      <Collection
        items={multiLineItems}
        borderColor={ColorDefinitions.Surface}
        selectable={true}
        setSelected={setSelected}
        selected={selected} view={viewOption}
      />


      <h3>Multiselect</h3>
      <Collection
        items={multiLineItems}
        borderColor={ColorDefinitions.Surface}
        selectable={true}
        selectMultiple={true}
        setSelected={setSelectedMultiple}
        selected={selectedMultiple} view={viewOption}
      />
    </section>
  )
};

export default CollectionDemo;