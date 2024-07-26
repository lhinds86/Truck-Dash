from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Location, Truck, Driver, Route, Trip, FuelLog, User
admin.site.register(Location)
admin.site.register(Truck)
admin.site.register(Driver)
admin.site.register(Route)
admin.site.register(Trip)
admin.site.register(FuelLog)
admin.site.register(User)
