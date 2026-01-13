import React, { useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions } from "../../lib/utils/definitions";
import { Widget } from "../../components/UI/Widget";
import { ArtIgo } from "../../components/Base/Art";

const WidgetDemo: React.FC = () => {
  usePageTitle("Widget", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Widget", href: "/demo/widget" },
  ]);



  return (
    <>
      <h3>Widget with children</h3>
      <Widget background={ColorDefinitions.SurfaceDark}>
      Content goes here...
      </Widget>

      <Widget image={<ArtIgo/>} imageBackground={ColorDefinitions.SurfaceLight}  background={ColorDefinitions.SurfaceDark}>
      Content goes here...
      </Widget>

      <Widget image={<ArtIgo/>} horizontal={true}  background={ColorDefinitions.SurfaceLight} imageBackground={ColorDefinitions.SurfaceDark}  >
      Content goes here...
      </Widget>



      <h3>Widget with  content item</h3>
      <Widget background={ColorDefinitions.SurfaceDark}
        widgetPostfix={<span>Action</span>}
        widgetContent={<p> Content goes here...</p>} />


      <h3>Image</h3>
      <Widget image={<ArtIgo/>} widgetPostfix={<span>Action</span>} background={ColorDefinitions.SurfaceDark}
        widgetContent={<p> Content goes here...</p>} />

      <h3>Horizontal</h3>
      <Widget horizontal={true} image={<ArtIgo/>} widgetPostfix={<span>Action</span>} background={ColorDefinitions.SurfaceDark}
        widgetContent={<p>Content goes here...</p>} />



        
    </>
  )
}
export default WidgetDemo;