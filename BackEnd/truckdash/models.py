from django.db import models

# Create your models here.
class Location(models.Model):
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10)

    def __str__(self):
      return f"{self.address}, {self.city}, {self.state} {self.zip_code}"
    
class Truck(models.Model):
  license_plate = models.CharField(max_length=15, unique=True)
  make = models.CharField(max_length=50)
  model = models.CharField(max_length=50)
  year = models.IntegerField()
  status = models.CharField(max_length=20)
  current_location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True)

  def __str__(self):
    return self.license_plate
    

class Driver(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  license_number = models.CharField(max_length=20, unique=True)
  phone_number = models.CharField(max_length=15)
  email = models.EmailField()
  status = models.CharField(max_length=20)

  def __str__(self):
    return f"{self.first_name} {self.last_name}"
  
class Route(models.Model):
  origin_location = models.ForeignKey(Location, related_name='route_origin', on_delete=models.CASCADE)
  destination_location = models.ForeignKey(Location, related_name='route_destination', on_delete=models.CASCADE)
  distance = models.DecimalField(max_digits=10, decimal_places=2)
  estimated_time = models.DurationField()

  def __str__(self):
    return f"{self.origin_location} to {self.destination_location}"

class Trip(models.Model):
  truck = models.ForeignKey(Truck, on_delete=models.CASCADE)
  driver = models.ForeignKey(Driver, on_delete=models.CASCADE)
  route = models.ForeignKey(Route, on_delete=models.CASCADE)
  start_time = models.DateTimeField()
  end_time = models.DateTimeField(null=True, blank=True)
  status = models.CharField(max_length=20)

  def __str__(self):
    return f"Trip {self.id} - {self.truck} with {self.driver}"
  
class MaintenanceRecord(models.Model):
    truck = models.ForeignKey(Truck, on_delete=models.CASCADE)
    date = models.DateField()
    description = models.TextField()
    cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Maintenance {self.id} for {self.truck}"

class FuelLog(models.Model):
  truck = models.ForeignKey(Truck, on_delete=models.CASCADE)
  date = models.DateField()
  fuel_amount = models.DecimalField(max_digits=10, decimal_places=2)
  fuel_cost = models.DecimalField(max_digits=10, decimal_places=2)
  location = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True, blank=True)

  def __str__(self):
    return f"Fuel Log {self.id} for {self.truck}"
    
class User(models.Model):
  username = models.CharField(max_length=150, unique=True)
  password = models.CharField(max_length=128)
  role = models.CharField(max_length=20, choices=[('admin', 'Admin'), ('dispatcher', 'Dispatcher'), ('driver', 'Driver')])

  def __str__(self):
    return self.username
  
class NewUser(models.Model):
  firstname = models.CharField(max_length=150, unique=True)
  lastname = models.CharField(max_length=150)
  password = models.CharField(max_length=150)
  lic = models.CharField(max_length=150)
  state = models.CharField(max_length=150)
  expire = models.IntegerField()  

  def __str__(self):
      return self.firstname