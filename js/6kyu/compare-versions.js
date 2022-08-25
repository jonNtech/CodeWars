const compareVersions = (v1, v2) => {
  const a1 = v1.split('.').map(Number);
  const a2 = v2.split('.').map(Number);
  for (let i = 0; i < Math.max(a1.length, a2.length); i++) {
    let n1 = a1[i] || 0, n2 = a2[i] || 0;
    if (n1 === n2) continue;
    return (n1 > n2) ? true : false;
  }
  return true;
};


// OR

function compareVersions (version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  for (let i = 0; i < v1.length; i++) {
    if (+v1[i] > +v2[i]) { return true  }
    if (+v1[i] < +v2[i]) { return false }
  }
  return v1.length >= v2.length;
}
