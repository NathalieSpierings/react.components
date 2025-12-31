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
import DropdownDemo from "./Demo/DropdownDemo";

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
		path: "/demo/datagrid",
		element: <DatagridDemo />
	},
	{
		path: "/demo/datagridcollapsible",
		element: <DatagridCollapsibleDemo />
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
		path: "/demo/dropdown",
		element: <DropdownDemo />
	},
];

// export const errorRoutes = [
// 	{
// 		path: "*",
// 		element: <ErrorPage />,
// 	},
// ];
