# FROM       ubuntu:18.04
# MAINTAINER quark325@gmail.com
# RUN        apt-get -y update


# RUN apt-get -y install git
# RUN 

FROM       node:12
MAINTAINER quark325@gmail.com
RUN        apt-get -y update

RUN git clone https://github.com/quark325/uilab-visualization-demo.git
WORKDIR /uilab-visualization-demo
RUN npm install
RUN npm audit fix

RUN npm run build
RUN npm run start

EXPOSE 22 80 443 3000
# CMD /bin/bash