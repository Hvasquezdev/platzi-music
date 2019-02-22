const msToMn = {};

function convertMsToMn (ms) {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 6000 / 1000).toFixed(0));

  return `${min}:${(sec < 10) ? '0' + sec : sec}`;
}

msToMn.install = (Vue) => {
  Vue.filter('ms-to-mn', (val) => {
    return convertMsToMn (val);
  })
}

export default msToMn;