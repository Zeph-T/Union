import * as notifApi from '../api/controllers/notifications';
import * as eventApi from '../api/controllers/events';
import * as clubApi from '../api/controllers/clubs';
import isAdmin from '../api/middlewares/isAdmin'

module.exports = (router)=>{
    router.post('/addNotifcation',isAdmin,notifApi.AddNotification);
    router.get('/getMyNotifications',notifApi.getMyNotifications);
    router.get('/getEvents',eventApi.getAllEvents);
    router.post('/addEvent',isAdmin,eventApi.AddEvent);
    router.get('/getClubData',clubApi.getClubData);
}