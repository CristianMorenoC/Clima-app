import React from 'react';

//componentes
import Card from './Card';

const WeatherInfo = ({clima}) => {
    return (
            <div>
                <div>
                {
                clima.city !== '' &&
                <Card clima={clima} />
                }
                </div>
            </div>
     );
}

export default WeatherInfo;