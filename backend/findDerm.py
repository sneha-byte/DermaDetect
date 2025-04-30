from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from pprint import pprint

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Proxy route to forward requests to the external API
@app.route('/api/practitioner', methods=['GET'])
def proxy_practitioner():
    # Get the query parameters from the frontend
    query_params = request.args

    # External API URL
    external_api_url = "https://providerdirectory-api.capbluecross.com/r4/Practitioner"

    headers = {
        'Accept': 'application/fhir+json'
    }

    try:
        response = requests.get(external_api_url, params=query_params, headers=headers)
        data = response.json()
        pprint(data)
        return data

    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)