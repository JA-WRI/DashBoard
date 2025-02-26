from flask import Flask, send_file
import os

app = Flask(__name__)

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