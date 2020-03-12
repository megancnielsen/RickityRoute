import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface NumProps {
    num: string;
}

const NumberComp: React.FC<RouteComponentProps<NumProps>> = ({ num }) => {
    if (isNaN(+(num as string))) {
        return (
            <div>
                <p>{num}</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>
                    Number: {num}
                </p>
            </div>
        )
    }
}

export default NumberComp;