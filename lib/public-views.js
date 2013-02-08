var path = require('path'),
    fs = require('fs');

var options = {
    views: path.join(__dirname, '/../../../public/')
};

function view(relativeViewPath) {
    if (!relativeViewPath.match(/\.html$/)) {
        relativeViewPath += '.html';
    }
    return path.join(options.views, relativeViewPath);
}

function render(relativeViewPath, renderer) {
    fs.readFile(view(relativeViewPath), 'utf-8', function(error, data) {
        if (error) throw error;
        renderer.call(data);
    });
}

module.exports = {
    view: view,
    render: render
};
