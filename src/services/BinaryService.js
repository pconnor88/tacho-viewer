export const BinaryService = {

    bytesToHexString(byteArray) {
        var str = '';
        for (var i = 0; i < byteArray.length; i++) {
            str += ('0' + (byteArray[i] & 0xFF).toString(16)).slice(-2);
        }
        return str.toUpperCase();
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

    bytesToString(byteArray) {
        var str = '';
        for (var i = 0; i < byteArray.length; i++) {
            str += String.fromCharCode(byteArray[i]);
        }
        return str.trim();
    },

    bytesToBcd(byteArray) {
        var s1 = null;
        var s2 = null;
        var str = '';

        for (var i = 0; i < byteArray.length; i++) {

            s1 = ((byteArray[i] & 0xf0) / 16);
            s2 = (byteArray[i] & 0xf);
            if (s1 == "0" && s2.length == 2)
            {
                str += s2.toString();
            }
            else
            {
                str += (s1.toString() + s2.toString());
            }

        }

        return str;
    },

    bytesToDateTime(byteArray) {
        var seconds = BinaryService.bytesToInt(byteArray);

        if(seconds <= 0) {
            return "";
        }

        var date = new Date(seconds * 1000);

        var day = "0" + date.getUTCDate();
        var month = "0" + (date.getUTCMonth()+1);
        var year = date.getUTCFullYear();
        var hours = "0" + date.getUTCHours();
        var minutes = "0" + date.getUTCMinutes();
        var seconds = "0" + date.getUTCSeconds();

        // Will display time in 10:30:23 format
        return `${day.substr(-2)}/${month.substr(-2)}/${year} ${hours.substr(-2)}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
    },

    bytesToDate(byteArray) {
        var year = BinaryService.getRange(byteArray, 0, 2);
        var month = BinaryService.getRange(byteArray, 2, 1);
        var day = BinaryService.getRange(byteArray, 3, 1);
        return `${BinaryService.bytesToBcd(year)}-${BinaryService.bytesToBcd(month)}-${BinaryService.bytesToBcd(day)}`;
    },

    bytesToName(byteArray) {
        return BinaryService.bytesToString(BinaryService.getRange(byteArray, 1, byteArray.length - 1));
    },

    bytesToNation(byteArray) {
        var nation = BinaryService.bytesToInt(byteArray);
        return countries[nation];
    },
     
    getRange(byteArray, start, length) {
        return byteArray.slice(start, start+length);
    },

    transformObjectToValues(binary, sectionDefinition) {

        var values = [];
        var pointer = 0;

        console.log("BINARY", binary);
        parseSection(binary, values, pointer, sectionDefinition);

        return values;
    }
}

function parseSection(binary, values, pointer, section) {
    for(var i = 0; i<section.length; i++) {

        var entity = section[i];

        //If array recurse through child
        if(Array.isArray(entity.type)) {
            pointer = parseSection(binary, values, pointer, entity.type)
        } 
        else 
        {
            var entityLength = entity.length;
            var entityValue = "";
            var entityBytes = BinaryService.getRange(binary, pointer, entityLength);

            console.log(entity.title, entityBytes);

            switch(entity.type) {
                case "octet":
                    entityValue = BinaryService.bytesToHexString(entityBytes);
                    break;
                case "int":
                    entityValue = BinaryService.bytesToInt(entityBytes);
                    break;
                case "string":
                    entityValue = BinaryService.bytesToString(entityBytes);
                    break;
                case "bcd":
                    entityValue = BinaryService.bytesToBcd(entityBytes);
                    break;
                case "datetime":
                    entityValue = BinaryService.bytesToDateTime(entityBytes);
                    break;
                case "date":
                    entityValue = BinaryService.bytesToDate(entityBytes);
                    break;
                case "name":
                    entityValue = BinaryService.bytesToName(entityBytes);
                    break;
                case "nation":
                    entityValue = BinaryService.bytesToNation(entityBytes);
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

    return pointer;
}

const countries = [
    "No information available",
			"Austria","Albania","Andorra","Armenia","Azerbaijan","Belgium","Bulgaria","Bosnia and Herzegovina",
			"Belarus","Switzerland","Cyprus","Czech Republic","Germany","Denmark","Spain","Estonia","France",
			"Finland","Liechtenstein","Faeroe Islands","United Kingdom","Georgia","Greece","Hungary","Croatia",
			"Italy","Ireland","Iceland","Kazakhstan","Luxembourg","Lithuania","Latvia","Malta","Monaco",
			"Republic of Moldova","Macedonia","Norway","Netherlands","Portugal","Poland","Romania","San Marino",
			"Russian Federation","Sweden","Slovakia","Slovenia","Turkmenistan","Turkey","Ukraine","Vatican City",
			"Yugoslavia"
]
