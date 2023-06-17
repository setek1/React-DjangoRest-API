from django.db import models

# Create your models here.

class Task (models.Model):
    nombre=models.CharField(max_length=200)
    description=models.TextField(blank=True)
    done=models.BooleanField(default=False)

    def __str__(self):
        return self.nombre