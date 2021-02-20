import React, { useState } from 'react';
import { Tabs, Tab, Button } from "@blueprintjs/core";
import { Fragment } from "react";

import './FileTabs.css'

export function FileTabs(props) {

    return (
        <div id="file-list">
            <Tabs id="file-tabs" onChange={props.onChangeFile} selectedTabId={props.selectedFile ? props.selectedFile.id : ""}>
                {props.files.map(function(f) {
                    return (
                        <Tab id={f.id} key={f.id} children={(
                            <Fragment>
                                <Fragment>{f.filename}</Fragment>
                                <Button className="close-tab" minimal icon="small-cross" small onClick={() => {props.onCloseFile(f);}} />
                            </Fragment>
                        )} />
                    );
                })}
            </Tabs>
        </div>
    );
}

