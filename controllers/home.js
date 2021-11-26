/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    layout: 'layout_home',
    title: 'Home'
  });
};
