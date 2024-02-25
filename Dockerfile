FROM node:18-alpine:3.12
COPY docs-dist/index.js /docs-dist
CMD [ "node", "/index.js" ]
