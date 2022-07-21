from flask import Flask, render_template, request, jsonify

app = Flask(__name__)



@app.route("/", methods=["GET"])
def homepage():
    """Show homepage."""
        
    return render_template("index.html")

@app.route('/api/lucky-num', methods=["POST"])
def process_json():
    print(request)
    data = request.json
    print(data)
    person = {"name": data['name'] or None, "email": data['email'] or None, "year": data['year'] or None, "color": data['color'] or None }
  
    return (jsonify(person), 201)
    