function filterByTerm(inputArr, searchTerm){
    return inputArr.filter((arrayElement)=>{
        return arrayElement.url.match(searchTerm)
    })
}

module.exports = filterByTerm