var path = require('path'),
    fs = require('fs');

var options = {
    views: path.normalize(__dirname, '/../../')
};

function view(relativeViewPath) {
    if (!relativeViewPath.match(/\.html$/)) {
        relativeViewPath += '.html';
    }
    return path.normalize(options.views, relativeViewPath);
}

function render(relativeViewPath, renderer) {
    fs.readFile(view(relativeViewPath), 'utf-8', function(error, data) {
        if (error) throw error;
        renderer.call(data);
    });
}

exports = function(overrides) {
    options.views = overrides.views || options.views;

    return {
        view: view,
        render: render
    };
};
