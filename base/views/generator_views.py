from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework import status
from base.scripts.generator import CallGenerator


@api_view(["POST"])
def generateNumbers(request):
    try:
        data = request.data
        data_generator = {"n": [], "Xn": [], "Xn+1": [], "Rn": []}
        CallGenerator(
            int(data["x0"]),
            int(data["a"]),
            int(data["c"]),
            int(data["m"]),
            0,
            False,
            [],
            data_generator,
        )
        response = []
        for i in range(0, len(data_generator["n"])):
            response.append(
                {
                    "xn": data_generator["Xn"][i],
                    "xn1": data_generator["Xn+1"][i],
                    "rn": data_generator["Rn"][i],
                    "n": data_generator["n"][i],
                }
            )
        return Response({
            "response": response,
            "pseudoNumbers": data_generator
        }, status=status.HTTP_200_OK)
    except Exception as e:
        print('Error details: ' + ' ' + str(e))

        return Response("Verifica los números introducidos", status=status.HTTP_400_BAD_REQUEST)
