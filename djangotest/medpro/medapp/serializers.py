from rest_framework import serializers
from .models import * # Import your model here

class PatientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = patient  # Use your model class name here
        fields = '__all__'  # List the fields you want to include in the serialization
