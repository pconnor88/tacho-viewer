import React, { Fragment } from 'react';

export function ShowHide(props) {

    function renderContent(content) {
        return content == null ? <Fragment /> : content;
    }

    return props.evaluator ? renderContent(props.show) : renderContent(props.hide);
}