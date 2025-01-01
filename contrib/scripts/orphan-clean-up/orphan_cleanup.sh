#!/bin/bash

set -euo pipefail

# Cleanes up orphaned entities for the provided Devtools URL, defaults to the local backend
DEVTOOLS_URL=${1:-'http://localhost:7007'}
echo $DEVTOOLS_URL

ORPHAN_API_URL="$DEVTOOLS_URL/api/catalog/entities?filter=metadata.annotations.devtools.khulnasoft.com/orphan=true"
ORPHAN_DELETE_API_URL="$DEVTOOLS_URL/api/catalog/entities/by-uid"

ORPHANS=$(curl -s $ORPHAN_API_URL)

echo ""
echo "Found $(echo $ORPHANS | jq length ) orphaned entities"
echo ""

jq -c '.[]' <<< $ORPHANS | while read ORPHAN; do
    echo $ORPHAN | jq "."
    echo "Deleting orphan entity: $(echo $ORPHAN | jq -r .metadata.name) of kind: $(echo $ORPHAN | jq -r .kind)"
    curl -X DELETE "$ORPHAN_DELETE_API_URL/$(echo $ORPHAN | jq -r .metadata.uid)"
done
