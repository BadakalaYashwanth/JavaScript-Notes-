function debounce(fn, delay){
    let timerId

    return function(...args){
        clearTimeout(timerId)
    }
}
const search = (query) => {
    console.log("Searching the Query", query)
}

const searchWithDebounce = debounce(search, 2000)


searchWithDebounce('h')
searchWithDebounce('ha')
searchWithDebounce('har')
searchWithDebounce('hard')
searchWithDebounce('hard j')
searchWithDebounce('hard ja')
searchWithDebounce('hard jav')
searchWithDebounce('hard java')
searchWithDebounce('hard javas')
searchWithDebounce('hard javasc')
