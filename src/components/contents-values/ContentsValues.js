import React, { useEffect, useState } from 'react';
import { Column, Table, Cell } from "@blueprintjs/table";
import { BinaryService } from '../../services';

export function ContentsValues(props) {

    const [tabValues, setTabValues] = useState([]);
    const [columns, setColumns] = useState([]);
    useEffect(function() {
        
        if(!props.content) {
            return;
        }

        var values = BinaryService.transformObjectToValues(props.content.contents, props.content.values);
        console.log("_____", props.content);
        var itemColumns = [];

        if(props.content.repeater) {

        } else {
            itemColumns = [
                <Column name="Name" cellRenderer={cellRendererName} />,
                <Column name="Value" cellRenderer={cellRendererValue} />
            ]
        }

        setTabValues(values);
        setColumns(itemColumns);

    }, [props.content]);

    const cellRendererName = (rowIndex) => {
        return <Cell>{tabValues[rowIndex].title}</Cell>
    };

    const cellRendererValue = (rowIndex) => {
        return <Cell>{tabValues[rowIndex].value}</Cell>
    };

    return (
        <div>
            <Table numRows={tabValues.length}>
                <Column name="Name" cellRenderer={cellRendererName} />
                <Column name="Value" cellRenderer={cellRendererValue} />
            </Table>
        </div>
    );
}

