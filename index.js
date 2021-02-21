// ForceReq
exports.printMsg = function() {
  console.log('ForceReq');
}

const errTXT = "\x1b[41m\x1b[37mErr\x1b[0m"

const ForceReq = (modulePath) => {
      try {
     return require(modulePath);
    }
    catch (e) {
     console.log(errTXT + '\x1b[1ForceReq()\x1b[22m: The file "' + modulePath + '" could not be loaded.');
     return false;
    }
}

module.exports.ForceReq = ForceReq;
