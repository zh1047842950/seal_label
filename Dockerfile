#FROM zsf10838438/node_env:v3 as build
#COPY /client /workspace/seal_label
#WORKDIR /workspace/seal_label
#RUN source /etc/profile \
#&& npm cache clean --force \
#&& npm list -g --depth 0 \
#&& npm install \
#&& mv ./modefine_node_modules ./node_modules \
#&& npm run build

FROM zsf10838438/node_env:v3
#COPY --from=build /workspace/seal_label/dist/build/h5 /server/static/seal_label
COPY /client/dist/build/h5 /server/static/seal_label
COPY /server /workspace/seal_label
WORKDIR /workspace/seal_label
RUN source /etc/profile \
&& npm cache clean --force \
&& npm install \
#ENTRYPOINT ["pm2","start"]
#CMD ["npm -- start"]
