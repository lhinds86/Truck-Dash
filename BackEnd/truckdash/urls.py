from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('api/drivers/', views.DriverList.as_view(), name='driver_list'),
    path('api/drivers/<int:pk>/', views.DriverDetail.as_view(), name='driver_detail'),
]