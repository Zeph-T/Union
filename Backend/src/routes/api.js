import * as notifApi from '../api/controllers/notifications';
import * as eventApi from '../api/controllers/notifications';
import isAdmin from '../api/middlewares/isAdmin'

module.exports = (router)=>{
    router.post('/addNotifcation',isAdmin,notifApi.AddNotification);
    router.get('/getMyNotifications',notifApi.getMyNotifications);
    router.get('/getEvents',eventApi.getAllEvents);
    router.get('/getEventbyClub',eventApi.getEventByClub);
    router.post('/addEvent',isAdmin,eventApi.AddEvent);
}