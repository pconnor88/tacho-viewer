import React, { useEffect, useState } from 'react';
import { BinaryService } from '../../services';

export function ContentsValues(props) {

    const [tabValues, setTabValues] = useState([]);
    useEffect(function() {
        
        if(!props.content) {
            return;
        }

        var values = BinaryService.transformObjectToValues(props.content.values);
        setTabValues(values);

    }, [props.content]);


    return (
        <div>
            {tabValues.map(function (s) {
                return (
                    <p key={s.title}>{s.title} - {s.value}</p>
                );
            })}
        </div>
    );
}

