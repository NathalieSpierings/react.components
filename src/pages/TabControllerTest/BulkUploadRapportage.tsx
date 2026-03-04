import { useMutation } from "@tanstack/react-query";
import React, { forwardRef, useImperativeHandle } from "react";



export interface BulkuploadRapportageRef {
    handleSave: () => void;
    isIdle: () => boolean;
}

const BulkuploadRapportage = forwardRef<BulkuploadRapportageRef>((_, ref) => {

    const mutation = useMutation({

    });

    const save = () => {
        mutation.mutate;
        console.log("Rapportages opslaan!");
    };


    useImperativeHandle(ref, () => ({
        handleSave: save,
        isIdle: () => mutation.isIdle 
    }));



    return (
        <div><h2>Rapportage tab</h2></div>
    )
});


export default BulkuploadRapportage;