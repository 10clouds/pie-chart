sanitizeOptions: function(options) {
  if (options.thickness === undefined) {
    options.thickness = 20;
  } else {
    options.thickness = parseInt(options.thickness);
  }


  if (options.mode === "gauge") {
    this.sanitizeGaugeOptions(options);
  }

  return options;
},

sanitizeGaugeOptions: function(options) {
  options.total = parseInt(options.total);
  if (!options.total) {
    options.total = 100;
  }

  options.duration = parseInt(options.duration);
  if (!options.duration) {
    options.duration = 1200;
  }
}
