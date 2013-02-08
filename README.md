Public Views
============

Tiny node module helping one access & output views residing in the root/public folder, where Angular.js likes them. Asynchronous.

```JavaScript
app.router.get('/', function() {
    views.render('index', this.res.html, this.res);
});
```

Where `index` is:

> APP_ROOT/public/index.html
