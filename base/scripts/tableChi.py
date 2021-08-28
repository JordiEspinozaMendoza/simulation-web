import numpy as np
import pandas as pd
from base.utils.alphaDataTable import getAlphaTable


class Table_Chi:
    def __init__(self, alpha, nGroups):
        self.alpha = alpha
        self.nGroups = nGroups - 1
        self.data_table = getAlphaTable()
        
    def getTable(self):
        self.dataFrame = pd.DataFrame(self.data_table)

    def foundChi(self):
        try: 
            temp = self.dataFrame[self.alpha].tolist()

            if self.nGroups <= 0:
                return temp[0]
            else:
                return temp[self.nGroups - 1]
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print(exc_type, fname, exc_tb.tb_lineno)
            return e
