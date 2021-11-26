const validator = require('validator');
const Activity = require('../models/Activity');

/**
 * GET /activity
 * Activity page.
 */

exports.getActivity = (req, res) => {
    if(!validator.isNumeric(req.params.token))
        return res.redirect('/');

    Activity
        .findOne({id: req.params.token})
        .exec((err, activity) => {
            if(!activity) {
                console.log("no records found: " + err)
                req.flash('errors', {msg: '活动未找到'});
                return res.redirect('/');
            }
            console.log(activity);
            res.render('activity', {activity: activity});
        }
    );
};
  