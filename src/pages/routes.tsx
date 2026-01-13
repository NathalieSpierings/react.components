import React from "react";
import { matchPath } from "react-router";
import { proxyPrefix } from "../config";
import DatagridCheckboxDemo from "./Demo/DatagridCheckboxDemo";
import DatagridCollapsibleDemo from "./Demo/DatagridCollapsibleDemo";
import DatagridDemo from "./Demo/DatagridDemo";
import DemoPage from "./DemoPage";
import HomePage from "./HomePage";
import DatagridToolbarDemo from "./Demo/DatagridToolbarDemo";
import DatagridFilterDemo from "./Demo/DatagridFilterDemo";
import DropdownDemo from "./Demo/Forms/DropdownDemo";
import DatagridNestedTableDemo from "./Demo/DatagridNestedTableDemo";
import ButtonDemo from "./Demo/ButtonDemo";
import IconDemo from "./Demo/IconDemo";
import DatagridAllDemo from "./Demo/DatagridAllDemo";
import AccordionDemo from "./Demo/AccordionDemo";
import AlertDemo from "./Demo/AlertDemo";
import CheckboxAnimatedDemo from "./Demo/CheckboxAnimatedDemo";
import AvatarDemo from "./Demo/AvatarDemo";
import BadgeDemo from "./Demo/BadgeDemo";
import CardDemo from "./Demo/CardsDemo";
import CollapsibleDemo from "./Demo/CollapsibleDemo";
import CollectionDemo from "./Demo/CollectionDemo";
import ConfirmDialogDemo from "./Demo/ConfirmDialogDemo";
import ContentItemDemo from "./Demo/ContentItemDemo";
import DismissDemo from "./Demo/DismissDemo";
import DividerDemo from "./Demo/DividerDemo";
import DrawerDemo from "./Demo/DrawerDemo";
import CheckboxDemo from "./Demo/Forms/CheckboxDemo";
import DateInputDemo from "./Demo/Forms/DateInputDemo";
import DatePickerDemo from "./Demo/Forms/DatepickerDemo";
import DuoColumnDemo from "./Demo/DuoColumnDemo";
import Error403Demo from "./Demo/Error403Damo ";
import Error404Demo from "./Demo/Error404Damo";
import Error500Demo from "./Demo/Error500Damo";
import FieldsetDemo from "./Demo/FieldsetDemo";
import FileSelectDemo from "./Demo/Forms/FileSelectDemo";
import InputDemo from "./Demo/Forms/InputDemo";
import MultiselectDemo from "./Demo/Forms/MultiselectDemo";
import RadioButtonDemo from "./Demo/Forms/RadioButtonDemo";
import TagsinputDemo from "./Demo/Forms/TagsinputDemo";
import ToggleSwitchDemo from "./Demo/Forms/ToggleSwitchDemo";
import LandingsPageDemo from "./Demo/LandingsPageDemo";
import LoaderDemo from "./Demo/LoaderDemo";
import ModalDemo from "./Demo/ModalDemo";
import PageOverlayDemo from "./Demo/PageOverlayDemo";
import RippleDemo from "./Demo/RippleDemo";
import SliderDemo from "./Demo/SliderDemo";
import TabsDemo from "./Demo/TabsDemo";
import ToastrDemo from "./Demo/ToasterDemo";
import TooltipDemo from "./Demo/TooltipDemo";
import WidgetDemo from "./Demo/WidgetDemo";
import WizardDemo from "./Demo/WizardDemo/WizrdDemo";

export const getInitialMenuItem = (pathname: string) => {
	if (matchPath(proxyPrefix + "/", pathname)) {
		return "home";
	}
	if (matchPath(proxyPrefix + "/products/*", pathname)) {
		return "products";
	}

	if (matchPath(proxyPrefix + "/demo/*", pathname)) {
		return "demo";
	}

	return undefined;
};

export const routes = [
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/demo",
		element: <DemoPage />
	},
	{
		path: "/demo/accordion",
		element: <AccordionDemo />
	},
	{
		path: "/demo/alert",
		element: <AlertDemo />
	},
	{
		path: "/demo/checkboxanimated",
		element: <CheckboxAnimatedDemo />
	},
	{
		path: "/demo/avatar",
		element: <AvatarDemo />
	},
	{
		path: "/demo/badge",
		element: <BadgeDemo />
	},

	{
		path: "/demo/card",
		element: <CardDemo />
	},
	{
		path: "/demo/checkbox",
		element: <CheckboxDemo />
	},
	{
		path: "/demo/collapsible",
		element: <CollapsibleDemo />
	},
	{
		path: "/demo/collection",
		element: <CollectionDemo />
	},
	{
		path: "/demo/confirm",
		element: <ConfirmDialogDemo />
	},
	{
		path: "/demo/contentitem",
		element: <ContentItemDemo />
	},
	{
		path: "/demo/dateinput",
		element: <DateInputDemo />
	},
	{
		path: "/demo/datepicker",
		element: <DatePickerDemo />
	},
	{	
		path: "/demo/dismiss",
		element: <DismissDemo />
	},
	{
		path: "/demo/divider",
		element: <DividerDemo />
	},
	{
		path: "/demo/drawer",
		element: <DrawerDemo />
	},
	{
		path: "/demo/datagrid",
		element: <DatagridDemo />
	},
	{
		path: "/demo/datagridall",
		element: <DatagridAllDemo />
	},

	{
		path: "/demo/datagridcollapsible",
		element: <DatagridCollapsibleDemo />
	},
	{
		path: "/demo/datagridnestedteable",
		element: <DatagridNestedTableDemo />
	},
	{
		path: "/demo/datagridcheckbox",
		element: <DatagridCheckboxDemo />
	},
	{
		path: "/demo/datagridtoolbar",
		element: <DatagridToolbarDemo />
	},
	{
		path: "/demo/datagridfilter",
		element: <DatagridFilterDemo />
	},
	{
		path: "/demo/icons",
		element: <IconDemo />
	},
	{
		path: "/demo/dropdown",
		element: <DropdownDemo />
	},
	{
		path: "/demo/button",
		element: <ButtonDemo />
	},
	{
		path: "/demo/duocolumn",
		element: <DuoColumnDemo />
	},
	{
		path: "/demo/error403",
		element: <Error403Demo />
	},
	{
		path: "/demo/error404",
		element: <Error404Demo />
	},
	{	   
		path: "/demo/error500",
		element: <Error500Demo />
	},
	{
		path: "/demo/fieldset",
		element: <FieldsetDemo />
	},
	{
		path: "/demo/fileselect",
		element: <FileSelectDemo />
	},
	{
		path: "/demo/input",
		element: <InputDemo />
	},
	{
		path: "/demo/landingspage",
		element: <LandingsPageDemo />
	},
	{
		path: "/demo/loader",
		element: <LoaderDemo />
	},
	{
		element: <ModalDemo />,
		path: "/demo/modal"
	},
	{
		path: "/demo/multiselect",
		element: <MultiselectDemo />
	},
	{
		path: "/demo/pageoverlay",
		element: <PageOverlayDemo />
	},	
	{
		path: "/demo/radiobutton",
		element: <RadioButtonDemo />
	},
	{
		path: "/demo/ripple",
		element: <RippleDemo />
	},	
	{
		path: "/demo/slider",
		element: <SliderDemo />
    },
	{
		path: "/demo/tab",
		element: <TabsDemo />
	},
    {
		path: "/demo/tagsinput",
		element: <TagsinputDemo />
	},
	{
		path: "/demo/toastr",
		element: <ToastrDemo />
	},
    {
		path: "/demo/toggleswitch",
		element: <ToggleSwitchDemo />
	},
    {
		path: "/demo/tooltip",
		element: <TooltipDemo />,
    },
	{
		path: "/demo/widget",
		element: <WidgetDemo />
	},
	{
		path: "/demo/wizard",
		element: <WizardDemo />    
    }
];

// export const errorRoutes = [
// 	{
// 		path: "*",
// 		element: <ErrorPage />,
// 	},
// ];
