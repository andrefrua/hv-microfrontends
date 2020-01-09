import React, { useState, useEffect } from "react";

const renderService = (service, history) => {
  const render = window[`render${service}`];
  render && render(`${service}-container`, history);
};

const unmountService = service => {
  const unmount = window[`unmount${service}`];
  unmount && unmount(`${service}-container`);
};

const loadScript = (service, src, onload) => {
  const script = document.createElement("script");
  script.id = service;
  script.crossOrigin = "";
  script.src = src;
  script.onload = onload;
  document.head.appendChild(script);
};

const ServiceLoader = ({ host, history }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    let service = null;

    (async () => {
      const res = await fetch(`${host}/manifest.json`);
      const manifest = await res.json();
      const script = `${host}${manifest["main.js"]}`;

      service = `${manifest.name}-${manifest.id}`;
      setService(service);

      window[service]
        ? renderService(service, history)
        : loadScript(service, script, () => renderService(service, history));
    })();

    return () => unmountService(service);
  }, []);

  return <main id={`${service}-container`} />;
};

export default ServiceLoader;
