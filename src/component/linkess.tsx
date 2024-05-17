import React from 'react';
import CustomCard from './card';

interface CustomLinkeesProps {
    items: {
        title: string;
        subtitle: string;
        type: string;
        link: string;
    }[];
}

const CustomLinkees: React.FC<CustomLinkeesProps> = ({ items }) => {
    return (
        <div className="custom-linkees">
            {items.map((item, index) => (
                <CustomCard key={index} item={item} />
            ))}
        </div>
    );
};

export default CustomLinkees;
