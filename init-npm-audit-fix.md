PS D:\laragon\www\laravel-vue-dashboard> npm audit fix

added 52 packages, removed 71 packages, changed 302 packages, and audited 838 packages in 2m

85 packages are looking for funding
  run `npm fund` for details

# npm audit report

datatables.net  <1.11.3
Severity: moderate
Cross site scripting in datatables.net  - https://github.com/advisories/GHSA-h73q-5wmj-q8pj
fix available via `npm audit fix --force`
Will install startbootstrap-sb-admin-2@3.3.7, which is a breaking change
node_modules/datatables.net
  datatables.net-bs4  1.10.16 - 1.10.25
  Depends on vulnerable versions of datatables.net
  node_modules/datatables.net-bs4
    startbootstrap-sb-admin-2  >=4.0.0
    Depends on vulnerable versions of datatables.net-bs4
    node_modules/startbootstrap-sb-admin-2

3 moderate severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force