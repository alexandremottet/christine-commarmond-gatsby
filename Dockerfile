FROM node:9.11.1-alpine

WORKDIR /opt

ADD public/ /opt

ADD boot.sh /opt
RUN chmod +x /opt/boot.sh

CMD [ "/opt/boot.sh" ]
EXPOSE 9000
