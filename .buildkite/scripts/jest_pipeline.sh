#!/bin/bash

set -eu

echo "steps:"

find src packages x-pack -name jest.config.js | while read file; do
cat << EOF
  - label: ":jest:"
    command: ".ci/buildkite/jobs/jest.sh $file"
    agents:
      queue: jest
    artifact_paths: target/junit/**/*.xml
    timeout_in_minutes: 60
EOF
done