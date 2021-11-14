const  removeDuplicatesFromArray = array => {
    return array.filter( (element,index) => array.indexOf(element) === index);
}


export default removeDuplicatesFromArray
