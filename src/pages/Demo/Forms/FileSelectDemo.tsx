import React, { useState } from "react";
import FileSelect from "../../../components/Forms/FileSelect/FileSelect";
import { ColorDefinitions } from "../../../lib/utils/definitions";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import { Button } from "../../../components";

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
  const [selectedFileRequired, setSelectedFileRequired] = useState<File[]>([]);
  const [selectedFilesRequired, setSelectedFilesRequired] = useState<File[]>([]);

  const [submittedOneFile, setSubmittedOneFile] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitOneFile = () => {
    setSubmittedOneFile(true);
    if (selectedFileRequired.length < 1) {
      return;
    }
  };

  const handleSubmitMoreFiles = () => {
    setSubmitted(true);
    if (selectedFilesRequired.length < 3) {
      return;
    }
  };

  return (
    <section className="centered centered--wide">

      <h3>Single file</h3>
      <FileSelect multiple={false} selectedFiles={selectedFilesDefault} setSelectedFiles={setSelectedFilesDefault} iconFloating />

      <h3 className="mt-5">Multiple files</h3>
      <FileSelect multiple={true} selectedFiles={selectedFilesAllowMultiple} setSelectedFiles={setSelectedFilesAllowMultiple} />


      <h3 className="mt-5">Minimal 1 required file</h3>
      <FileSelect
        multiple
        requiredFileCount={1}
        selectedFiles={selectedFileRequired}
        setSelectedFiles={setSelectedFileRequired}
        showValidation={submittedOneFile}
        iconFloating
      />
      <Button onClick={handleSubmitOneFile}>Save</Button>


      <h3 className="mt-5">Minimal  required file</h3>
      <FileSelect multiple
      requiredFileCount={3} 
      selectedFiles={selectedFilesRequired} 
      setSelectedFiles={setSelectedFilesRequired} 
      showValidation={submitted} 
      iconFloating 
      />
      <Button onClick={handleSubmitMoreFiles}>Save</Button>

      <h3 className="mt-5">Validate KlantNummer</h3>
      <FileSelect multiple={true} validateKlantNummer={true} selectedFiles={selectedFilesvalidateKlantNummer} setSelectedFiles={setSelectedFilesvalidateKlantNummer} />

      <h3 className="mt-5">Validate Zip</h3>
      <FileSelect multiple={true} validateZip={true} selectedFiles={selectedFilesvalidateZip} setSelectedFiles={setSelectedFilesvalidateZip} />

      <h3 className="mt-5">Background</h3>
      <FileSelect backgroundColor={ColorDefinitions.SurfaceDark} buttonColor={ColorDefinitions.Olive} multiple={true} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
    </section>
  );
};
export default FileSelectDemo;
