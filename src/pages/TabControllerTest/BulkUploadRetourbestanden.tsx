

import { useMutation } from "@tanstack/react-query";
import React, { forwardRef, useImperativeHandle } from "react";


export interface BulkuploadRetourbestandenProps {
  
}

export interface BulkuploadRetourbestandenRef {
    handleSave: () => void;
    isIdle: () => boolean;
}

const BulkuploadRetourbestanden = forwardRef<BulkuploadRetourbestandenRef>((_, ref) => {
     const mutation = useMutation({

    });

    const save = () => {
        mutation.mutate;
         console.log("Retourbestande save for tab");
    };

    useImperativeHandle(ref, () => ({
        handleSave: save,
        isIdle: () => mutation.isIdle 
    }));

    return (
        <div><h2>Retourbestande tab</h2></div>
    )
});


export default BulkuploadRetourbestanden;