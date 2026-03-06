import React, { useEffect, useState } from "react";
import { ColumnLayout, ColumnLayoutHeader, ColumnLayoutMain, ContentItem, Tabs, useLayoutContext } from "../../../components";
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



  const [selectedTab, setSelectedTab] = useState(0);

  const hasAside = true;


  return (

    <ColumnLayout>
      <ColumnLayoutMain>

        <ColumnLayoutHeader>
          <ContentItem item={
            {
              id: '1',
              prefix: (

                <div className="flex-column">
                  <div className="title  ">Bulkupload</div>
                  <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb__item"><a aria-label="Home" href="/suite-dossier" data-discover="true">Home</a></li>
                      <li aria-label="Bulkupload" className="breadcrumb__item active">Bulkupload</li>
                    </ul>
                  </nav>
                </div>
              ),
              separatorAfterPrefix: true,
              content: (

                <Tabs placement="bottom"
                  borderBottomColor={ColorDefinitions.None}
                  tabs={[
                    { index: 0, label: "Rapportages" },
                    { index: 1, label: "Retourinformatie" },
                  ]}
                  selectedTab={selectedTab}
                  onClick={setSelectedTab}
                />


              ),
              postfix: (
                <button className="btn btn--shadow btn-primary">Opslaan<div className="sc-beySbL eFIXXy"></div>
                </button>
              )
            }
          } />
        </ColumnLayoutHeader>

        <TabPanes selectedTab={selectedTab}>
          <TabPane>
            Rapportages content goes here
            </TabPane>
          <TabPane>
            Retourinformatie content goes here
            </TabPane>
        </TabPanes>

      </ColumnLayoutMain>
    </ColumnLayout>


  )
};
export default ColumnLayoutTabsDemo;