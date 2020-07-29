
const compose = (...wrappers) => (item) => {
    return wrappers.reduceRight((prevItem, wrapper) => wrapper(prevItem), item)
}

export default compose;