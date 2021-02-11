function service1(param1: Boolean, param2: Boolean, param3: Boolean): string {
  if (param1 === true && param2 === true && param3 === true) {
    return "all true 1";
  }
  // The rest here
  return "default";
}

function service2(param4: Boolean, param5: Boolean, param6: Boolean): string {
  if (param4 === true && param5 === true && param6 === true) {
    return "all true 2";
  }
  // The rest here
  return "default";
}

function aggregator(
  param1: Boolean,
  param2: Boolean,
  param3: Boolean,
  param4: Boolean,
  param5: Boolean,
  param6: Boolean
) {
  const service1Response = service1(param1, param2, param3);
  const service2Response = service1(param4, param5, param6);
  return { service1Response, service2Response };
}
