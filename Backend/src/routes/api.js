import * as notifApi from '../api/controllers/notifications';
import isAdmin from '../api/middlewares/isAdmin'

module.exports = (router)=>{
    router.post('/addNotifcation',isAdmin,notifApi.AddNotification);
    router.get('/getMyNotifications',notifApi.getMyNotifications);
}