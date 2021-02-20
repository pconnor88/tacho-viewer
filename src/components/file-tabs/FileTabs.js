import React, { useState } from 'react';
import { Tabs, Tab, Button } from "@blueprintjs/core";
import { Fragment } from "react";

import './FileTabs.css'

export function FileTabs() {

    const [files, setFiles] = useState([
        {filename: "driver_Michael_Jordan_0343243431.ddd", id:"123"},
        {filename: "corrupt-file-abc.ddd", id:"456"}
    ]);

    return (
        <div id="file-list">
            <Tabs id="file-tabs" selectedTabId="123">
                {files.map(function(f) {
                    return (
                        <Tab id={f.id} key={f.id} children={(
                            <Fragment>
                                <Fragment>{f.filename}</Fragment>
                                <Button className="close-tab" minimal icon="small-cross" small />
                            </Fragment>
                        )} />
                    );
                })}
            </Tabs>
        </div>
    );
}

