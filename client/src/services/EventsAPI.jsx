const getAllEvents= async () => {
    const res = await fetch(`http://localhost:3000/api/events`)
    const data = await res.json()
    return data
}

const getEventsById = async (id) => {
    const res = await fetch(`http://localhost:3000/api/event/${id}`)
    const data = await res.json()
    console.log(data)
    return data
}

export default { getAllEvents,getEventsById }