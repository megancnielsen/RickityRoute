import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface ColorProps {
    colorW: string;
    colorBG: string;
    word: string;
}

const ColorComp: React.FC<RouteComponentProps<ColorProps>> = ({ colorBG, colorW, word }) => {
    return (<div>
        <h1 style= {{ color:colorW, backgroundColor:colorBG }} >{word}</h1>
    </div>);
}
export default ColorComp;