import React, { useState } from 'react';
import { Navbar, Popover, Menu, MenuItem, Position, Button, Alignment, FileInput, Intent, Spinner } from "@blueprintjs/core";
import { OpenFileDialog } from '../open-file-dialog';
import { Fragment } from "react";
import './MenuBar.css';
import { ShowHide } from '../show-hide';

export function MenuBar(props) {

    const mainMenu = (
        <Menu>
            <MenuItem icon="document-open" text="Open File" label="⌘O" onClick={openFileDialog} />
        </Menu>
    );

    const [showOpenFileModal, setShowOpenFileModal] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");

    function openFileDialog() {
        setShowOpenFileModal(true);
    }

    function onFileSelected(e) {
        if (e && e.nativeEvent && e.nativeEvent.srcElement && e.nativeEvent.srcElement.files) {
            var file = e.nativeEvent.srcElement.files[0];
            setSelectedFile(file.name);
            console.log(file);
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                props.onFileOpen({
                    filename: file.name,
                    binary: evt
                });
                setSelectedFile("");
                setShowOpenFileModal(false);
            }
            reader.onerror = function (evt) {
                console.log("ERROR");
            }
        }
    }

    return (
        <Fragment>
            <Navbar id="top-bar">
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading className="app-title">Tacho Viewer</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Popover content={mainMenu} position={Position.BOTTOM} className="bp3-light">
                        <Button className="bp3-minimal" icon="menu" />
                    </Popover>
                </Navbar.Group>
            </Navbar>
            <OpenFileDialog open={showOpenFileModal} title="Open File">
                <div>
                    <ShowHide
                        evaluator={selectedFile !== ""}
                        show={(
                            <div className="loading-row">
                                <Spinner className="loading-icon" intent={Intent.PRIMARY} size={26}></Spinner> <span>Reading file</span>
                            </div>
                        )}
                        hide={(
                            <FileInput text="Choose file..." disabled={selectedFile != ""} onInputChange={onFileSelected} />
                        )}
                    />

                </div>
            </OpenFileDialog>
        </Fragment>
    );
}
