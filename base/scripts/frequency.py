import sys
import os
import pandas as pad
# from pandas.core.frame import DataFrame
from base.scripts.generator import *
from base.scripts.tableChi import *


class TestFrequency:
    #! Properties

    def __init__(self, numTest, alpha, df):
        self.data = {"n": [], "Xn": [], "Xn+1": [], "Rn": []}
        self.CHI = 0.00
        self.founded_chi = 0.00
        self.res = 0.000

        self.alpha = alpha
        self.intervals = [0]
        self.date = {"Intervalo": [], "FE": [], "FO": [], "Grupo": []}
        self.dfFinal = None
        self.numTest = numTest
        self.numTestList = [x for x in range(1, self.numTest + 1)]
        self.FO = [0] * self.numTest
        self.FE = [0] * self.numTest
        self.df = df

    # ? Method that check the intervals
    def checkIntervals(self, number):
        for i in range(0, len(self.FO)):
            if number >= self.intervals[i] and number < self.intervals[i + 1]:
                self.FO[i] = self.FO[i] + 1

    # ? Method to solve the problem
    def solve(self):
        try:
            testNumbers = self.df["Rn"]
            for i in range(0, self.numTest):
                self.date["Intervalo"].append(i + 1)
            for i in range(0, len(self.FE)):
                self.FE[i] = len(testNumbers) / self.numTest
            myInterval = 1.0 / float(self.numTest)
            for i in range(1, self.numTest):
                try:
                    self.intervals.append(self.intervals[i - 1] + myInterval)
                except Exception as e:
                    print(str(e))

            self.intervals.append(1)
            self.intervals.sort()

            for i in range(0, len(testNumbers)):
                self.checkIntervals(testNumbers[i])

            for i in range(0, len(self.FE)):
                self.date["FE"].append(self.FE[i])
                self.date["FO"].append(self.FO[i])
            self.CHI = 0.00
            sumFe = 0.00
            sumFo = 0.00

            for j in range(0, len(self.FO)):
                self.CHI += (
                    (self.FO[j] - self.FE[j]) * (self.FO[j] - self.FE[j])
                ) / self.FE[j]
                sumFe += self.FE[j]
                sumFo += self.FO[j]
                self.date["Grupo"].append(
                    f"{str('{:.2f}'.format(self.intervals[j]))} - {str('{:.2f}'.format(self.intervals[j+1]))}"
                )

            self.date["Intervalo"].append("Sumatoria")
            self.date["FE"].append(sumFe)
            self.date["FO"].append(sumFo)
            self.date["Grupo"].append("---")

            # ? Table chi method
            table_chi = Table_Chi(self.alpha, self.numTest)
            table_chi.getTable()
            if self.founded_chi:
                self.founded_chi = table_chi.foundChi()

            self.dfFinal = pad.DataFrame(
                self.date, columns=["Intervalo", "FE", "FO", "Grupo"]
            )
            return self.dfFinal, self.founded_chi, self.CHI, self.df
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print(exc_type, fname, exc_tb.tb_lineno)
            return e
