import sys
import pandas as pd

sys.setrecursionlimit(10000)


def GetRes(X, a, c, m):
    res = ((a * X) + c) % m
    return res


def createDataFrame(data):
    df = pd.DataFrame(data, columns=["n", "Xn", "Xn+1", "Rn"])
    cols = list(df.columns)
    return df.to_string(), df, cols


def CallGenerator(x0, a, c, m, counter, stop, arraySeed, data):
    try:
        for seed in arraySeed:
            if x0 == seed:
                stop = True

        if stop == True or counter == 10000:
            pass
        else:
            data["n"].append(counter + 1)
            data["Xn"].append(x0)
            data["Xn+1"].append(GetRes(x0, a, c, m))
            data["Rn"].append(GetRes(x0, a, c, m) / m)
            counter = counter + 1
            arraySeed.append(x0)
            CallGenerator(GetRes(x0, a, c, m), a, c, m, counter, stop, arraySeed, data)
    except Exception as e:
        print(str(e))
