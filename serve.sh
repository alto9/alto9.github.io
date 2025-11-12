#!/bin/bash
# Simple script to serve the site locally

PORT=${1:-8080}

echo "🚀 Starting local server on http://localhost:$PORT"
echo "Press Ctrl+C to stop"

# Try Python 3 first, then Python 2, then suggest alternatives
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "Python not found. Install Python or use: npm run serve"
    exit 1
fi

