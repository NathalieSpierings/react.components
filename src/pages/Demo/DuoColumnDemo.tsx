import React from "react";
import { ColorDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { DuoColumn, DuoColumnLayout } from "../../components/UI/DuoColumnLayout";


const DuoColumnDemo: React.FC = () => {

  usePageTitle("DuoColumn", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Duocolumn", href: "/demo/duocolumn" },
  ]);

  return (
    <section className="centered centered--wide">
      <h2>Default</h2>
      <DuoColumnLayout>
        <DuoColumn>I am a column</DuoColumn>
        <DuoColumn>I am a column</DuoColumn>
      </DuoColumnLayout>


      <h2>Divider</h2>
      <DuoColumnLayout columnDivider={true}>
        <DuoColumn>I am a column</DuoColumn>
        <DuoColumn>I am a column</DuoColumn>
      </DuoColumnLayout>


      <h2>Background</h2>
      <DuoColumnLayout >
        <DuoColumn background={ColorDefinitions.SurfaceDark}>I am a column</DuoColumn>
        <DuoColumn background={ColorDefinitions.SurfaceLight}>I am a column</DuoColumn>
      </DuoColumnLayout>
    </section>
  );
};
export default DuoColumnDemo;
