
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e", ' ');
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text.charAt(4);
}
const showChar9 = (text) => {
    return text.slice(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text == 'string';
}

const getExtension = (text) => {
    let part = text.split('.');
    return part[part.length - 1];
}
const countSpaces = (text) => {
    let spaces = text.match(/ /g);
    if (spaces) {
        return spaces.length;
    } else {
        return 0;
    }
}
const InverseString = (text) => {
    return text.split('').reverse().join('');
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map((num) => Math.abs(num));
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * Math.pow(radius, 2));
}
const hypothenuse = (ab, ac) => {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}