import Notification from '../models/Notification';

export function getMyNotifications(req, res) {
    try {
        Notifications.find({ '$or': [{ Batches: { $in: req.body.batch } }, { AllMembers: true }] }).sort({ _id: -1 }).limit(5).then(oNotif => {
            res.status(200);
            return res.send(oNotif);
        }).catch(err => {
            res.status(400);
            return res.send({ 'message': 'Error Retrieving your Notifications!' });
        })
    } catch (err) {
        res.status(400);
        return res.status({ 'message': 'Internal Server Error' });
    }

}



export function AddNotification(req, res) {
    try {
        let newNotif = new Notification;
        newNotif.PostedBy = req.body.PostedBy;
        newNotif.Title = req.body.title;
        newNotif.Body = req.body.body;
        newNotif.AllMembers = req.body.AllMembers;
        newNotif.Batches = req.body.Batches;

        newNotif.save((err, oNotif) => {
            if (err) {
                res.status(401);
                return res.send({ 'message': 'Error Adding the Notification' });
            } else {
                res.status(200);
                return res.status({ 'message': 'Posted Succesfully' });
            }
        })
    } catch (err) {
        res.status(400);
        return res.send({ 'message': 'Error Occured!Please Try Again' });
    }
}