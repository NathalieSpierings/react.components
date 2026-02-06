import React, { Fragment, useState } from "react";
import Dropdown from "../../components/Forms/Dropdown/Dropdown";
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from "../../lib/utils/definitions";

import { useScrollContext } from "../../components/Providers/ScrollContext";
import { Badge } from "../../components/UI/Badge";
import { Button } from "../../components/UI/Button";
import { Card } from "../../components/UI/Card";
import { Icon } from "../../components/UI/Icons/Icon";
import { Tabs } from "../../components/UI/Tabs";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { Title } from "../../components/Typography/Title";

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

      <div className="grid">
        <div>
          <h3>Card border</h3>
          <Card
            title={<Title size="md">Card title</Title>}
            borderColor={ColorDefinitions.Surface}
            headerBoxProps={{
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
        <div>
          <h3>Card border and rounded</h3>
          <Card rounded={SizeDefinitions.ExtraLarge}
            title={<Title size="md">Card title</Title>}
            borderColor={ColorDefinitions.Surface}
            headerBoxProps={{
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
            footerBoxProps={{
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

      <div className="grid">
        <div>
          <h3>Card shadow</h3>
          <Card
            shadowColor={ColorDefinitions.SurfaceDark}
            background={ColorDefinitions.SurfaceDark}
            title={<Title size="md">Card title</Title>}
            headerBoxProps={{
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
        <div>
          <h3>Card shadow on hover</h3>
          <Card
            hoverShadowColor={ColorDefinitions.SurfaceDark}
            background={ColorDefinitions.SurfaceDark}
            title={<Title size="md">Card title</Title>}
            headerBoxProps={{
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
            footerBoxProps={{
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


      <Title size="md">Files</Title>
      <h3>Tabs</h3>
      <div className="grid">
        <div>

          <Card
            background={ColorDefinitions.SurfaceDark}
           title={<Title size="md">Card title</Title>}
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
        <div>
          <h3>Title content</h3>
          <Card
            background={ColorDefinitions.SurfaceDark}
            title={
           
              <div className="flex flex-center">
                <Title size="md">Card title</Title>
              <Badge badgeCss="ml-1"
                size={SizeDefinitions.Tiny}
                background={ColorDefinitions.Red}>
                HOT
              </Badge>
              </div>
          
            }
            headerActions={[
              <Icon key="1" icon={IconDefinitions.search} variant="circle" size={SizeDefinitions.Small} />,
              <Icon key="2" icon={IconDefinitions.refresh} variant="circle" size={SizeDefinitions.Small} />,
              <Icon key="3" icon={IconDefinitions.ellipsis_h} variant="circle" size={SizeDefinitions.Small} />
            ]}
            headerBoxProps={{
              borderColor: ColorDefinitions.Theme100
            }}
            footerLeftContent={
              <p>Action</p>
            }
            footerRightContent={
              <p>Action</p>
            }
            footerBoxProps={{
              borderColor: ColorDefinitions.Theme100
            }}
          >
            <p>The forest was alive with the soft murmur of nature.</p>
            <p className="text-mute">Muted text.</p>
          </Card>
        </div>
      </div>

      <h3>Colored</h3>
      <div className="grid">
        <div>
          <Card 
          title={<Title size="md">Card title</Title>}
          background={ColorDefinitions.Purple}
            headerBoxProps={{
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
            footerBoxProps={{
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
        <div>
          <Card 
          title={<Title size="md">Card title</Title>}
            background={ColorDefinitions.Olive}
            headerBoxProps={{
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
              <Dropdown key="2"
                background={ColorDefinitions.Olive20}
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
            footerBoxProps={{
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
        <div>

          <Card 
          title={<Title size="md">Card title</Title>}
            background={ColorDefinitions.Mulberry}
            headerBoxProps={{
              borderColor: ColorDefinitions.Mulberry
            }}
            headerActions={[
              <Icon key="1" icon={
                IconDefinitions.search}
                variant="circle"
                size={SizeDefinitions.Small}
              />,
              <Dropdown key="2"
                background={ColorDefinitions.Mulberry20}
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
            footerBoxProps={{
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
        <div>

          <Card 
          title={<Title size="md">Card title</Title>}
            background={ColorDefinitions.Blue}
            headerBoxProps={{
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
            footerBoxProps={{
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


      <div className="grid">
        <div>
          <h3>Image</h3>
          <Card
            background={ColorDefinitions.Surface}
            title={<Title size="md">Card title</Title>}
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Adriana_Lima_au_festival_de_Cannes%2C_2015.jpg/440px-Adriana_Lima_au_festival_de_Cannes%2C_2015.jpg"

          >
            A gentle breeze carried the scent of pine and wildflowers, mingling with the earthy aroma of damp soil.
          </Card>

        </div>


        <div>
          <h3>Sticky header</h3>
          <Card
            background={ColorDefinitions.Surface}
            scrollPosition={scrollPosition}
            ttitle={<Title size="md">Card title</Title>}
            headerSticky={true}
            headerActions={[
              <Button key="1"><Icon icon={IconDefinitions.arrow_left} position="left" /> Annuleren</Button>,
              <Button key="2" color={ColorDefinitions.Primary} >Opslaan</Button>
            ]}
            headerBoxProps={{
              borderColor: ColorDefinitions.Theme100
            }}
            footerLeftContent={
              <p>Action</p>
            }
            footerRightContent={
              <p>Action</p>
            }
            footerBoxProps={{
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