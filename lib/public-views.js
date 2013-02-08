var path = require('path'),
    fs = require('fs');

var options = {
    views: path.join(__dirname, '/../../../public/')
};

/**
 * Resolve the view's path to an absolute and return it.
 *
 * @param  {String} relativeViewPath
 * @return {String}
 */
function view(relativeViewPath) {
    if (!relativeViewPath.match(/\.html$/)) {
        relativeViewPath += '.html';
    }
    return path.join(options.views, relativeViewPath);
}

/**
 * Render the given view asynchronously.
 *
 * @param  {String} relativeViewPath Relative path to the view, e.g. 'admin/main'.
 * @param  {Function} renderer The function to call with the view's content. For flatiron can be: app.res.*
 * @param  {Object|null} context Optional context to be used when calling renderer.
 */
function render(relativeViewPath, renderer, context) {
    fs.readFile(view(relativeViewPath), 'utf-8', function(error, data) {
        if (error) throw error;
        if (typeof context !== 'undefined') {
            return renderer.call(context, data);
        }
        renderer(data);
    });
}

module.exports = {
    view: view,
    render: render
};
