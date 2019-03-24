function displayInConsole(firstEndpoint, secondEndpoint) {
    console.log(`${firstEndpoint}${secondEndpoint}`);
}

function getData() {
    let firstEndpointCall = fetch("https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=json");
    let secondEndpointCall = fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json");

    Promise.all([firstEndpointCall, secondEndpointCall])
        .then(values => Promise.all(values.map(value => value.json())))
        .then(finalVals => {
            let firstEndpointResp = finalVals[0];
            let secondEndpointResp = finalVals[1];
            displayInConsole(firstEndpointResp, secondEndpointResp);
        });
}


getData();