import ListingsService from '#root/adapters/ListingsService'

const listingsResolver = async () => await ListingsService.fetchAllListings()

export default listingsResolver
