import React, { useEffect, useState } from "react";
import { ColumnLayout, Tabs, useLayoutContext } from "../../../components";
import { ColorDefinitions, IconDefinitions } from "../../../lib/utils/definitions";
import TabPanes from "../../../components/UI/Tabs/TabPanes";
import TabPane from "../../../components/UI/Tabs/TabPane";


const ContentOne = () =>
  <>
    <h3>Tab One</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </>
  ;

const ContentTwo = () =>
  <>
    <h3>Tab Two</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
    </p>
  </>
  ;

const ColumnLayoutTabsDemo = () => {

  const { setFullscreen } = useLayoutContext();
  const { setShowHeader } = useLayoutContext();

  useEffect(() => {
    setFullscreen(true);
    setShowHeader(false);
    return () => {
      setFullscreen(false);
      setShowHeader(true);
    };
  }, [setFullscreen, setShowHeader]);


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
    }
  ];

  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);


  return (
    <ColumnLayout asidePosition="right" >
      <ColumnLayout.Aside>
        <ColumnLayout.Header>
          Aside Header content
        </ColumnLayout.Header>
        <p>Aside content</p>
      </ColumnLayout.Aside>

      <ColumnLayout.Main>
        <ColumnLayout.Header>


          <div className="content-item ">
            <div className="prefix">
              <div className="title  ">Bulkupload</div>
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb__item"><a aria-label="Home" href="/suite-dossier" data-discover="true">Home</a></li>
                  <li aria-label="Bulkupload" className="breadcrumb__item active">Bulkupload</li>
                </ul>
              </nav>
            </div>
            <div className="meta">
              <Tabs placement="bottom"
                borderBottomColor={ColorDefinitions.Transparent}
                tabs={[
                  { label: "Rapportages" },
                  { label: "Retourinformatie" },
                ]}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
              />

            </div>
            <div className="actions ">
              <button className="btn btn--shadow btn-primary">Opslaan<div className="sc-beySbL eFIXXy"></div>
              </button>
            </div>
          </div>




        </ColumnLayout.Header>
        <div>
          Main content

          <TabPanes selectedTab={selectedTab}>
            <TabPane>Rapportages content goes here</TabPane>
            <TabPane>Retourinformatie content goes here</TabPane>
          </TabPanes>


        </div>
      </ColumnLayout.Main>
    </ColumnLayout>
  )
};
export default ColumnLayoutTabsDemo;