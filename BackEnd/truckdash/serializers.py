from rest_framework import serializers
from .models import Location, Truck, Driver, Route, Trip, MaintenanceRecord, FuelLog, User

class LocationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Location
    fields = ['id', 'address', 'city', 'state', 'zip_code']

class TruckSerializer(serializers.ModelSerializer):
  current_location = LocationSerializer()

  class Meta:
    model = Truck
    fields = ['id', 'license_plate', 'make', 'model', 'year', 'status', 'current_location']

class DriverSerializer(serializers.HyperlinkedModelSerializer):
  class Meta:
    model = Driver
    fields = ['id', 'first_name', 'last_name', 'lic', 'state', 'equipment', 'total_miles']

class RouteSerializer(serializers.ModelSerializer):
  origin_location = LocationSerializer()
  destination_location = LocationSerializer()

  class Meta:
    model = Route
    fields = ['id', 'origin_location', 'destination_location', 'distance', 'estimated_time']

class TripSerializer(serializers.ModelSerializer):
  truck = TruckSerializer()
  driver = DriverSerializer()
  route = RouteSerializer()

  class Meta:
    model = Trip
    fields = ['id', 'truck', 'driver', 'route', 'start_time', 'end_time', 'status']

class MaintenanceRecordSerializer(serializers.ModelSerializer):
  truck = TruckSerializer()

  class Meta:
    model = MaintenanceRecord
    fields = ['id', 'truck', 'date', 'description', 'cost']

class FuelLogSerializer(serializers.ModelSerializer):
  truck = TruckSerializer()
  location = LocationSerializer()

  class Meta:
    model = FuelLog
    fields = ['id', 'truck', 'date', 'amount', 'cost', 'location']

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'role']
