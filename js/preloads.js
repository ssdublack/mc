
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.0c23325b94b713854ae4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.2a1b6ef084eb733eca4a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/486.latest.en.08c31c8a32005b5fec1f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.latest.en.c494c1348d73aa1d1144.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cb9f1b5f8aa0041599fa.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.latest.en.4ee215791a93f8eeed8e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.bc2f449157750c537e8d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.latest.en.222f26622f6ff8ccbe95.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/879.latest.en.70e2c9565324e9aec200.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.64524889fc7ae774490a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.27a85774418829d21c8f.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.3af68583450c90aa4e56.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.140d43eee07cb8713aa0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.c0bf939290e35b2eeaf0.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  