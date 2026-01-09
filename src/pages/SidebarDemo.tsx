import React from "react";
import { SidebarMenu, SidebarMenuItem } from "../components/Page/Navigation/SidebarMenu";
import { SidebarContentPanel } from "../components/Page/Sidebar/SidebarContentPanel";

export const SidebarDemo = () => {
    const tableItems: SidebarMenuItem[] = [
        { title: 'Datagrid', url: '/demo/datagrid' },
        { title: 'Datagrid all', url: '/demo/datagridall' },
        { title: 'Datagrid collapsibe row', url: '/demo/datagridcollapsible' },
        { title: 'Datagrid nested table', url: '/demo/datagridnestedteable' },
        { title: 'Datagrid checkboxes', url: '/demo/datagridcheckbox' },
        { title: 'Datagrid Toolbar', url: '/demo/datagridtoolbar' },
        { title: 'Datagrid Filter', url: '/demo/datagridfilter' },
    ];

     const formItems: SidebarMenuItem[] = [
        { title: 'Icons', url: '/demo/icons' },
        { title: 'Dropdown', url: '/demo/dropdown' },
        { title: 'Button', url: '/demo/button' },
    ];

    return (
        <>
            <SidebarContentPanel>
                <h4>Datagrid</h4>
            </SidebarContentPanel>

            <SidebarMenu menuItems={tableItems} />

             <SidebarContentPanel>
                <h4>Form elements</h4>
            </SidebarContentPanel>

            <SidebarMenu menuItems={formItems} />

        </>
    )
}

export default SidebarDemo;