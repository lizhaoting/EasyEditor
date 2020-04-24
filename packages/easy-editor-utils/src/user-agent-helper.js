
export const mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform): typeof os != "undefined" ? os.platform() == "darwin" : false