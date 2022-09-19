PS D:\laragon\www\laravel-vue-dashboard> npm audit
# npm audit report

ansi-html  <0.0.8
Severity: high
Uncontrolled Resource Consumption in ansi-html - https://github.com/advisories/GHSA-whgm-jr23-g3j9
fix available via `npm audit fix`
node_modules/ansi-html
  webpack-dev-server  2.3.0 - 4.7.2
  Depends on vulnerable versions of ansi-html
  Depends on vulnerable versions of selfsigned
  node_modules/webpack-dev-server
    laravel-mix  0.11.0 - 3.0.0 || 6.0.19 - 6.0.29
    Depends on vulnerable versions of webpack-dev-server
    node_modules/laravel-mix

ansi-regex  5.0.0
Severity: high
Inefficient Regular Expression Complexity in chalk/ansi-regex - https://github.com/advisories/GHSA-93q8-gq69-wqmw
fix available via `npm audit fix`
node_modules/ansi-regex

async  2.0.0 - 2.6.3
Severity: high
Prototype Pollution in async - https://github.com/advisories/GHSA-fwr7-v2mv-hh25     
fix available via `npm audit fix`
node_modules/async

axios  <0.21.2
Severity: high
axios Inefficient Regular Expression Complexity vulnerability - https://github.com/advisories/GHSA-cph5-m8f7-6c5x
fix available via `npm audit fix`
node_modules/axios

datatables.net  <1.11.3
Severity: moderate
Cross site scripting in datatables.net  - https://github.com/advisories/GHSA-h73q-5wmj-q8pj
fix available via `npm audit fix --force`
Will install startbootstrap-sb-admin-2@3.3.7, which is a breaking change
node_modules/datatables.net
node_modules/datatables.net-dt/node_modules/datatables.net
  datatables.net-bs4  1.10.16 - 1.10.25
  Depends on vulnerable versions of datatables.net
  node_modules/datatables.net-bs4
    startbootstrap-sb-admin-2  >=4.0.0
    Depends on vulnerable versions of datatables.net-bs4
    node_modules/startbootstrap-sb-admin-2

follow-redirects  <=1.14.7
Severity: high
Exposure of Sensitive Information to an Unauthorized Actor in follow-redirects - https://github.com/advisories/GHSA-pw2r-vq6v-hr8c
Exposure of sensitive information in follow-redirects - https://github.com/advisories/GHSA-74fj-2j2h-c42q
fix available via `npm audit fix`
node_modules/follow-redirects

minimist  <1.2.6
Severity: critical
Prototype Pollution in minimist - https://github.com/advisories/GHSA-xvch-5gv4-984h  
fix available via `npm audit fix`
node_modules/minimist

moment  <=2.29.3
Severity: high
Path Traversal: 'dir/../../filename' in moment.locale - https://github.com/advisories/GHSA-8hfj-j24r-96c4
Moment.js vulnerable to Inefficient Regular Expression Complexity - https://github.com/advisories/GHSA-wc69-rhjr-hc9g
fix available via `npm audit fix`
node_modules/moment

nanoid  3.0.0 - 3.1.30
Severity: moderate
Exposure of Sensitive Information to an Unauthorized Actor in nanoid - https://github.com/advisories/GHSA-qrpm-p2h7-hrv2
fix available via `npm audit fix`
node_modules/nanoid

node-forge  <=1.2.1
Severity: high
Open Redirect in node-forge - https://github.com/advisories/GHSA-8fr3-hfg3-gpgp      
Prototype Pollution in node-forge debug API. - https://github.com/advisories/GHSA-5rrq-pxf6-6jx5
Improper Verification of Cryptographic Signature in `node-forge` - https://github.com/advisories/GHSA-2r2c-g63r-vccr
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-x4jg-mjrx-434g
Improper Verification of Cryptographic Signature in node-forge - https://github.com/advisories/GHSA-cfm4-qjh2-4765
URL parsing in node-forge could lead to undesired behavior. - https://github.com/advisories/GHSA-gf8q-jrpm-jvxq
fix available via `npm audit fix`
node_modules/node-forge
  selfsigned  1.1.1 - 1.10.14
  Depends on vulnerable versions of node-forge
  node_modules/selfsigned

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix`
node_modules/nth-check

terser  >=5.0.0 <5.14.2 || <4.8.1
Severity: high
Terser insecure use of regular expressions before v4.8.1 and v5.14.2 leads to ReDoS - https://github.com/advisories/GHSA-4wf5-vphf-c2xc
Terser insecure use of regular expressions before v4.8.1 and v5.14.2 leads to ReDoS - https://github.com/advisories/GHSA-4wf5-vphf-c2xc
fix available via `npm audit fix`
node_modules/html-minifier-terser/node_modules/terser
node_modules/terser

17 vulnerabilities (5 moderate, 11 high, 1 critical)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force