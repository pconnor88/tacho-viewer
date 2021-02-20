import React, { useState } from 'react';
import { Dialog } from "@blueprintjs/core";

export function OpenFileDialog(props) {

    return (
        <Dialog
            isOpen={props.open}
            title={props.title}
            isCloseButtonShown={true}
            onClose={props.handleClose}
            autoFocus={false}
            enforceFocus={false}
        >
            <div className="bp3-dialog-body">
                {props.children}
            </div>

        </Dialog>
    );
}

