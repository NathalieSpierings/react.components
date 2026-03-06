import React from "react";
import { SidebarMenu, SidebarMenuItem } from "../components/Page/Navigation/SidebarMenu";
import { SidebarContentPanel } from "../components/Page/Sidebar/SidebarContentPanel";

export const SidebarDemo = () => {

    const basicItems: SidebarMenuItem[] = [
        { title: 'Typography', url: '/demo/typography' },
    ];


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
        { title: 'Dismissable box', url: '/demo/dismissable-box' },
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
        { title: 'Default', url: '/demo/columnlayout' },
        { title: 'Aside left', url: '/demo/columnlayout-aside-left' },
        { title: 'Aside right', url: '/demo/columnlayout-aside-right' },
        { title: 'Main only', url: '/demo/columnlayout-main-only' },
        { title: 'Mobile primary aside', url: '/demo/columnlayout-primary-aside' },
        { title: 'Mobile primary main', url: '/demo/columnlayout-primary-main' },
        { title: 'Tabs', url: '/demo/columnlayout-tabs' },
        { title: 'Header border', url: '/demo/columnlayout-header' },
        { title: 'Toggle mobile from aside', url: '/demo/columnlayout-toggle-from-aside' },
        { title: 'Columns Main and aside', url: '/demo/columnlayout-columns' },
        { title: 'Main column', url: '/demo/columnlayout-columns-main' },
        { title: 'Aside column', url: '/demo/columnlayout-columns-aside' },

    ]
    return (
        <>


            <SidebarContentPanel>
                <h4>Basics</h4>
            </SidebarContentPanel>
            <SidebarMenu menuItems={basicItems} />
            <SidebarContentPanel>
                <h4>Column Layout</h4>
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