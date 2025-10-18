"""
Flask Documentation:     http://flask.pocoo.org/docs/
Jinja2 Documentation:    http://jinja.pocoo.org/2/documentation/
Werkzeug Documentation:  http://werkzeug.pocoo.org/documentation/
This file defines your application routes.
"""
from flask import render_template, request, flash, send_from_directory, jsonify
from typing import Optional
from os import getcwd
from os.path import join
from .config import Config
from . import app



###
# Helpers
###

def get_number_from_json(key: str = "number") -> int:
    data = request.get_json()
    return int(data[key])


###
# Routing
###

@app.route('/mul', methods=["POST"])
def mul_numbers():
    """Return the product of two numbers"""
    if request.method == "POST":
        data = request.get_json()
        num1 = int(data["number1"])  # type: ignore[index]
        num2 = int(data["number2"])  # type: ignore[index]
        product = num1 * num2
        return f"The product of {num1} and {num2} is {product}"
    return render_template('404.html'), 404

@app.route('/sum', methods=["GET"])
@app.route('/sum/<int:firstnumber>/<int:secondnumber>', methods=["GET"])
def sum_numbers(firstnumber: Optional[int] = None, secondnumber: Optional[int] = None):
    """Return the sum from query params or path params"""
    if request.method == "GET":
        if firstnumber is not None and secondnumber is not None:
            summed = firstnumber + secondnumber
            return f"The sum of {firstnumber} and {secondnumber} is {summed}"
        num1 = request.args.get("number1")
        num2 = request.args.get("number2")
        if num1 is None or num2 is None:
            return render_template('404.html'), 404
        summed = int(num1) + int(num2)
        return f"The sum of {num1} and {num2} is {summed}"
    return render_template('404.html'), 404

@app.route('/file/<name>', methods=["GET"])
def file_stored(name):
    """Returns a file"""
    if request.method == "GET":
        # Process GET requests
        path = join( getcwd(),Config.SYSFILES)
        return send_from_directory( path, name)
    return render_template('404.html'), 404

@app.route('/text', methods=["GET","POST"])
def test():
    """Returns text"""
    if request.method == "GET":
        # Process GET requests
        return "Hello World!."
    if request.method == "POST":
        # Process POST requests
        return "Hello World!."
    return render_template('404.html'), 404

@app.route('/json', methods=["GET","POST"])
def json_object():
    """Returns Json object"""
    if request.method == "GET":
        # Process GET requests
        message = {"status":"GET request received"}
        return jsonify(message)
    if request.method == "POST":
        # Process POST requests
        message = {"status":"POST request received"}
        return jsonify(message)
    return render_template('404.html'), 404


@app.route('/')
def home():
    """Render website's home page."""
    return render_template('home.html')


# Add other routes below

@app.route('/about')
def about():
    """Render website's About page."""
    return render_template('about.html', name="About Page")

@app.route('/dashboard')
def dashboard():
    """Render website's dashboard page."""
    return render_template('dashboard.html', name="Dashboard")

@app.route('/data', methods=["GET"])
def data():
    """Return data from a configured data source (if available)"""
    if request.method == "GET":
        variable = request.args.get("variable")
        start_raw = request.args.get("start")
        end_raw = request.args.get("end")
        if variable is None or start_raw is None or end_raw is None:
            return render_template('404.html'), 404
        try:
            start = int(start_raw)
            end = int(end_raw)
        except ValueError:
            return render_template('404.html'), 404
        try:
            # Assume a global `mongo` client may be configured elsewhere
            data_points = mongo.plotStaticGraph(variable, start, end)  # type: ignore[name-defined]
            return jsonify(data_points)
        except NameError:
            return jsonify({"error": "Data source not configured"}), 501
    return render_template('404.html'), 404

@app.route('/temp', methods=["POST"])
def temperature_c_to_f():
    if request.method == "POST":
        celsius = get_number_from_json("number")
        fahrenheit = (celsius * 9 / 5) + 32
        return f"{celsius}℃ is {fahrenheit}℉"
    return render_template('404.html'), 404

@app.route('/alt', methods=["POST"])
def altitude_to_cm():
    if request.method == "POST":
        meters = get_number_from_json("number")
        centimeters = meters * 100
        return f"An altitude of {meters}m is also {centimeters}cm"
    return render_template('404.html'), 404

@app.route('/humid', methods=["POST"])
def humidity_to_kg_per_m3():
    if request.method == "POST":
        grams_per_m3 = get_number_from_json("number")
        kg_per_m3 = grams_per_m3 / 1000
        return f"The humidity of {grams_per_m3} g/m^3 is also {kg_per_m3} kg/m^3"
    return render_template('404.html'), 404








###
# The functions below should be applicable to all Flask apps.
###


# Flash errors from the form if validation fails
def flash_errors(form):
    for field, errors in form.errors.items():
        for error in errors:
            flash(u"Error in the %s field - %s" % (
                getattr(form, field).label.text,
                error
            ), 'danger')


@app.route('/<file_name>.txt')
def send_text_file(file_name):
    """Send your static text file."""
    file_dot_text = file_name + '.txt'
    return app.send_static_file(file_dot_text)


@app.after_request
def add_header(response):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also tell the browser not to cache the rendered page. If we wanted
    to we could change max-age to 600 seconds which would be 10 minutes.
    """
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run()
    #app.run(debug=True, host="0.0.0.0", port="8080")
