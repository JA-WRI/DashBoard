from flask import Flask, jsonify

app = Flask(__name__)

# Example API route
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from the Python backend!"})

# Serve the frontend (if needed)
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    # You can serve your frontend files (e.g., HTML, JS, CSS) here
    return "Frontend will be served here."

if __name__ == '__main__':
    app.run(debug=True, port=3000)