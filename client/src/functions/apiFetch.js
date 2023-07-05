export async function apiFetch(path, method, bodyObject = null) {
  try {
    const requestConfig = {
      method: `${method}`,
      headers: {
        "Content-Type": "application/json"
      }
    };
    if (bodyObject) {
      requestConfig.body = JSON.stringify(bodyObject);
    }
    const httpResponse = await fetch(`/api/${path}`, requestConfig);
    const responseObject = await httpResponse?.json();
    return { httpResponse, responseObject };
  } catch (err) {
    console.error(err);
    return null;
  }
}
