Array.prototype.duplicate = function () {
    return this.slice(0).concat(this);
};



//   [1,2,3,4].duplicate()