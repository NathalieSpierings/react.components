import React from "react";
import { SidebarMenu, SidebarMenuItem } from "../components/Page/Navigation/SidebarMenu";
import { SidebarContentPanel } from "../components/Page/Sidebar/SidebarContentPanel";

export const SidebarDemo = () => {
    const tableItems: SidebarMenuItem[] = [
        { title: 'Datagrid', url: '/demo/datagrid' },
        { title: 'Datagrid collapsibe row', url: '/demo/datagridcollapsible' },
        { title: 'Datagrid checkboxes', url: '/demo/datagridcheckbox' },
        { title: 'Datagrid Toolbar', url: '/demo/datagridtoolbar' },
        { title: 'Datagrid Filter', url: '/demo/datagridfilter' },
    ];

    return (
        <>
            <SidebarContentPanel>
                <h4>Datagrid</h4>
            </SidebarContentPanel>

            <SidebarMenu menuItems={tableItems} />

        </>
    )
}

export default SidebarDemo;