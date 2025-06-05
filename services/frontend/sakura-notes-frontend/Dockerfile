# Ubuntu Noble LTS
FROM ubuntu:24.04

WORKDIR /app

COPY . /app

ENV N_PREFIX=/opt/n
ENV PATH=$N_PREFIX/bin:$PATH

# Install "node" via "n" as described by the official documentation:
# https://nodejs.org/en/download
RUN apt-get -y update \
    && apt-get install -y git \
    && apt-get install -y make \
    && apt-get install -y curl \
    && apt-get install -y gnupg2 \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get -y update && apt install -y yarn \
    && apt-get install -y nodejs


# Install Project Dependencies
RUN yarn install

# # Move and execute the docker-entrypoint script
RUN mv ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "docker-entrypoint.sh" ]

# # Expose port and run the frontend-server
EXPOSE 5173
CMD [ "yarn", "run", "dev" ]