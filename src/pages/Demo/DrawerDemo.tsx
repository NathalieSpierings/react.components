import React, { useState } from "react";
import { ColorDefinitions } from "../../lib/utils/definitions";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Button } from "../../components/UI/Button";
import { Drawer } from "../../components/UI/Drawer";

const DrawerDemo: React.FC = () => {

  usePageTitle("Drawer", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Drawer", href: "/demo/drawer" },
  ]);


  const [open, setOpen] = useState<boolean | null>(null);

  return (
    <section className="centered centered--wide">
      <Button onClick={() => setOpen(true)}>Click me!</Button>

      <Drawer title="My title" 
      open={open} 
      openDrawer={setOpen} 
      headerBorderColor={ColorDefinitions.Surface}
      footerBorderColor={ColorDefinitions.Surface}
      footerContent={(<span>Footer content</span>)}
      >
        My drawer content goes here.
      </Drawer>
    </section>
  );
};
export default DrawerDemo;
