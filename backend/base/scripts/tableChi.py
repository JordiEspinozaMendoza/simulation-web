import numpy as np
import pandas as pd
from base.utils.alphaDataTable import getAlphaTable


class Table_Chi:
    alpha = 0.0
    nGroups = 0.0
    dataFrame = None
    data_table = getAlphaTable()

    def __init__(self, alpha, nGroups):
        self.alpha = alpha
        self.nGroups = nGroups - 1

    def getTable(self):
        self.dataFrame = pd.DataFrame(self.data_table)

    def foundChi(self):
        temp = self.dataFrame[self.alpha].tolist()
        if self.nGroups <= 0:
            return temp[0]
        else:
            return temp[self.nGroups - 1]
