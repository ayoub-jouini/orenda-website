const httpRequest = async (data, url, meth) => {
    let resData;
    try {
        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: meth,
        })
        resData = response.json();
    } catch (err) {
        throw err;
    }

    return resData;
}

export default httpRequest;