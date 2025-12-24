import React from 'react';

export interface CiteProps {
    label: string;
}

const Cite: React.FC<CiteProps> = ({ label }) => {
    return <cite>{label}</cite>;
};

export default Cite;
