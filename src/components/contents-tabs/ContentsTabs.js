import React, { useState } from 'react';
import { Tabs, Tab } from "@blueprintjs/core";
import './ContentsTabs.css';

export function ContentsTabs(props) {

    return (
        <div className="contents-tabs">
            <Tabs vertical onChange={props.onContentSelected} selectedTabId={props.selectedContent ? props.selectedContent.fileId : ""}>
                {props.contents.map(function(s) {
                    return (
                        <Tab title={s.title} id={s.fileId} key={s.fileId} />
                    );
                })}
            </Tabs>
        </div>
    );
}

