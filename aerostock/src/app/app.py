from flask import Flask, send_file, jsonify, request  # Import request to handle incoming data
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Sample events data
events = [
    {
        "id": 1,
        "title": "Something",
        "description": "Do something with this",
        "time": "10:00 AM"
    },
    {
        "id": 2,
        "title": "Something else",
        "description": "Do something else with this",
        "time": "12:00 PM"
    },
    {
        "id": 3,
        "title": "Another thing",
        "description": "Do another thing with this",
        "time": "2:00 PM"
    }
]
@app.route('/')
def home():
    return "Welcome to the Event Calendar Backend!"

# Endpoint to get events
@app.route('/api/events', methods=['GET'])
def get_events():
    return jsonify(events)  # Return the events data as a JSON response

# NEW: Endpoint to create a new event
@app.route('/api/events', methods=['POST'])
def create_event():
    new_event = request.get_json()  # Get the new event data from the request body
    new_event['id'] = len(events) + 1  # Assign a new ID to the event
    events.append(new_event)  # Add the new event to the list
    return jsonify(new_event), 201  # Return the new event with a 201 status code

# Serve files dynamically
@app.route('/download/<filename>')
def download_file(filename):
    # Path to the file
    file_path = os.path.join('dynamic_files', filename)
    
    # Check if the file exists
    if not os.path.exists(file_path):
        return "File not found", 404
    
    # Send the file to the client
    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True, port=3000)