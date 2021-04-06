#!/bin/sh

# Create Docker Image for local test before Dokku upload 

export SECRET=FormSecret
export RABBITQUEUE=amqps://vomwrnfu:eYuExeet-LPxJCoDuVOGHIlu5u7unoqj@chinook.rmq.cloudamqp.com/vomwrnfu
export PORT=5050
export CORS_ORIGIN=*

docker build --tag="build-notifications--api" .