import React from 'react';

const RedditDataDisplay = ({ jsonData }) => {
    // Assuming jsonData is the JSON data provided
    const { children } = jsonData.data;

    return (
        <div>
            {children.map((child, index) => (
                <div key={index}>
                    <p>Created UTC: {child.data.created_utc}</p>
                </div>
            ))}
        </div>
    );
};

export default RedditDataDisplay;
