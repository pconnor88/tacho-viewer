import React, { useEffect, useState } from 'react';
import { ContentsTabs } from '../contents-tabs';
import { ContentsValues } from '../contents-values';
import { BinaryService, CardContentsData } from '../../services';

export function File(props) {

    const [cardContents, setCardContents] = useState([]);
    const [selectedTabContent, setSelectedTabContent] = useState();

    useEffect(function() {
        
        var fileContents = props.file.binary;
        var pointer = 0;
        var sections = [];

        if (fileContents.length > 1 && fileContents[0] == 0x76 && fileContents[1] == 0x06)
        {
            pointer = 2;
        }

        //Read the card contents

        while (pointer < fileContents.length)
        {
            var section = {};

            section.fileId = BinaryService.bytesToHexString(BinaryService.getRange(fileContents, pointer, 2));
            section.fileType = BinaryService.bytesToInt(BinaryService.getRange(fileContents, pointer + 2, 1));
            section.length = BinaryService.bytesToInt(BinaryService.getRange(fileContents, pointer + 3, 2));
            section.contents = BinaryService.getRange(fileContents, pointer + 5, section.length);

            var matchingSection = CardContentsData.find(c => c.id === section.fileId && section.fileType === 0);

            if(matchingSection != null) {
                section = {
                    ...section,
                    ...matchingSection
                };
                sections.push(section);
            }

            pointer = pointer + 5 + section.length;
        }

        setCardContents(sections);
        console.log(sections);

    }, []);

    function onContentSelected(fileId) {
        var section = cardContents.find(function(s) {
            return s.fileId === fileId;
          });
      
          setSelectedTabContent(section);
    }

    return (
        <div className="file-contents">
            <div className="file-sections">
                <ContentsTabs contents={cardContents} selectedContent={selectedTabContent} onContentSelected={onContentSelected}></ContentsTabs>
            </div>
            <div className="file-section-content">
                <ContentsValues content={selectedTabContent}></ContentsValues>
            </div>
        </div>
    );
}

