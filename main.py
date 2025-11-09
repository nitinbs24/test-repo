import os
# This key is missing from the docker-compose file
api_key = os.getenv("MY_MISSING_API_KEY")
