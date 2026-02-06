import React from "react";
import { SidebarMenu, SidebarMenuItem } from "../components/Page/Navigation/SidebarMenu";
import { SidebarContentPanel } from "../components/Page/Sidebar/SidebarContentPanel";

export const SidebarDemo = () => {
    const tableItems: SidebarMenuItem[] = [
        { title: 'Datagrid', url: '/demo/datagrid' },
        { title: 'Datagrid grid layout', url: '/demo/datagridgridlayout' },
        { title: 'Datagrid all', url: '/demo/datagridall' },
        { title: 'Datagrid collapsibe row', url: '/demo/datagridcollapsible' },
        { title: 'Datagrid nested table', url: '/demo/datagridnestedteable' },
        { title: 'Datagrid checkboxes', url: '/demo/datagridcheckbox' },
        { title: 'Datagrid Toolbar', url: '/demo/datagridtoolbar' },
        { title: 'Datagrid Filter', url: '/demo/datagridfilter' },
        { title: 'Datagrid Filter data bind', url: '/demo/datagridfilterdatabind' },
        { title: 'Datagrid table info', url: '/demo/datagridtableinfo' },
    ];

    const formItems: SidebarMenuItem[] = [
        { title: 'Checkbox', url: '/demo/checkbox' },
        { title: 'DateInput', url: '/demo/dateinput' },
        { title: 'DatePicker', url: '/demo/datepicker' },
        { title: 'Dropdown', url: '/demo/dropdown' },
        { title: 'Input', url: '/demo/input' },
        { title: 'Password Input', url: '/demo/inputpassword' },
        { title: 'Search Input', url: '/demo/inputsearch' },
        { title: 'Multiselect', url: '/demo/multiselect' },
        { title: 'FileSelect', url: '/demo/fileselect' },
        { title: 'Radiobutton', url: '/demo/radiobutton' },
        { title: 'TagsInput', url: '/demo/tagsinput' },
        { title: 'Toggleswitch', url: '/demo/toggleswitch' },
    ];

    const uiItems: SidebarMenuItem[] = [
        { title: 'Accordion', url: '/demo/accordion' },
        { title: 'Alert', url: '/demo/alert' },
        { title: 'Avatar', url: '/demo/avatar' },
        { title: 'Badge', url: '/demo/badge' },
        { title: 'Button', url: '/demo/button' },
        { title: 'Card', url: '/demo/card' },
        { title: 'Checkbox animated', url: '/demo/checkboxanimated' },
        { title: 'Collapsible', url: '/demo/collapsible' },
        { title: 'Collection', url: '/demo/collection' },
        { title: 'ConfirmDialog', url: '/demo/confirm' },
        { title: 'Content Item', url: '/demo/contentitem' },
        { title: 'Dismiss button', url: '/demo/dismiss' },
        { title: 'Divider', url: '/demo/divider' },
        { title: 'Drawer', url: '/demo/drawer' },
        { title: 'DuoColum', url: '/demo/duocolumn' },
        { title: 'Error 403', url: '/demo/error403' },
        { title: 'Error 404', url: '/demo/error404' },
        { title: 'Error 500', url: '/demo/error500' },
        { title: 'Fieldset', url: '/demo/fieldset' },
        { title: 'Icons', url: '/demo/icons' },
        { title: 'Landingspage', url: '/demo/landingspage' },
        { title: 'Loader', url: '/demo/loader' },
        { title: 'Modals', url: '/demo/modal' },
        { title: 'Page overlay', url: '/demo/pageoverlay' },
        { title: 'Ripple effect', url: '/demo/ripple' },
        { title: 'Slider', url: '/demo/slider' },
        { title: 'Tabs', url: '/demo/tab' },
        { title: 'Toastr', url: '/demo/toastr' },
        { title: 'Tooltip', url: '/demo/tooltip' },
        { title: 'Widget', url: '/demo/widget' },
        { title: 'Wizard', url: '/demo/wizard' },
    ];

    const layoutItems: SidebarMenuItem[] = [
        { title: 'Column layout', url: '/demo/columnlayout' },
        { title: 'Column layout header border', url: '/demo/columnlayout-header' },
        { title: 'Column layout mobile primary view aside', url: '/demo/columnlayout-primary-aside' },
        { title: 'Column layout mobile primary view main', url: '/demo/columnlayout-primary-main' },
        { title: 'Column layout aside left', url: '/demo/columnlayout-aside-left' },
        { title: 'Column layout aside right', url: '/demo/columnlayout-aside-right' },
        { title: 'Column layout tabs', url: '/demo/columnlayout-tabs' },
    ]
    return (
        <>
            <SidebarContentPanel>
                <h4>Layout</h4>
            </SidebarContentPanel>
            <SidebarMenu menuItems={layoutItems} />

            <SidebarContentPanel>
                <h4>Datagrid</h4>
            </SidebarContentPanel>
            <SidebarMenu menuItems={tableItems} />

            <SidebarContentPanel>
                <h4>Form elements</h4>
            </SidebarContentPanel>
            <SidebarMenu menuItems={formItems} />

            <SidebarContentPanel>
                <h4>UI elements</h4>
            </SidebarContentPanel>
            <SidebarMenu menuItems={uiItems} />


        </>
    )
}

export default SidebarDemo;