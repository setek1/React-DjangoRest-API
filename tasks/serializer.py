from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        #elegimos que campos queremos que se envien del modelo tasks
        fields='__all__'