# ls.aw.2016.9

Домашне задание 2

Продвинутый курс по веб-разработке

Груповая разработка

>Участники проекта

* Максим Матюхин (тимлид)
* Иван Корепанов
* Елизавета Овинова
* Михаил Пинчук


---
##Инструкция по установке проекта

>Копирование проекта

1. git clone https://github.com/settler-mar/photo_album photo_album
2. cd photo_album
3. npm i

>для работы sass-lint

1. Установите Ruby
2. Выполните команду

```sh
gem update --system && gem install scss_lint
````

Если команда не выполнится, то для Windows воспользоваться http://rubyinstaller.org/ и через него поставить scss_lint

---------

##Сборка проекта

```sh
gulp
```

После запуска данной команды запускается сервер для тестирования фронтенда. Адрес по которому он доступен будет выведен в косоли.

##Инструкция запуска сервера

Для сборки сервера выполнить команду

```sh
gulp dist
````

Для работы необходимо установить сервер MongoDB

Дале сервер запускается командой

```sh
node express/index
````

##Создание превью на сервере

Для создания миниатюр необходимо установить imagemagick

Ubuntu

```sh
apt-get install imagemagick
````

Mac OS X

```sh
brew install imagemagick
````

Fedora/CentOS

```sh
yum install imagemagick
````