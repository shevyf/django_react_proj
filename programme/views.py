from django.http import HttpResponse
from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Item, Attendee, Location
from .serializers import *

import newrelic.agent
import json

@api_view(['GET', 'POST'])
def items_list(request):
    if request.method == 'GET':
        data = Item.objects.all()

        serializer = ItemSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def items_detail(request, pk):
    try:
        item = Item.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ItemSerializer(item)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ItemSerializer(item, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def attendees_list(request):
    if request.method == 'GET':
        data = Attendee.objects.all()

        serializer = AttendeeSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AttendeeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def attendees_detail(request, pk):
    try:
        attendee = Attendee.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AttendeeSerializer(attendee)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = AttendeeSerializer(attendee, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        attendee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def locations_list(request):
    if request.method == 'GET':
        data = Location.objects.all()

        serializer = LocationSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def locations_detail(request, pk):
    try:
        location = Location.objects.get(pk=pk)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = LocationSerializer(location)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = LocationSerializer(location, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        location.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

from django.shortcuts import render

def index(request):
  return render(request, "index.html")

def iframe(request):
    newrelic.agent.disable_browser_autorum()
    return render(request, "iframe.html")

def mynrindex(request):
    return render(request, "mynrindex.html")

def redirect_test(request):
    return redirect("https://newrelic.com")

def return_request_headers(request):
    headers = '{'
    for header in request.headers:
        headers += '"' + header + '"' + ':' + '"' + str(request.headers[header]) + '",'
    headers = headers[:-1]
    headers += '}'
    # headers = json.dumps(request.headers)
    return HttpResponse(headers, content_type="application/json")
