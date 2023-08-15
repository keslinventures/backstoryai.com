/*
By default, Klaro will load the config from a global 'klaroConfig' variable. You
can change this by specifying the 'data-klaro-config' attribute on your script:
<script src="klaro.js" data-klaro-config="myConfigVariableName"
*/
var klaroConfig = {
  /*
  Setting 'testing' to 'true' will cause Klaro to not show the consent notice or
  modal by default, except if a special hash tag is appended to the URL (#klaro-
  testing). This makes it possible to test Klaro on your live website without
  affecting normal visitors.
  */
  testing: false,
  
  /*
  You can customize the ID of the DIV element that Klaro will create when starting
  up. By default, Klaro will use 'klaro'.
  */
  elementID: 'klaro-consent',
  
  /*
  You can customize how Klaro persists consent information in the browser. Specify
  either cookie' (the default) or 'localStorage'.
  */
  storageMethod: 'cookie',
  
  /*
  You can customize the name of the cookie or localStorage entry that Klaro will
  use for storing the consent information. By default, Klaro will use 'klaro'.
  */
  storageName: 'klaroConsent',
  
  /*
  If set to `true`, Klaro will render the texts given in the
  `consentModal.description` and `consentNotice.description` translations as HTML.
  This enables you to e.g. add custom links or interactive content.
  */
  htmlTexts: false,
  
  /*
  You can change the cookie domain for the consent manager itself. Use this if you
  want to get consent once for multiple matching domains. By default, Klaro will
  use the current domain. Only relevant if 'storageMethod' is set to 'cookie'.
  */
  // cookieDomain: '.example.com',
  
  /*
  You can also set a custom expiration time for the Klaro cookie. By default, it
  will expire after 30 days. Only relevant if 'storageMethod' is set to 'cookie'.
  */
  cookieExpiresAfterDays: 30,
  
  /*
  Defines the default state for services in the consent modal (true=enabled by
  default). You can override this setting in each service.
  */
  default: true,
  
  /*
  If 'mustConsent' is set to 'true', Klaro will directly display the consent
  manager modal and not allow the user to close it before having actively
  consented or declined the use of third-party services.
  */
  mustConsent: false,
  
  /*
  Setting 'acceptAll' to 'true' will show an "accept all" button in the notice and
  modal, which will enable all third-party services if the user clicks on it. If
  set to 'false', there will be an "accept" button that will only enable the
  services that are enabled in the consent modal.
  */
  acceptAll: true,
  
  /*
  Setting 'hideDeclineAll' to 'true' will hide the "decline" button in the consent
  modal and force the user to open the modal in order to change his/her consent or
  disable all third-party services. We strongly advise you to not use this
  feature, as it opposes the "privacy by default" and "privacy by design"
  principles of the GDPR (but might be acceptable in other legislations such as
  under the CCPA)
  */
  hideDeclineAll: false,
  
  /*
  Setting 'hideLearnMore' to 'true' will hide the "learn more / customize" link in
  the consent notice. We strongly advise against using this under most
  circumstances, as it keeps the user from customizing his/her consent choices.
  */
  hideLearnMore: false,
  
  /*
  You can overwrite existing translations and add translations for your service
  descriptions and purposes. See `src/translations/` for a full list of
  translations that can be overwritten:
  https://github.com/KIProtect/klaro/tree/master/src/translations
  */
  translations: {
    /*
    The `zz` key contains default translations that will be used as fallback values.
    This can e.g. be useful for defining a fallback privacy policy URL.
    */
    zz: {
      privacyPolicyUrl: 'https://www.backstoryai.com/help/privacy-policy.html'
    }
  },
  
  /*
  Here you specify the third-party services that Klaro will manage for you.
  */
  services: [{
    name: 'googleAnalytics',
    title: 'Google Analytics',
    onlyOnce: true,
    purposes: ['analytics'] 
  }]
};
