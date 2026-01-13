import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Button } from "../../components/UI/Button";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";
import { Icon } from "../../components/UI/Icons/Icon";

const ButtonDemo: React.FC = () => {

  usePageTitle("Buttons", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Buttons", href: "/demo/button" },
  ]);

  return (
    <section className="centered centered--wide">

      <h1>Default</h1>
      <div className="flex gap-1">
        <Button>Default</Button>
        <Button><Icon icon={IconDefinitions.arrow_left} position="left" />Default</Button>
      </div>


      <h1>Surfaces</h1>
      <div className="flex gap-1">       
        <Button color={ColorDefinitions.SurfaceDark}>Surface dark</Button>
        <Button color={ColorDefinitions.SurfaceDark}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface dark</Button>
        <Button color={ColorDefinitions.Surface}>Surface</Button>
        <Button color={ColorDefinitions.Surface}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface</Button>
        <Button color={ColorDefinitions.SurfaceLight}><Icon icon={IconDefinitions.arrow_left} position="left" />Surface light</Button>
        <Button color={ColorDefinitions.SurfaceLight}>Surface light</Button>
      </div>
    

      <h1>Varants</h1>
      <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive}>Button bg</Button>
        <Button color={ColorDefinitions.Blue} raised={true}>Raised</Button>
        <Button color={ColorDefinitions.Pink} shadow={true}>Shadow</Button>

        <Button color={ColorDefinitions.Rose}><Icon icon={IconDefinitions.arrow_left} position="left" />Icon left</Button>
        <Button color={ColorDefinitions.Rose}>Icon right<Icon icon={IconDefinitions.arrow_right} position="right" /></Button>

        <Button color={ColorDefinitions.Olive} rounded={true}>Rounded</Button>
        <Button circle={true} color={ColorDefinitions.Olive}> <Icon icon={IconDefinitions.bulb} /></Button>

        <Button color={ColorDefinitions.Blue} variant="outline">Outline</Button>
        <Button color={ColorDefinitions.Pink} variant="outline" rounded={true}>Outline rounded</Button>
        <Button color={ColorDefinitions.Rose} variant="outline" circle={true}> <Icon icon={IconDefinitions.bulb} /></Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="flat" color={ColorDefinitions.Primary} rippleColor={ColorDefinitions.Primary}>Flat</Button>
      </div>

      <h1>Sizes</h1>
      <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraSmall}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Small}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Medium}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Large}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge2}>Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge3}>Button</Button>
      </div>

      <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraSmall}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Small}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Medium}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.Large}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge2}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
        <Button color={ColorDefinitions.Olive} size={SizeDefinitions.ExtraLarge3}><Icon icon={IconDefinitions.bulb} position="left" />Button</Button>
      </div>

      <h1>Fluid</h1>
      <div className="flex gap-1">
        <Button color={ColorDefinitions.Olive} fluid={true}>Button</Button>
      </div>
    </section>
  )
};

export default ButtonDemo;