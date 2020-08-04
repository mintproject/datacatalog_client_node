#!/usr/bin/env bash

set -e
REPO_TAG=$1

FILE=https://data-catalog.mint.isi.edu/api_doc.json
OPENAPI_VERSION=v4.3.1
docker run -ti --rm -v ${PWD}:/local openapitools/openapi-generator-cli:${OPENAPI_VERSION} \
     generate  \
     -i $FILE \
     -g typescript-node \
     -o /local/ \
      -c /local/openapi-config.json
