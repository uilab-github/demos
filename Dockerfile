# Make Docker Image Command
# docker build --tag {id}/uilab_demo:1.0 .
# After make repository in docker hub
# docker push {id}/uilab_demo:1.0
# In the server that you want to run demo service,
# docker pull {id}/uilab_demo:1.0
# docker run -d -p 80:80 {id}/uilab_demo:1.0

FROM       node:12
MAINTAINER quark325@gmail.com
RUN        apt-get -y update

RUN git clone https://github.com/quark325/uilab-visualization-demo.git
WORKDIR /uilab-visualization-demo
RUN npm install --only=production
RUN npm install pm2 -g
RUN npm audit fix

RUN npm run build

EXPOSE 22 80 443 3000
# RUN pm2 --name UilabDemo start npm -- start
CMD ["pm2-runtime", "--name", "UilabDemo", "start", "npm", "--", "start"]