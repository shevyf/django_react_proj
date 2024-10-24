"""django_react_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from programme import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/items/$', views.items_list),
    re_path(r'^api/items/([0-9]+)$', views.items_detail),
    re_path(r'^api/attendees/$', views.attendees_list),
    re_path(r'^api/attendees/([0-9]+)$', views.attendees_detail),
    re_path(r'^api/locations/$', views.locations_list),
    re_path(r'^api/locations/([0-9]+)$', views.locations_detail),
    re_path(r'^iframe\.html$', views.iframe),
    re_path(r'^headers$', views.return_request_headers),
    re_path(r'^mynrindex\.html$', views.mynrindex),
    re_path(r'^redirecttest$', views.redirect_test),
    re_path(r"^(?:.*)?$", views.index),
]
