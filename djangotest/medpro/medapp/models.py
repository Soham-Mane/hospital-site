from django.db import models

# Create your models here.
class patient(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    phone = models.IntegerField()
    address = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

class appointment(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    phone = models.IntegerField()
    date = models.DateField()
    time = models.TimeField()
    doctor = models.CharField(max_length=100)
    department = models.CharField(max_length=100)