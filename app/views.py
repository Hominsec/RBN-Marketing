"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/
This file defines routes for the personal website.
"""
from flask import render_template
from . import app


@app.route('/')
def home():
    """Render website's home page."""
    return render_template('home.html')


@app.route('/about')
def about():
    """Render website's About page."""
    return render_template('about.html', name="About Page")


@app.route('/dashboard')
def dashboard():
    """Render website's dashboard page."""
    return render_template('dashboard.html', name="Dashboard")


@app.after_request
def add_header(response):
    """Add headers to disable caching and ensure modern rendering engines."""
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run()
