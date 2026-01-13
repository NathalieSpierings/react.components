import React from "react";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { TagItem, TagsInput } from "../../../components/Forms/TagsInput";

const TagsinputDemo: React.FC = () => {

  usePageTitle("Tagsinput", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Tagsinput", href: "/demo/tagsinput" },
  ]);

  const selectedTags = (tags: any) => {
    console.log(tags);
  };


  const tagItems: TagItem[] = [{
    id: '1',
    title: 'New York'
  },
  {
    id: '2',
    title: 'Paris'
  }]

  return (
    <section className="centered centered--wide">
      <h1>Default</h1>
      <TagsInput
        selectedTags={selectedTags}
        tags={tagItems}
        label="My tags"
        placeholder="Enter om tags toe te voegen"
      />

      <h1>SelectedTags</h1>
      <TagsInput selectedTags={selectedTags} tags={tagItems} label="My tags" />

      <h1>Colored</h1>
      <TagsInput
            selectedTags={selectedTags}
            color={ColorDefinitions.Green}
            tags={tagItems}
            label="My tags"
        />
    </section>
  );
};

export default TagsinputDemo;
