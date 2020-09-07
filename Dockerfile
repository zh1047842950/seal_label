FROM zsf10838438/node_env:v3 as build
COPY /client /workspace/seal_label
WORKDIR /workspace/seal_label
RUN source /etc/profile \
&& npm install \
&& mv ./modefine_node_modules ./node_modules \
&& rm -rf ./modefine_node_modules \
&& npm run build

FROM zsf10838438/seal_label:v1
COPY --from=build /workspace/seal_label/dist/build/h5 /server/static/seal_label
COPY /server /workspace/seal_label
WORKDIR /workspace/seal_label
RUN mv /home/static ./static \
&& source /etc/profile \
&& npm install
