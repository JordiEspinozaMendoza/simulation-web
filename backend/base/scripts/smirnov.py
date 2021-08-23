from base.scripts.generator import *
import pandas as pd
from pandas.core.frame import DataFrame
import math
from base.utils.smirnovDataTable import getSmirnovDataTable


class TestSmirnov:
    percent = 0
    n = 0
    approved = False

    def __init__(self, percent, n, df):
        self.data_generator = {"n": [], "Xn": [], "Xn+1": [], "Rn": []}
        self.percent = percent
        self.n = n
        self.df = df

    def solve(self):
        Di = []
        numbers2 = []
        excel = getSmirnovDataTable()
        data_excel = pd.DataFrame(excel)
        for i in self.df["Rn"]:
            numbers2.append(i)
        numbers2.sort()
        numbers = []
        for i in range(0, self.n):
            numbers.append(numbers2[i])
        Fn = [0] * len(numbers)
        for i in range(0, len(numbers)):
            Fn[i] = (i + 1) / (len(numbers))
        for i in range(0, len(numbers)):
            rest = numbers[i] - Fn[i]
            if rest < 0:
                Di.append((rest) * (-1))
            else:
                Di.append(rest)
        about = 0.0
        nValues = []
        for i in data_excel["n"]:
            nValues.append(i)
        if self.percent == "10%":
            if len(numbers) in (y for y in nValues if y == self.n):
                about = data_excel.loc[data_excel["n"] == self.n, "0.10"].item()
                print(f"El valor de tablas es {about}")
            else:
                about = 1.22 / (math.sqrt(self.n))
        elif self.percent == "5%":
            if self.n in (y for y in nValues if y == self.n):
                about = data_excel.loc[data_excel["n"] == self.n, "0.05"].item()
                print(f"El valor de tablas es {about}")
            else:
                about = 1.36 / math.sqrt(self.n)

        elif self.percent == "1%":
            if self.n in (y for y in nValues if y == self.n):
                about = data_excel.loc[data_excel["n"] == self.n, "0.01"].item()
                print(f"El valor de tablas es {about}")
            else:
                about = 1.63 / math.sqrt(self.n)

        if about < max(Di):
            message = "Los numeros si estan distribuidos uniformemente de acuerdo a la prueba de kolmogorov-smirnov"
            self.approved = True
        else:
            message = "Los numeros no estan distribuidos uniformemente de acuerdo a la prueba de kolmogorov-smirnov"
            self.approved = False

        # ? Return the results of the test
        return {"message": message, "max": max(Di), "about": about}
