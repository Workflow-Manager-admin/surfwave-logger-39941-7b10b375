#!/bin/bash
cd /home/kavia/workspace/code-generation/surfwave-logger-39941-7b10b375/surf_sync_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

