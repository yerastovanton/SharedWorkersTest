let counter = 0;

setInterval(() => {
  counter++;
  // отправляем всем подключённым клиентам
  for (const port of ports) {
    port.postMessage({ counter });
  }
}, 1000);

const ports = [];

onconnect = function (e) {
  const port = e.ports[0];
  ports.push(port);

  port.onmessage = function (event) {
    if (event.data === "getCounter") {
      port.postMessage({ counter });
    }
  };
};
