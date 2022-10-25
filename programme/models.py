from django.db import models

class Item(models.Model):
    title = models.CharField(max_length=254, unique=True)
    description = models.TextField(max_length=500)
    moderator = models.ForeignKey("Attendee", on_delete=models.SET_NULL, null=True, related_name="items")
    location = models.ForeignKey("Location", on_delete=models.SET_NULL, null=True, related_name="items")
    time = models.TimeField(null=True)

    def __str__(self):
        return self.title


class Attendee(models.Model):
    STATUS_CHOICES = [
        ('guest', 'Guest'),
        ('member', 'Member'),
    ]

    name = models.CharField(max_length=254, unique=True)
    status = models.CharField(max_length=6, choices=STATUS_CHOICES, default='member')
    email = models.EmailField()

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=240, unique=True)
    description = models.CharField(max_length=254, null=True)

    def __str__(self):
        return self.name
