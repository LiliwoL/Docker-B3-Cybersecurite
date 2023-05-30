FROM php:8.2-apache

# Install System Dependencies
RUN apt-get update -qq \
	&& apt-get install -qy \
	nodejs \
	libfreetype6-dev \
	libicu-dev \
    libssl-dev \
	libjpeg62-turbo-dev \
	libmcrypt-dev \
	libedit-dev \
	libedit2 \
	libxslt1-dev \
	libzip-dev \
	apt-utils \
	gnupg \
	mariadb-client \
	zlib1g-dev \
	libpng-dev \
	libjpeg-dev \
	git \
	vim \
	wget \
	curl \
	lynx \
	psmisc \
	unzip \
    zip \
	tar \
	cron \
	bash-completion \
	zsh \
	&& apt-get clean

# PHP extensions
RUN docker-php-ext-configure \
  	gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/; \
  	docker-php-ext-install \
  	opcache \
  	bcmath \
  	gd \
  	intl \
  	mysqli \
  	pdo_mysql \
  	soap \
  	xsl \
  	zip \
  	sockets

# Install Composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Install Oh MyZSH
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# Configuring system
# --------------------------
# Configure Apache
COPY Docker/conf/vhost.conf /etc/apache2/sites-available/000-default.conf
COPY Docker/conf/apache.conf /etc/apache2/conf-available/z-app.conf
#COPY index.php /app/index.php
RUN a2enconf z-app

# Configure PHP
COPY Docker/conf/php.ini /usr/local/etc/php/conf.d/app.ini

# Rights
COPY /Docker/users/* /var/www/
RUN chmod +x /usr/local/bin/*

# Permissions / Shell par défaut
RUN chmod 777 -Rf /var/www /var/www/.* \
	&& chown -Rf www-data:www-data /var/www /var/www/.* \
	&& usermod -u 1000 www-data \
	&& chsh -s /bin/zsh www-data

# Modules Apache
RUN a2enmod rewrite remoteip headers && \
    a2enconf z-app

VOLUME /var/www/html
WORKDIR /var/www/html

# Installation du PhpUnit
RUN composer require phpunit/phpunit --dev

EXPOSE 80


