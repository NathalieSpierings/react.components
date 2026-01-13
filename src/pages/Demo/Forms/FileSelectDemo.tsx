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

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  

  return (
    <section className="centered centered--wide">
      
      <h2>Default</h2>
       <FileSelect
        multiple={false}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        accept={["asc", "txt", "doc", "pdf", "xls", "csv", "ppt", "eml", "xml", "zip", "img"]}                 
      />

        <h2>AllowMultiple</h2>
        <FileSelect
        multiple={true}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        accept={["asc", "txt", "doc", "pdf", "xls", "csv", "ppt", "eml", "xml", "zip", "img"]}                    
      />

        <h2>Background</h2>
        <FileSelect backgroundColor={ColorDefinitions.SurfaceDark} buttonColor={ColorDefinitions.Olive}
        multiple={true}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        accept={["asc", "txt", "doc", "pdf", "xls", "csv", "ppt", "eml", "xml", "zip", "img"]}                    
      />
    </section>
  );
};
export default FileSelectDemo;
