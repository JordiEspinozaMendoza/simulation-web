from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework import status
from base.scripts.smirnov import TestSmirnov
from base.scripts.generator import CallGenerator

@api_view(["POST"])
def callTestSmirnov(request):
    data = request.data

    # ? We declare a object of the class TestFrequency
    smirnov = TestSmirnov(
        f"{data['percent']}%", int(data["numberGroups"]), data["pseudoNumbers"]
    )
    response = smirnov.solve()
    return Response(response, status=status.HTTP_200_OK)
