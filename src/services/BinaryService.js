export const BinaryService = {

    bytesToHexString(byteArray) {
        var str = '';
        for (var i = 0; i < byteArray.length; i++) {
            str += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2);
        }
        return str;
    },

    bytesToInt(byteArray) {
        switch (byteArray.length) {
            case 1:
                return parseInt(byteArray[0]);
            case 2:
                return (parseInt(byteArray[0]) << 8) + parseInt(byteArray[1]);
            case 3:
                return (parseInt(byteArray[0]) << 16) + (parseInt(byteArray[1]) << 8) + parseInt(byteArray[2]);
            case 4:
                return (parseInt(byteArray[0]) << 24) + (parseInt(byteArray[1]) << 16) + (parseInt(byteArray[2]) << 8) + parseInt(byteArray[3]);
            default:
                return 0;
        }
    },

    bytesToString(byteArray, start, length) {
        var str = '';
        for (var i = start; i < (start + length); i++) {
            str += String.fromCharCode(byteArray[i]);
        }
        return str.trim();
    },
     
    getRange(byteArray, start, length) {
        return byteArray.slice(start, start+length);
    },

    transformObjectToValues(sectionDefinition) {
        console.log(sectionDefinition);

        var values = [];
        var pointer = 0;

        return parseSection(values, pointer, sectionDefinition)
    }
}

function parseSection(values, pointer, section) {
    for(var i = 0; i<section.length; i++) {

        var entity = section[i];

        //If array recurse through child
        if(Array.isArray(entity.type)) {
            parseSection(values, pointer, entity.type)
        } 
        else 
        {
            var entityLength = entity.length;
            var entityValue = "";

            switch(entity.type) {
                case "octet":
                    entityValue = "octet";
                    break;
                case "int":
                    entityValue = 2;
                    break;
                case "string":
                    entityValue = "hello";
                    break;
                case "bcd":
                    entityValue = "bcd";
                    break;
                default:
                    break;
            }

            values.push({
                title: entity.title,
                value: entityValue
            });

            pointer += entityLength;
        }
        
    }

    return values;
}

