export const getProductsWithCategories = (categories = [], products = []) => {
    const result = []
    categories.forEach(item => {
        result.push({
            ...item,
            products: products.filter(product => product.category === item.id)
        })
    })
    return result
}