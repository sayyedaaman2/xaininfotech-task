function convertCamelCase(str) {
    let strArr = str.split(' ');
    strArr[0] = strArr[0].toLowerCase();

    for (let i = 1; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
    }

    return strArr.join('');
}

function camelCaseToCapitalized(str) {
    return str.replace(/([A-Z])/g, ' $1')
              .replace(/^./, function(str){ return str.toUpperCase(); });
}

const obj = {
    convertCamelCase,
    camelCaseToCapitalized
}


export default obj;