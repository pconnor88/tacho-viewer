import React, { useState, useMemo } from 'react';
import { Navbar, Popover, Menu, MenuItem, Position, Button, Alignment, FileInput, Intent, Spinner, useHotkeys } from "@blueprintjs/core";
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

    const hotkeys = useMemo(() => [
        {
            combo: "cmd+o",
            global: true,
            label: "Open file",
            onKeyDown: (e) => {
                openFileDialog();
                e.preventDefault();
            }
        }
    ], []);
    const { handleKeyDown, handleKeyUp } = useHotkeys(hotkeys);

    function openFileDialog() {
        setShowOpenFileModal(true);
    }

    function onFileSelected(e) {
        if (e && e.nativeEvent && e.nativeEvent.srcElement && e.nativeEvent.srcElement.files) {
            var file = e.nativeEvent.srcElement.files[0];
            setSelectedFile(file.name);
            console.log(file);
            var reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function () {
                var data = reader.result;
                var bytes = new Uint8Array(data);
                props.onFileOpen({
                    filename: file.name,
                    binary: bytes
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
            <Navbar id="top-bar" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
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
