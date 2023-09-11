import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetailsCard from '../ChefDetailsCard/ChefDetailsCard';

const ChefDetails = () => {
    const details = useLoaderData()
    return (
        <div>
            {
                details.map(detail => <ChefDetailsCard
                 key={detail._id}
                 detail={detail}
                ></ChefDetailsCard>)
            }
        </div>
    );
};

export default ChefDetails;