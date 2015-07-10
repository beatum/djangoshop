# Djangoshop (Mezzanine CMS + Cartridge + Beatum)

Версия проекта 1.0.0

Проект предназначен для развёртывания интернет-витрин с каталогом товаров.

Билинг не предусмотрен, но в будущем возможно будет добавлен.

Перед установкой обязательно изучите и установите все зависимости из фаила requirements.txt.

Перед выполнением команд syncdb и migrate закоментируйте EXTRA_MODEL_FIELDS в settings/

После выполнения команд syncdb и migrate проверьте в том, что все миграции создались, затем раскоментируйте EXTRA_MODEL_FIELDS и выполните следующие комнады:

1. ./manage.py schemamigration shop --auto --stdout >> myapp/migrations/0001_shop_customization.py или /manage.py schemamigration shop --auto
2. ./manage.py migrate myapp или /manage.py migrate shop
3. ./manage.py migrate --list для того, чтобы убедиться что все миграции прошли успешно

Для установки статических зависимостей выполните команду ./manage.py bower install

Затем выполните ./manage.py collectstatic

Более детальное описание процесса установки будет позже.

## Краткое описание

1. При добавлении товара добавлено новое поле: Выбор страны производителя
2. Предусмотрена возможность выбора размера одежды для каждого товара

## Что необходимо сделать в будущем?

1. Переместить дополнительные свойства товара из EXTRA_MODEL_FIELDS в отдельную модель
2. Проверить работу django-compressor
3. На старнице товара вывести bredcrumb вида:

home > category_slug > child_category_slug > product_title

## Проблемы
1. При генерации счетов в формате PDF ломается кодировка!
2. На странице товара ломается bredcrumb

## Основная документация
1. http://mezzanine.jupo.org/docs/ - Django CMS Mezzanine
2. http://cartridge.jupo.org/ - Ecommerce for Mezzanine.

