from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework import status
from base.scripts.frequency import TestFrequency
from base.scripts.generator import CallGenerator

import pandas as pd


@api_view(["GET"])
def callTestFrequency(request):
    data = request.data
    # testNumbers = []

    # for i in data["df"]:
    #     testNumbers.append(int(i))
    data_generator = {"n": [], "Xn": [], "Xn+1": [], "Rn": []}
    CallGenerator(17, 101, 221, 17001, 0, False, [], data_generator)

    # ? We declare a object of the class TestFrequency
    testFrequency = TestFrequency(
        int(data["numberGroups"]),
        float(data["alpha"]),
        data_generator
    )
    dfFrequency, foundedChiFreq, chiFreq, dfFreq = testFrequency.solve()
    response = {
        "dfFrequency": dfFrequency,
        "foundedChiFrequency": foundedChiFreq,
        "chiFrequency": chiFreq,
        "dfFrequency": dfFreq,
    }
    return Response(response, status=status.HTTP_200_OK)
