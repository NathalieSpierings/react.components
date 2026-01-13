import React, { Fragment, useState } from "react";
import Dropdown from "../../components/Forms/Dropdown/Dropdown";
import { Input } from "../../components/Forms/Input/Input";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";

import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { useScrollContext } from "../../components/Providers/ScrollContext";
import { Card } from "../../components/UI/Card";
import { Icon } from "../../components/UI/Icons/Icon";
import { Badge } from "../../components/UI/Badge";
import { Button } from "../../components/UI/Button";
import { Tabs } from "../../components/UI/Tabs";

// Create the content components
const ContentOne = () =>
  <Fragment>
    <h3>Tab One</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;

const ContentTwo = () =>
  <Fragment>
    <h3>Tab Two</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;
const ContentThree = () =>
  <Fragment>
    <h3>Tab Three</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>;


type TabsType = {
  label: string;
  index: number;
  disabled?: boolean;
  Component: React.FC<{}>;
}[];


// Tabs Array
const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: ContentOne
  },
  {
    label: "Tab Two",
    index: 2,
    Component: ContentTwo
  },
  {
    label: "Tab Three",
    index: 3,
    Component: ContentThree
  }
];


const CardDemo: React.FC = () => {

  usePageTitle("Cards", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Cards", href: "/demo/card" },
  ]);

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const { scrollPosition } = useScrollContext();

  return (
    <section className="centered centered--wide">
      <h1>Default</h1>
      <div className="row">
        <div className="col-6">
          <Card cardCss="mb-3 test" title="SurfaceDark background (default)">
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
            <div className="row">
              <div className="col-1"><Icon icon={IconDefinitions.search} rounded={SizeDefinitions.Full} background={ColorDefinitions.Theme700} color={ColorDefinitions.Foreground} /></div>
              <div className="col-1"><Icon icon={IconDefinitions.bulb} rounded={SizeDefinitions.Full} background={ColorDefinitions.Surface} color={ColorDefinitions.Foreground} /></div>
              <div className="col-1"><Badge background={ColorDefinitions.Theme900} color={ColorDefinitions.Offwhite}>Badge</Badge></div>
              <div className="col-6"><Input label="Firstname" /></div>
            </div>
          </Card>
        </div>
        <div className="col-6">
          <Card title="SurfaceLight background" background={ColorDefinitions.SurfaceLight}>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
            <div className="row">
              <div className="col-1"><Icon icon={IconDefinitions.search} rounded={SizeDefinitions.Full} background={ColorDefinitions.Theme300} color={ColorDefinitions.Foreground} /></div>
              <div className="col-1"><Icon icon={IconDefinitions.bulb} rounded={SizeDefinitions.Full} background={ColorDefinitions.Surface} color={ColorDefinitions.Foreground} /></div>
              <div className="col-1"><Badge background={ColorDefinitions.Theme900} color={ColorDefinitions.Offwhite}>Badge</Badge></div>
              <div className="col-6"><Input label="Firstname" /></div>
            </div>
          </Card>
        </div>
      </div>

      <h1>Rounded</h1>
      <div className="row">

        <div className="col-6">

          <Card title="Card title"
            rounded={SizeDefinitions.ExtraLarge}
            background={ColorDefinitions.SurfaceDark}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown   key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    
                    content: 'Item 2'
                  },
                  {
                    
                    content: 'Item 3'
                  }
                ]}
              />
            ]}
          >
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-6">

          <Card title="Card title"
            rounded={SizeDefinitions.ExtraLarge3}
            background={ColorDefinitions.SurfaceDark}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    
                    content: 'Item 1'
                  },
                  {
                    
                    content: 'Item 2'
                  },
                  {
                    
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
      </div>

      <h1>Bordered</h1>
      <div className="row">

        <div className="col-6">

          <Card title="Card title"
            borderColor={ColorDefinitions.Surface}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    
                    content: 'Item 1'
                  },
                  {
                    
                    content: 'Item 2'
                  },
                  {
                    
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
          >
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-6">

          <Card title="Card title"
            borderColor={ColorDefinitions.Surface}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown   key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
      </div>

      <h1>Shadow</h1>
      <div className="row">

        <div className="col-6">

          <Card title="Card title"
            shadowColor={ColorDefinitions.SurfaceDark}
            rounded={SizeDefinitions.ExtraLarge}
            background={ColorDefinitions.SurfaceDark}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
          >
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-6">

          <Card title="Card title"
            hoverShadowColor={ColorDefinitions.SurfaceDark}
            rounded={SizeDefinitions.ExtraLarge3}
            background={ColorDefinitions.SurfaceDark}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Surface
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
      </div>

      <h1>Tabs</h1>
      <div className="row">
        <div className="col-6">

          <Card title="Card title"
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                dimmed={true}
                borderColor={ColorDefinitions.SurfaceDark}
                size={SizeDefinitions.Small}
                hoverBorderColor={ColorDefinitions.Primary}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    dimmed={true}
                    borderColor={ColorDefinitions.SurfaceDark}
                    size={SizeDefinitions.Small}
                    hoverBorderColor={ColorDefinitions.Primary} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}>
            <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
          </Card>

        </div>

        <div className="col-6">
          <h1>Image</h1>
          <Card title="Card title"
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Adriana_Lima_au_festival_de_Cannes%2C_2015.jpg/440px-Adriana_Lima_au_festival_de_Cannes%2C_2015.jpg"
            background={ColorDefinitions.SurfaceDark}
          >
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
      </div>

      <h1>Colored</h1>
      <div className="row">
        <div className="col-3">
          <Card title="Card title" background={ColorDefinitions.Purple}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Purple
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                size={SizeDefinitions.Small}
                color={ColorDefinitions.Purple10}
                borderColor={ColorDefinitions.Purple}
                hoverBorderColor={ColorDefinitions.Purple}
              />,
              <Dropdown key="2" background={ColorDefinitions.Purple20}
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    size={SizeDefinitions.Small}
                    color={ColorDefinitions.Purple10}
                    borderColor={ColorDefinitions.Purple}
                    hoverBorderColor={ColorDefinitions.Purple} />)
                }}
                menuItems={[
                  {
                    
                    content: 'Item 1'
                  },
                  {
                    
                    content: 'Item 2'
                  },
                  {
                    
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Purple
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-3">
          <Card title="Card title" background={ColorDefinitions.Olive}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Olive
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                size={SizeDefinitions.Small}
                color={ColorDefinitions.Olive10}
                borderColor={ColorDefinitions.Olive}
                hoverBorderColor={ColorDefinitions.Olive}
              />,
              <Dropdown key="2" background={ColorDefinitions.Olive20}
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    size={SizeDefinitions.Small}
                    color={ColorDefinitions.Olive10}
                    borderColor={ColorDefinitions.Olive}
                    hoverBorderColor={ColorDefinitions.Olive} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Olive
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-3">

          <Card title="Card title" background={ColorDefinitions.Mulberry}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Mulberry
            }}
            headerActions={[
              <Icon key="1" icon={
                IconDefinitions.search}
                variant="circle"
                size={SizeDefinitions.Small}
              />,
              <Dropdown key="2"
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    size={SizeDefinitions.Small}
                  />
                  )
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Mulberry
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
        <div className="col-3">

          <Card title="Card title"
            background={ColorDefinitions.Blue}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Blue
            }}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search}
                variant="circle"
                size={SizeDefinitions.Small}
              />,
              <Dropdown key="2"
                background={ColorDefinitions.Blue20}
                dropdownToggle={{
                  prefix: (<Icon
                    icon={IconDefinitions.ellipsis_h}
                    variant="circle"
                    size={SizeDefinitions.Small} />)
                }}
                menuItems={[
                  {
                    content: 'Item 1'
                  },
                  {
                    content: 'Item 2'
                  },
                  {
                    content: 'Item 3'
                  }
                ]}
              />

            ]}
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Blue
            }}
            footerLeftContent={
              <span>Action</span>
            }
            footerRightContent={
              <span>Action</span>
            }>
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>
      </div>

      <h1>Title content</h1>
      <div className="row">
        <div className="col-6">
          <Card
            title={<div>
              Card title
              <Badge badgeCss="ml-1"
                size={SizeDefinitions.Tiny}
                background={ColorDefinitions.Red}>
                HOT
              </Badge>
            </div>}
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search} variant="circle" size={SizeDefinitions.Small} />,
              <Icon key="2" icon={IconDefinitions.refresh} variant="circle" size={SizeDefinitions.Small} />,
              <Icon key="3" icon={IconDefinitions.ellipsis_h} variant="circle" size={SizeDefinitions.Small} />
            ]}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Theme100
            }}
            footerLeftContent={
              <p>Action</p>
            }
            footerRightContent={
              <p>Action</p>
            }
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Theme100
            }}
          >
            <p>The forest was alive with the soft murmur of nature.</p>
            <p className="text-mute">Muted text.</p>
          </Card>
        </div>
      </div>


      <h1>Sticky header</h1>
      <div className="row">
        <div className="col-6">
          <Card
            scrollPosition={scrollPosition}
            title={"Card title"}
            headerSticky={true}
            headerActions={[
              <Button key="1"><Icon icon={IconDefinitions.arrow_left} position="left" /> Annuleren</Button>,
              <Button key="2" color={ColorDefinitions.Primary} >Opslaan</Button>
            ]}
            headerStyledDivProps={{
              borderColor: ColorDefinitions.Theme100
            }}
            footerLeftContent={
              <p>Action</p>
            }
            footerRightContent={
              <p>Action</p>
            }
            footerStyledDivProps={{
              borderColor: ColorDefinitions.Theme100
            }}
          >
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
            <p>In the quietude of a sprawling forest, where the whispers of the wind caress the ancient branches, a hidden world thrives in harmonious rhythm. Sunlight filters through the canopy, dappling the forest floor with patches of gold, while the air is rich with the earthy scent of moss and pine. Birds of myriad colors flit between the trees, their songs intertwining in a melodic symphony that dances on the breeze. Tiny creatures scuttle beneath the undergrowth, their movements almost imperceptible amidst the tapestry of roots and leaves. The forest is a sanctuary, a living, breathing organism that hums with life and history, each element intricately connected to the next. It holds secrets older than time itself, etched into the rugged bark of trees that have stood as silent witnesses to the ebb and flow of centuries. This timeless realm invites those who venture within to pause, to breathe deeply, and to remember their place in the grand mosaic of existence, where every moment is both fleeting and eternal.</p>
          </Card>
        </div>
      </div>
    </section>
  )
};

export default CardDemo;