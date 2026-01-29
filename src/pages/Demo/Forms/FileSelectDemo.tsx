import React, { useState } from "react";
import FileSelect from "../../../components/Forms/FileSelect/FileSelect";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";

const FileSelectDemo: React.FC = () => {

  usePageTitle("FileSelect", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "FileSelect", href: "/demo/fileselect" },
  ]);

  const [selectedFilesDefault, setSelectedFilesDefault] = useState<File[]>([]);
  const [selectedFilesAllowMultiple, setSelectedFilesAllowMultiple] = useState<File[]>([]);
  const [selectedFilesvalidateKlantNummer, setSelectedFilesvalidateKlantNummer] = useState<File[]>([]);
  const [selectedFilesvalidateZip, setSelectedFilesvalidateZip] = useState<File[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);


  return (
    <section className="centered centered--wide">

      <h2>Single file</h2>
      <FileSelect multiple={false} selectedFiles={selectedFilesDefault} setSelectedFiles={setSelectedFilesDefault} />

      <h2 className="mt-5">Multiple files</h2>
      <FileSelect multiple={true} selectedFiles={selectedFilesAllowMultiple} setSelectedFiles={setSelectedFilesAllowMultiple} />

      <h2 className="mt-5">Validate KlantNummer</h2>
      <FileSelect multiple={true} validateKlantNummer={true} selectedFiles={selectedFilesvalidateKlantNummer} setSelectedFiles={setSelectedFilesvalidateKlantNummer} />

      <h2 className="mt-5">Validate Zip</h2>
      <FileSelect multiple={true} validateZip={true} selectedFiles={selectedFilesvalidateZip} setSelectedFiles={setSelectedFilesvalidateZip} />

      <h2 className="mt-5">Background</h2>
      <FileSelect backgroundColor={ColorDefinitions.SurfaceDark} buttonColor={ColorDefinitions.Olive} multiple={true} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
    </section>
  );
};
export default FileSelectDemo;
