yanxuan.getlist = async (name, page) => {
    const rp = Models.api["request-promise"];
    var options = {
        method: 'POST',
        uri: 'http://112.126.77.155:5000/yanxuan',
        body: {
            name: name,
            page: page
        },
        json: true
    };

    rp(options)
        .then(function (parsedBody) {
            return parsedBody
        })
        .catch(function (err) {
            // POST failed...
        });
};

JSON.parse()

yanxuan.getlist = async(name,page)=> {
    const rp = Models.api["request-promise"];
    var options = {
        method: 'POST',
        uri: 'http://112.126.77.155:5000/yanxuan',
        form: {
            name: name,
            page: page
        }
    };
    Models.api.console.debug(options)
    var data = rp(options)
        .then(function (body) {
            return body
        })
        .catch(function (err) {
            return err
        });
    Models.api.console.debug(data)
    Models.api.console.debug(typeof data)
    return data
};