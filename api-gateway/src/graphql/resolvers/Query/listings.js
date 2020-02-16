// import ListingsService from '#root/adapters/ListingsService'

// const listingsResolver = async () => await ListingsService.fetchAllListings()

const listingsResolver = async () => {
  return [
    {
      id: 1,
      title: 'Test',
      description: 'Description Test'
    }
  ]
}

export default listingsResolver
