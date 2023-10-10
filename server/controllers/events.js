import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const events = await pool.query('SELECT * FROM events ORDER BY id ASC')

        res.status(200).json(events.rows)
        //res.status(200).json({message: "getting all events"})
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getEventsByLocation = async (req, res) => {
    try {
        const locationevents = req.params.id
        //console.log(locationevents)
        const id = await pool.query('SELECT name FROM locations WHERE id = $1', [locationevents])
        const events = await pool.query(`SELECT * FROM events WHERE location = $1  ORDER BY id ASC`, [id.rows[0].name])
        res.status(200).json(events.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getEventsById = async (req, res) => {
    try {
        const id = req.params.id
        const events = await pool.query('SELECT * FROM events WHERE id = $1', [id])
        res.status(200).json(events.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export default {getEvents, getEventsByLocation, getEventsById}