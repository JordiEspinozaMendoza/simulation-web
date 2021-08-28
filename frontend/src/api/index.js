import axios from "axios";

export async function callApi(url, method, body, constants, dispatch) {
  const { REQUEST, SUCCESS, FAIL } = constants;
  try {
    dispatch({ type: REQUEST });
    const { data } = await axios({
      method,
      url: url,
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: FAIL,
      payload: error.message,
    });
    throw "Ingresa parametros correctos"
  }
}
