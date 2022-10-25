from rest_framework import serializers
from .models import Item, Attendee, Location


class AttendeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attendee
        fields = ('pk', 'name', 'status', 'email')


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ('pk', 'name', 'description')


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = ('pk', 'title', 'description', 'moderator', 'location', 'time')
