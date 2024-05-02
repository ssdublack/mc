
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.b99c053b3c386f55b7ed.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.2a1b6ef084eb733eca4a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/486.latest.en.11169a2f003a2081bc48.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/137.latest.en.c494c1348d73aa1d1144.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.c4c5705eb8eec45cb8ad.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/977.latest.en.e1a0ded7d00403072415.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/582.latest.en.4ee215791a93f8eeed8e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/78.latest.en.251751f1b1eaca6e5d24.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/927.latest.en.222f26622f6ff8ccbe95.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/879.latest.en.70e2c9565324e9aec200.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/387.latest.en.64524889fc7ae774490a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.c7e149f3a2a8d1d399dd.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/302.latest.en.cb97d8c0c0262885bcdb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.140d43eee07cb8713aa0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.c0bf939290e35b2eeaf0.css"];
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
  