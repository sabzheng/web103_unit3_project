import { pool } from '../config/database.js'
const getLocations = async (req, res) => {
    try {
        const locations = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(locations.rows)
        //res.status(200).json({message: "getting all locations"})
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}
const getLocationById = async (req, res) => {
    try {
        const id = req.params.id
        const locations = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
        res.status(200).json(locations.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

export default {getLocations, getLocationById}