#!/bin/sh
CURRENT_VERSION="v$(cat devtools.json | jq -r '.version')"
TARGET_VERSION=${1:-"$(curl -s https://api.github.com/repos/khulnasoft/devtools/releases/latest | jq -r '.tag_name')"}
CREATE_APP_CURRENT_VERSION=$(curl -s https://raw.githubusercontent.com/khulnasoft/devtools/$CURRENT_VERSION/packages/create-app/package.json | jq -r '.version')
CREATE_APP_TARGET_VERSION=$(curl -s https://raw.githubusercontent.com/khulnasoft/devtools/$TARGET_VERSION/packages/create-app/package.json | jq -r '.version')

if [ "$CURRENT_VERSION" == "$TARGET_VERSION" ]; then
    echo "Already up to date"
else
    echo "Attempting upgrade from Devtools $CURRENT_VERSION (create-app $CREATE_APP_CURRENT_VERSION) to $TARGET_VERSION ($CREATE_APP_TARGET_VERSION)"
    rm -rf .upgrade && mkdir .upgrade
    git fetch https://github.com/khulnasoft/upgrade-helper-diff.git '+refs/heads/*:refs/remotes/upgrade-helper/*'
    curl -s https://raw.githubusercontent.com/devtools/upgrade-helper-diff/master/diffs/$CREATE_APP_CURRENT_VERSION..$CREATE_APP_TARGET_VERSION.diff > .upgrade/upgrade.diff
    git apply -3 .upgrade/upgrade.diff
    git mergetool
fi
