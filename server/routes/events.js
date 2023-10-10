import express from 'express'
// import controllers for events and locations
import eventsController from '../controllers/events.js'
import locationsController from '../controllers/locations.js'


const router = express.Router()

// define routes to get events and locations
router.get('/', locationsController.getLocations);

router.get('/events', eventsController.getEvents);

router.get('/:id', eventsController.getEventsByLocation);

router.get('/event/:id', eventsController.getEventsById);

router.get('/location/:id', locationsController.getLocationById);




export default router