from django.contrib import admin
from django.urls import path, include

from .views import main, about, contact, product

urlpatterns = [
    path('', main, name='main'),
    path('about', about, name='about'),
    path('contact', contact, name='contact'),
    path('product', product, name='product'),
]
