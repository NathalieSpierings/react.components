import React from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Icon } from "../../components/UI/Icons/Icon";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";

const IconDemo: React.FC = () => {

  usePageTitle("Icons", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Icons", href: "/demo/icon" },
  ]);

  return (
    <div className="centered centered--wide">

      <p>When choosing an icon variant and set an background, the border will automatically get the same color as the background. See Icon component.</p>

 <h1>Default</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} />
        <Icon icon={IconDefinitions.warning} variant="square" />
        <Icon icon={IconDefinitions.warning} variant="circle" />
        <Icon icon={IconDefinitions.warning} hover/>

      </div>


      <h1>Icons with utility classes</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} color={ColorDefinitions.Blue} />
        <Icon icon={IconDefinitions.warning} background={ColorDefinitions.Blue} variant="square" />
        <Icon icon={IconDefinitions.warning} borderColor={ColorDefinitions.Blue} />
        <Icon icon={IconDefinitions.warning} shadowColor={ColorDefinitions.Blue} borderColor={ColorDefinitions.Blue} variant="circle" />
        <Icon icon={IconDefinitions.warning} borderColor={ColorDefinitions.Blue} shadowBeforeColor={ColorDefinitions.Blue} variant="circle" />
        <Icon icon={IconDefinitions.warning} borderColor={ColorDefinitions.Blue} hoverShadowBeforeColor={ColorDefinitions.Blue} variant="circle" />

      </div>

      <h1>Hover state with utility classes</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} hoverColor={ColorDefinitions.Blue} />
        <Icon icon={IconDefinitions.warning} hoverBackground={ColorDefinitions.Blue} variant="square" />
        <Icon icon={IconDefinitions.warning} hoverBorderColor={ColorDefinitions.Blue} />
        <Icon icon={IconDefinitions.warning} hoverShadowColor={ColorDefinitions.Blue} hoverBorderColor={ColorDefinitions.Blue} variant="circle" />
      </div>

      <h1>Dashed with utility classes</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} dashed={true} hoverColor={ColorDefinitions.Magenta} />
        <Icon icon={IconDefinitions.warning} dashed={true} hoverBackground={ColorDefinitions.Magenta} variant="square" />
        <Icon icon={IconDefinitions.warning} dashed={true} hoverBorderColor={ColorDefinitions.Magenta} />
        <Icon icon={IconDefinitions.warning} dashed={true} hoverShadowColor={ColorDefinitions.Magenta} hoverBorderColor={ColorDefinitions.Magenta} variant="circle" />
      </div>



      <h1>Ring</h1>
      <p className="mb-3">
        Puts a border around the icon. On hover and offset will be shown.
        You can choose between offset sizes <code>0, 1, 2, and 3 px</code> When choosing offset size: 0. Only the offset color will be shown.
        The ring border color can be set with the property <code>ringColor</code>.
        The ring offset border color can be set with the property <code>ringOffsetBorderColor</code>.
        The ring offset color default to <code>surface-0</code> can be set with the property <code>ringOffsetColor</code>.
        You can play around with the ring colors. Have fun :-).
      </p>
	


	<h3>Default ring</h3>
	<div className="grid gap-3 mb-3">
		<Icon icon={IconDefinitions.warning} ring={true} />
	</div>

	<h3>Ring size</h3>
	<div className="grid gap-3 mb-3">
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-0" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-1"/>
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-2" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-3" />		
	</div>

	<h3>Ring offsize 2</h3>
	<div className="grid gap-3 mb-3">
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-0" ringOffset="ring-offset-2" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-1" ringOffset="ring-offset-2" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-2" ringOffset="ring-offset-2" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-3" ringOffset="ring-offset-2" />
	</div>

	<h3>Ring offsize 4</h3>
	<div className="grid gap-3 mb-3">
		<Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-0" ringOffset="ring-offset-4" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-1" ringOffset="ring-offset-4" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-2" ringOffset="ring-offset-4" />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringSize="ring-3" ringOffset="ring-offset-4" />
	</div>

	<h3>Colored ring</h3>
	<div className="grid gap-3 mb-3">
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringColor={ColorDefinitions.Primary}/>
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringColor={ColorDefinitions.Primary} color={ColorDefinitions.Primary}/>
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringHoverColor={ColorDefinitions.Primary} />
        <Icon icon={IconDefinitions.warning} rounded={SizeDefinitions.Full} ring={true} ringHoverColor={ColorDefinitions.Primary} hoverColor={ColorDefinitions.Primary}/>
	</div>


      <h1>Opacity</h1>
      <p className="mb-3">
        Shows the icon and border dimmed. On hover the opacity = 1;
        Use <code>icon--dimmed</code> class. To only dimm the icon you can use <code>icon--dimmed-icon</code> class.
      </p>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} color={ColorDefinitions.Blue} dimmed={true} />
        <Icon icon={IconDefinitions.warning} background={ColorDefinitions.Blue} variant="square" dimmed={true} />
        <Icon icon={IconDefinitions.warning} borderColor={ColorDefinitions.Blue} dimmed={true} />
        <Icon icon={IconDefinitions.warning} shadowColor={ColorDefinitions.Blue} variant="square" dimmed={true} />
      </div>


      <h3>Svg dimmed</h3>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} color={ColorDefinitions.Blue} dimmedSvg={true} />
        <Icon icon={IconDefinitions.warning} background={ColorDefinitions.Blue} variant="square" dimmedSvg={true} />
        <Icon icon={IconDefinitions.warning} borderColor={ColorDefinitions.Blue} dimmedSvg={true} />
        <Icon icon={IconDefinitions.warning} shadowColor={ColorDefinitions.Blue} variant="square" dimmedSvg={true} />
      </div>

      <h1>Hover</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} variant="circle" hover={true} />
        <Icon icon={IconDefinitions.warning} variant="square" hover={true} />
        <Icon icon={IconDefinitions.warning} hover={true} />
      </div>

      <h1>Sizes</h1>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.ExtraSmall} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.Small} />
        <Icon icon={IconDefinitions.warning} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.Medium} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.Large} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.ExtraLarge} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.ExtraLarge2} />
        <Icon icon={IconDefinitions.warning} size={SizeDefinitions.ExtraLarge3} />
      </div>

      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.ExtraSmall} />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.Small} />
        <Icon icon={IconDefinitions.warning} variant="square" />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.Medium} />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.Large} />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.ExtraLarge} />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.ExtraLarge2} />
        <Icon icon={IconDefinitions.warning} variant="square" size={SizeDefinitions.ExtraLarge3} />
      </div>
      <div className="flex gap-1">
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.ExtraSmall} />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.Small} />
        <Icon icon={IconDefinitions.warning} variant="circle" />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.Medium} />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.Large} />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.ExtraLarge} />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.ExtraLarge2} />
        <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.ExtraLarge3} />
      </div>


      <h1>Showwave anime</h1>
      <Icon icon={IconDefinitions.warning} variant="circle" size={SizeDefinitions.Small} iconCss="shockwave shadow-from-red" background={ColorDefinitions.Red}/>
    </div>
  )
}

export default IconDemo;