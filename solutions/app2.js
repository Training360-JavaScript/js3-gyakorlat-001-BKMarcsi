let HU = {};

let locale = 'hu-HU';

HU.date = (date = new Date()) => {
    return new Intl.DateTimeFormat(locale).format(date);
}

HU.curreny = (summa = 0) => {
    return new Intl.NumberFormat(locale,{style:'currency',currency:'HUF'}).format(summa);
}

HU.list = (array = []) => {
    return array.reduce((returnval,item,index) => {return (index < array.length-1?returnval+', '+item:returnval+' és '+item)});
}



export default HU
