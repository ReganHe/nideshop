FROM keymetrics/pm2:8-alpine
LABEL author="heke"
ADD . /home-api-node
WORKDIR /home-api-node
RUN yarn
CMD ["sh","start.sh"]