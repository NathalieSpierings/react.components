import React, { ReactElement, useState } from "react";
import Datagrid from "../components/Data/Datagrid/Datagrid";
import { getOrdersQuery, MyGetModel } from "../lib/testdata/models";
import { TableRowConfig } from "../components/Data/Table/TableRowConfig";
import { TableGetDataArguments } from "../components/Data/Table/TableData";
import useTableQueryClientFilter from "../lib/hooks/useTableQueryClientFilter";



const HomePage = (): ReactElement => {

   
    return (
        <div>
            Home page

        </div>
    )
}

export default HomePage;