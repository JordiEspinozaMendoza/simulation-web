from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework import status
from base.scripts.frequency import TestFrequency
from base.scripts.generator import CallGenerator

import pandas as pd
import os, sys


@api_view(["POST"])
def callTestFrequency(request):
    try:
        data = request.data
        # ? We declare a object of the class TestFrequency
        testFrequency = TestFrequency(
            int(data["numberGroups"]),
            float(data["alpha"]),
            data["pseudoNumbers"])
        dfFrequency, foundedChiFreq, chiFreq, dfFreq = testFrequency.solve()
        responseDf = []
        for i in range(0, len(dfFrequency["Intervalo"])):
            responseDf.append(
                {
                    "Interval": dfFrequency["Intervalo"][i],
                    "FE": dfFrequency["FE"][i],
                    "FO": dfFrequency["FO"][i],
                    "Group": dfFrequency["Grupo"][i],
                }
            )
        response = {
            "dfFrequency": responseDf,
            "foundedChiFrequency": foundedChiFreq,
            "chiFrequency": chiFreq,
            "dfFreq": dfFreq,
        }
        return Response(response, status=status.HTTP_200_OK)
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        message = {'detail': 'Something bad happen'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
