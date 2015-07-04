# -*- coding: utf-8 -*-

from django.db import models
from django.utils.translation import ugettext_lazy as _

# Create your models here.
# from cartridge.shop.models import Product
# from django_countries.fields import CountryField


# class ParamProduct(Product):
#     """
#     Модель для хранения дополнительных параметров товара, 
#     потомок модели cartridge.shop.models.Product
#     """

#     country = CountryField(blank_label=_(u"Страна"))


#     class Meta:
#         verbose_name = _(u"Параметры товара")
#         verbose_name_plural = _(u"Параметры товаров")

#     def __str__(self):
#         pass

#     def __unicode__(self):
#         pass