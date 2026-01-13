import React, { useEffect, useState } from "react";
import usePageTitle from "../../../lib/hooks/usePageTitle";
import useBreadcrumb from "../../../lib/hooks/useBreadcrumb";
import Step1 from "../WizardDemo/Step1"; 
import Step2 from "../WizardDemo/Step2"; 
import Step3 from "../WizardDemo/Step3"; 
import Step4 from "../WizardDemo/Step4"; 
import { useLayoutContext } from "../../../components/Providers/LayoutContext";
import { Wizard } from "../../../components/UI/Wizard";

const WizardDemo: React.FC = () => {

    const { setFullscreen } = useLayoutContext();
    const { setShowHeader } = useLayoutContext();

    useEffect(() => {
        setFullscreen(true);
        setShowHeader(false);
        return () => {
            setFullscreen(false);
            setShowHeader(true);
        };
    }, [setFullscreen, setShowHeader]);

  
    usePageTitle("Wizard", []);

    useBreadcrumb([
        { label: "Home", href: "/" },
        { label: "Demo", href: "/demo" },
        { label: "Wizard", href: "/demo/wizard" },
    ]);

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const steps = [
        {
            title: 'Selecteer zorggroep',
            content: <Step1 firstName={firstName} onChange={setFirstName} />,
            isValid: () => firstName.trim().length > 0,
        },
        {
            title: 'Selecteer periode',
            content: <Step2 lastName={lastName} onChange={setLastName} />,
            isValid: () => lastName.trim().length > 0,
        },
        {
            title: 'Configuratie controle',
            content: <Step3 subject={subject} onChange={setSubject} />,
            isValid: () => subject.trim().length > 0,
        },
        {
            title: 'Controleer overzicht',
            content: <Step4 message={message} onChange={setMessage} />,
            isValid: () => message.trim().length > 0,
        },
    ];

    const handleFinish = () => {
        alert('Wizard completed!');
    };

    return (
        <Wizard
        enabled={true}
            steps={steps}
            onComplete={handleFinish}
            onCompleteLabel="Start batch"
        />
    )
}
export default WizardDemo;