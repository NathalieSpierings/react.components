import React, { Fragment, useState } from "react";
import useBreadcrumb from "../../lib/hooks/useBreadcrumb";
import usePageTitle from "../../lib/hooks/usePageTitle";
import { ColorDefinitions, IconDefinitions } from "../../lib/utils/definitions";
import { TabPane, TabPanes, Tabs } from "../../components/UI/Tabs";


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


const Home = () =>
  <Fragment>
    <h3>Home</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;

const About = () =>
  <Fragment>
    <h3>About</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;
const Contact = () =>
  <Fragment>
    <h3>Contact</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>;

const Products = () =>
  <Fragment>
    <h3>Products</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;

const Customers = () =>
  <Fragment>
    <h3>Customers</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>
  ;
const Sales = () =>
  <Fragment>
    <h3>Sales</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </Fragment>;


const tabs = [
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

const verticalTabs = [
  {
    label: "Home",
    index: 1,
    Component: Home
  },
  {
    label: "About",
    index: 2,
    Component: About
  },
  {
    label: "Contact",
    index: 3,
    Component: Contact
  }
];

const pillTabs = [
  {
    label: "Products",
    index: 1,
    Component: Products
  },
  {
    label: "Customers",
    index: 2,
    Component: Customers
  },
  {
    label: "Sales",
    index: 3,
    Component: Sales
  }
];

const TabsDemo: React.FC = () => {
  usePageTitle("Tabs", []);

  useBreadcrumb([
    { label: "Home", href: "/" },
    { label: "Demo", href: "/demo" },
    { label: "Tabs", href: "/demo/tab" },
  ]);

  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedOldStyleTab, setSelectedOldStyleTab] = useState<number>(tabs[0].index);
  const [selectedVerticalTab, setSelectedVerticalTab] = useState<number>(verticalTabs[0].index);
  const [selectedAccentTab, setSelectedAccentTab] = useState<number>(tabs[0].index);
  const [selectedIconsTab, setSelectedIconsTab] = useState<number>(tabs[0].index);
  const [selectedPillTab, setSelectedPillTab] = useState<number>(pillTabs[0].index);
  const [selectedPillAccentTab, setSelectedPillAccentTab] = useState<number>(pillTabs[0].index);

  return (
    <section className="centered centered--narrow">


      <div className="mb-4">
        <h1>Default</h1>
        <Tabs
          borderBottomColor={ColorDefinitions.None}
          tabs={[
            {index: 0, label: "Rapportages" },
            {index: 1, label: "Retourinformatie" },
          ]}
          selectedTab={selectedTab}
          onClick={setSelectedTab}
        />

        <TabPanes selectedTab={selectedTab}>
          <TabPane >Rapportages content goes here</TabPane>
          <TabPane>Retourinformatie content goes here</TabPane>
        </TabPanes>
      </div>

      <div className="mb-4">
        <h1>Oude stijl default</h1>
        <Tabs
          selectedTab={selectedOldStyleTab}
          onClick={setSelectedOldStyleTab}
          tabs={tabs}
          renderContent={true}
        />
      </div>

      <div className="mb-4">
        <h1>Vertical</h1>
        <Tabs
          variant="vertical"
          selectedTab={selectedVerticalTab}
          onClick={setSelectedVerticalTab}
          tabs={verticalTabs}
          renderContent={true}
        />
      </div>
      <div className="mb-4">
        <h1>Accent</h1>
        <Tabs
          selectedTab={selectedAccentTab}
          onClick={setSelectedAccentTab}
          tabs={tabs}
          renderContent={true}
          accentColor={ColorDefinitions.Blue}
        />
      </div>
      <div className="mb-4">
        <h1>Icons</h1>
        <Tabs
          selectedTab={selectedIconsTab}
          onClick={setSelectedIconsTab}
          renderContent={true}
          tabs={
            [

              {
                label: "Tab One",
                index: 1,
                iconName: IconDefinitions.star,
                Component: ContentOne
              },
              {
                label: "Tab Two",
                index: 2,
                iconName: IconDefinitions.calendar,
                Component: ContentTwo
              },
              {
                label: "Tab Three",
                index: 3,
                iconName: IconDefinitions.bulb,
                Component: ContentThree
              }
            ]
          }
        />
      </div>
      <div className="mb-4">
        <h1>Pills</h1>
        <Tabs
          variant="pills"
          selectedTab={selectedPillTab}
          onClick={setSelectedPillTab}
          tabs={pillTabs}
          renderContent={true}
        />
      </div>
      <div className="mb-4">
        <h1>Pills Accent</h1>
        <Tabs
          variant="pills"
          selectedTab={selectedPillAccentTab}
          onClick={setSelectedPillAccentTab}
          tabs={pillTabs}
          renderContent={true}
          accentColor={ColorDefinitions.Blue}
        />
      </div>
    </section>
  )
};

export default TabsDemo;