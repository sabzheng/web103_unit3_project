const getAllLocations = async () => {
    const res = await fetch(`http://localhost:3000/api`)
    const data = await res.json()
    return data
}

const getEventsByLocation = async (locationId) => {
    const res = await fetch(`http://localhost:3000/api/${locationId}`)
    const data = await res.json()
    return data
}

const getLocationsById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/location/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default { getAllLocations,getEventsByLocation,getLocationsById }