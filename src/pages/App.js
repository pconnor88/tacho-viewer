import React, { Fragment, useState } from 'react';

import './App.css';
import {NonIdealState} from '@blueprintjs/core';
import { MenuBar } from '../components/menu-bar';
import { FileTabs } from '../components/file-tabs';
import { File } from '../components/file';
import { ShowHide } from '../components/show-hide';

function App() {

  const [files, setFiles] = useState([]);

  const [selectedFile, setSelectedFile] = useState();

  function onFileOpen(file) {

    //change the way this is set, it could lead to duplicates
    file.id = Date.now();

    setFiles([
      ...files,
      file
    ]);

    setSelectedFile(file)
  }

  function onCloseFile(file) {
    setFiles(files.filter(function (f) { return f.id != file.id; }));

    //Move below to useEffect
    if(selectedFile.id == file.id) {
      setSelectedFile(files[0]);
    }
  }

  function onChangeFile(fileId) {
    var file = files.find(function(f) {
      return f.id === fileId;
    });

    setSelectedFile(file);
  }


  return (
    <div className="app">

      <MenuBar onFileOpen={onFileOpen} />
      <ShowHide
        evaluator={files.length > 0}
        show={(
          <Fragment>
            <FileTabs files={files} selectedFile={selectedFile} onCloseFile={onCloseFile} onChangeFile={onChangeFile} />
            {files.map(function (f) {
              return (<ShowHide
                key={f.id}
                evaluator={selectedFile != null && selectedFile.id === f.id}
                show={(
                  <File />
                )}
              />)
            })}
          </Fragment>
        )}
        hide={(
          <NonIdealState
            icon="document-open"
            title="To get started open a file"
            description="You can do this using the menu in the top right hand corner, or you can press ⌘O on your keyboard."
          />
        )}
      />


    </div>
  );
}

export default App;
