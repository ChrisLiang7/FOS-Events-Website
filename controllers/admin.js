
const AdminBro = require('admin-bro');
const AdminBroExpressjs = require('admin-bro-expressjs');
AdminBro.registerAdapter(require('admin-bro-mongoose'));
const express = require('express');
const User = require('../models/User');
const Activity = require('../models/Activity');

const adminBro = new AdminBro({
    resources: [{
        resource:User
      }, {
        resource:Activity
      }],
    rootPath: '/admin',
    branding: {
      // logo: 'URL_TO_YOUR_LOGO',
      companyName: '资源管理界面',
      softwareBrothers: false   // if Software Brothers logos should be shown in the sidebar footer
    }
});

/* Authentication by user's role */
let router = express.Router()
router.use((req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    res.redirect('/');
  }
})

exports.router = AdminBroExpressjs.buildRouter(adminBro, router);
exports.adminBro = adminBro;