import React, { useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions } from "../../lib/utils/definitions";
import { Widget } from "../../components/UI/Widget";
import { ArtIgo } from "../../components/Base/Art";
import { Blockquote, Caption, Cite, Code, DescriptionList, Heading, Mark, Paragraph, Small, Subtitle, Title } from "../../components";

const TypographyDemo: React.FC = () => {
  usePageTitle("Typography", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Typography", href: "/demo/typography" },
  ]);



  return (
    <>

      <div className="grid mb-5">
        <div className="web">
          <Heading variant={"h3"}>Headings for websites</Heading>

          <Heading variant={"h1"}>Heading h1</Heading>
          <Heading variant={"h2"}>Heading h2</Heading>
          <Heading variant={"h3"}>Heading h3</Heading>
          <Heading variant={"h4"}>Heading h4</Heading>
          <Heading variant={"h5"}>Heading h5</Heading>
          <Heading variant={"h6"}>Heading h6</Heading>

        </div>
        <div className="app">
          <Heading variant={"h3"}>Headings for apps</Heading>


          <Heading variant={"h1"}>Heading h1</Heading>
          <Heading variant={"h2"}>Heading h2</Heading>
          <Heading variant={"h3"}>Heading h3</Heading>
          <Heading variant={"h4"}>Heading h4</Heading>
          <Heading variant={"h5"}>Heading h5</Heading>
          <Heading variant={"h6"}>Heading h6</Heading>

        </div>
        <div>
          <Heading variant={"h3"}>Titles & sizes</Heading>

          <Title size="lg">Goodshepard</Title>
          <Title>Goodshepard</Title>
          <Title size="md">Goodshepard</Title>
          <Title size="sm">Goodshepard</Title>
          <Title size="xs">Goodshepard</Title>

        </div>
      </div>
      <div className="grid mb-3">
        <div>
          <Heading variant={"h3"}>Text sizes</Heading>

          <p className="text-xxs">This is a text-tiny</p>
          <p className="text-xs">This is a text-xs</p>
          <p className="text-sm">This is a text-sm</p>
          <p>This is a base text</p>
          <p className="text-md">This is a text-md</p>
          <p className="text-lg">This is a text-lg</p>
          <p className="text-xl">This is a text-xl</p>
          <p className="text-2xl">This is a text-2xl</p>
          <p className="text-3xl">This is a text-3xl</p>
          <p className="text-4xl">This is a text-4xl</p>
          <p className="text-5xl">This is a text-5xl</p>
          <p className="text-6xl">This is a text-6xl</p>
        </div>
        <div>
          <Title>I am a title</Title>
          <Subtitle>I am a Subtitle</Subtitle>
          <Caption>I am a caption</Caption>
          <Small>This is a small text</Small>
          <pre>This is in pre. </pre>
          <Code label="This is in monospace" />
          <Blockquote text={"This is in blockquote"} />
          <Mark>This is in mark </Mark>
        </div>
        <div>
          <Heading variant={"h3"}>Body tekst</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </Paragraph>
        </div>
      </div>
      <div className="grid">
        <div>
          <Heading variant={"h3"}>Description list</Heading>
          <DescriptionList
            data={[
              { label: "Naam", content: "Jan Jansen" },
              { label: "Emailadres", content: "jan.janssen@example.com" },
              { label: "Telefoonnummer", content: "+31 6 12345678" },
              { label: "Lang label voorbeeld", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            ]} />
        </div>
        <div>
          <Heading variant={"h3"}>Description list with colon</Heading>
          <DescriptionList
            enableColon
            data={[
              { label: "Naam", content: "Jan Jansen" },
              { label: "Emailadres", content: "jan.janssen@example.com" },
              { label: "Telefoonnummer", content: "+31 6 12345678" },
              { label: "Lang label voorbeeld", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            ]} />
        </div>
        <div>
          <Heading variant={"h3"}>Description list with custom spacing</Heading>
          <DescriptionList 
            columnGap="5rem"
            rowGap="3rem"
            data={[
              { label: "Naam", content: "Jan Jansen" },
              { label: "Emailadres", content: "jan.janssen@example.com" },
              { label: "Telefoonnummer", content: "+31 6 12345678" },
              { label: "Lang label voorbeeld", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            ]} />
        </div>
      </div>
    </>
  )
}
export default TypographyDemo;