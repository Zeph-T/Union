import * as notifApi from '../api/controllers/notifications';
import * as eventApi from '../api/controllers/events';
import * as clubApi from '../api/controllers/clubs';
import isAdmin from '../api/middlewares/isAdmin'

module.exports = (router)=>{
    router.get('/', (req,res)=>{
        res.status(200);
        res.json({ status: 'Up and Running!' });
      });
    router.post('/addNotification',notifApi.AddNotification);
    router.get('/getMyNotifications/:batch',notifApi.getMyNotifications);
    router.get('/getEvents',eventApi.getAllEvents);
    router.get('/getEventsForCalender',eventApi.getAllEventsForCalender);
    router.post('/addEvent',eventApi.AddEvent);
    router.get('/getClubData',clubApi.getClubData);
}