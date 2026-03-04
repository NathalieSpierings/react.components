
import React, { ReactElement, useRef, useState } from "react";
import { TabPane, TabPanes, Tabs } from "../../components/UI/Tabs";
import BulkuploadRapportage, { BulkuploadRapportageRef } from "./BulkUploadRapportage";
import BulkuploadRetourbestanden, { BulkuploadRetourbestandenRef } from "./BulkUploadRetourbestanden";

const BulkUpload = (): ReactElement => {

    const rapportageRef = useRef<BulkuploadRapportageRef>(null);
    const retourRef = useRef<BulkuploadRetourbestandenRef>(null);


    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = [
        { index: 0, label: "Rapportage" },
        { index: 1, label: "Retourbestanden" },
    ];

    const handleTabChange = (index: number) => {
        setSelectedTab(index);
    };

    const getButtonLabel = () => {
        const tab = tabs.find(t => t.index === selectedTab);
        return tab ? `${tab.label} opslaan` : "Opslaan";
    };

    const handleButtonDisabled = () => {
    if (selectedTab === 0 && rapportageRef.current) {
        return !rapportageRef.current.isIdle();
    }
    if (selectedTab === 1 && retourRef.current) {
        return !retourRef.current.isIdle();
    }
    return false;
};

    const handleSave = () => {
        if (selectedTab === 0 && rapportageRef.current) {
            rapportageRef.current.handleSave();
        }
        if (selectedTab === 1 && retourRef.current) {
            retourRef.current.handleSave();
        }
    };

    return (
        <div>
            <span>Mijn button in header:</span>
            <button onClick={handleSave} disabled={handleButtonDisabled()}>{getButtonLabel()}</button>

            <Tabs
                tabs={tabs}
                selectedTab={selectedTab}
                onClick={handleTabChange}
            />

            <TabPanes selectedTab={selectedTab}>
                <TabPane>
                    <BulkuploadRapportage ref={rapportageRef} />
                </TabPane>
                <TabPane>
                    <BulkuploadRetourbestanden ref={retourRef} />
                </TabPane>
            </TabPanes>


        </div>
    );
};


export default BulkUpload;