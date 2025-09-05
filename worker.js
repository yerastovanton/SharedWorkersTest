let counter = 0;
const ports = [];

setInterval(() => {
  counter++;
  for (const port of ports) {
    port.postMessage({ counter });
  }
}, 1000);

onconnect = function (e) {
  const port = e.ports[0];
  ports.push(port);

  port.onmessage = function (event) {
    if (event.data === "getCounter") {
      port.postMessage({ counter });
    }
  };
};
