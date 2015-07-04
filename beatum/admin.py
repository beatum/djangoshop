# -*- coding: utf-8 -*-

from copy import deepcopy
from django.contrib import admin
from cartridge.shop.admin import ProductAdmin
from cartridge.shop.models import Product
from django.utils.translation import ugettext_lazy as _

product_fieldsets = deepcopy(ProductAdmin.fieldsets) 
product_fieldsets[0][1]["fields"].insert(2, "set_country") #  Страна
product_fieldsets[0][1]["fields"].insert(3, "material") # Материал
product_fieldsets[0][1]["fields"].insert(4, "size_xxs")
product_fieldsets[0][1]["fields"].insert(4, "size_xs")
product_fieldsets[0][1]["fields"].insert(4, "size_s")
product_fieldsets[0][1]["fields"].insert(4, "size_l")
product_fieldsets = list(product_fieldsets)


class MyProductAdmin(ProductAdmin):
    """
    Специальная модель для включения дополнительных полей
    в модель cartridge.shop.models.Product

    Добавление полей осуществляется в settings смотри
    параметр EXTRA_MODEL_FIELDS
    """
    fieldsets = product_fieldsets

admin.site.unregister(Product)
admin.site.register(Product, MyProductAdmin)
