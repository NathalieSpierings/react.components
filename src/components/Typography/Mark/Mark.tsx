import React from 'react';

export interface MarkProps {
    label: string;
}

const Mark: React.FC<MarkProps> = ({ label }) => {
    return (
        <p>
            <mark>{label}</mark>
        </p>
    );
};

export default Mark;
