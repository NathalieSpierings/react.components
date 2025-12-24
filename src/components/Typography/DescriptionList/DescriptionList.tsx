import React from 'react';

export interface DescriptionListItem {
    id?: string | number;
    label: string;
    text: string;
}
export interface DescriptionListProps {
    data: DescriptionListItem[];
}

const DescriptionList: React.FC<DescriptionListProps> = ({ data }) => {
    return (
        <dl>
            {data.map((item, idx) => (
                <React.Fragment key={item.id || idx}>
                    <dt>{item.label}</dt>
                    <dd>{item.text}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
};

export default DescriptionList;
