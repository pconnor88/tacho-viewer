import React, { useState } from 'react';
import { Tabs, Tab } from "@blueprintjs/core";
import './ContentsTabs.css';

export function ContentsTabs() {

    const [sections, setSections] = useState([
        {title: "IC card identification"},
        {title: "Chip identification"},
        {title: "Application identification"},
        {title: "Key and certificates"},
        {title: "Card identification"},
        {title: "Card holder identification"},
        {title: "Card download"},
        {title: "Driving licence information"},
        {title: "Events data"},
        {title: "Faults data"},
        {title: "Driver activity data"},
        {title: "Vehicles used data"},
        {title: "Card session data"},
        {title: "Control activity data"}
    ]);

    return (
        <div className="contents-tabs">
            <Tabs vertical>
                {sections.map(function(s) {
                    return (
                        <Tab title={s.title} id={s.title} key={s.title} />
                    );
                })}
            </Tabs>
        </div>
    );
}

