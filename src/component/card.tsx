import React from 'react';

interface CustomCardProps {
    item: {
        title: string;
        subtitle: string;
        type: string;
        link: string;
    };
}

const CustomCard: React.FC<CustomCardProps> = ({ item }) => {
    const { title, subtitle, type, link } = item;

    return (
        <div className="custom-card">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={`/${type}.png`} alt={type} className="card-image" style={{ height: '50%', width: '75%', marginTop: 20 }} />
                <div className="card-content">
                    <h3>📌 Smartfolks Coffee Bintaro Plaza </h3>
                    <p>Bintaro Plaza, Lantai 1
                        Jl. Bintaro Utama (Bintaro Sektor 3A), Bintaro, Tangerang Selatan</p>
                </div>
            </a>

        </div>
    );
};

export default CustomCard;
