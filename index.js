chrome.extension.sendRequest({}, function(response) {
  if (response && response.ison) {
    var script = document.createElement('script');
    script.innerHTML = `
      if (window.React && window.WHY_UPDATE_REACT) {
        window.WHY_UPDATE_REACT.whyDidYouUpdate(window.React);
      }
    `;
    var why = document.createElement('script');
    why.src = 'https://os.alipayobjects.com/rmsportal/mPnunujiVrTjrKdyIrFq.js';
    why.onload = function() {
      document.body.appendChild(script);
    }
    document.body.appendChild(why);
  }
});
