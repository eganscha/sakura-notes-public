# Ubuntu Noble LTS
FROM ubuntu:24.04
ARG PHP_VERSION="8.3"
# (2.2 is LTS for Composer)
ARG COMPOSER_VERSION_CHANNEL="2.2"

WORKDIR /app

COPY . /app

# Install "Laravel" as described by the official documentation:
# https://laravel.com/docs/12.x/installation
# Install php
RUN apt-get -y update \
    && apt-get install -y php${PHP_VERSION}
# Install the php-xml metapackage (necessary for the "php artisan serve" command to function properly later)
RUN apt-get install -y php${PHP_VERSION}-xml
# Install Composer as described in
# https://getcomposer.org/download/
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'.PHP_EOL; } else { echo 'Installer corrupt'.PHP_EOL; unlink('composer-setup.php'); exit(1); }" \
    && php composer-setup.php --${COMPOSER_VERSION_CHANNEL} \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer
# Install git so Composer can work successfully
RUN apt-get install -y git
# Install Laravel with Composer
RUN composer global require laravel/installer

# Move and execute the docker-entrypoint script
# and subsequently launch Laravel as a result of it
RUN mv ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "docker-entrypoint.sh" ]

EXPOSE 8000
CMD [ "php", "artisan", "serve", "--host=0.0.0.0", "--port=8000" ]