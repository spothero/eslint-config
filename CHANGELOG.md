# 2.0.5 - 08/24/2020

## Miscellaneous Updates
* [[0fbebfd](https://github.com/spothero/eslint-config/commit/0fbebfd)] - `fix:` Add displayName to react-sort-comp (Matt)

# 2.0.4 - 08/24/2020

## Miscellaneous Updates
* [[bd523d3](https://github.com/spothero/eslint-config/commit/bd523d3)] - `fix:` Add max-classes-per-file to overrides for spec files (Matt)

# 2.0.3 - 08/18/2020
## Miscellaneous Updates
* [[0aa26e1](https://github.com/spothero/eslint-config/commit/0aa26e1)] - Rule False Positives Cleanup ([#13](https://github.com/spothero/eslint-config/pull/13)) (Matt Przybylski)
	* `fix:` Add jsx extension to file-extension-in-import ignore
	* `fix:` Reorder lifecycle in react sort-comp rule
	* `fix:` Disable default-param-last to avoid property ordering issues in non-object methods

# 2.0.2 - 08/18/2020
## Miscellaneous Updates
* [[e8f5682](https://github.com/spothero/eslint-config/commit/e8f5682)] - Disable no-missing-import and no-missing-require ([#12](https://github.com/spothero/eslint-config/pull/12)) (Matt Przybylski)
	* `chore:` Update to latest dependencies
	* `fix:` Disable no-missing-import and no-missing-require due to false positives with webpack resolved modules

# 2.0.1 - 08/11/2020

## Miscellaneous Updates
* [[c3e5185](https://github.com/spothero/eslint-config/commit/c3e5185)] - `fix:` Disable babel rules that are causing errors (Matt)

# 2.0.0 - 08/10/2020

## Breaking Changes
* [[99bcb4d](https://github.com/spothero/eslint-config/commit/99bcb4d)] - Update ESLint config ([#10](https://github.com/spothero/eslint-config/pull/10)) (Matt Przybylski)

# 1.9.1 - 06/30/2020

## Miscellaneous Updates
* [[0a296b7](https://github.com/spothero/eslint-config/commit/0a296b7)] - `chore:` Update Prettier usage to use new prettier-config ([#9](https://github.com/spothero/eslint-config/pull/9)) (Matt Przybylski)

# 1.9.0 - 09/04/2019
## New Features
* [[2a25c9e](https://github.com/spothero/eslint-config/commit/2a25c9e)] - Prettier integration ([#7](https://github.com/spothero/eslint-config/pull/7)) (Matt Przybylski)
	* `feat:` Integrate Prettier ESLint support
	* `fix:` Add allowArrowFunctions to react jsx-no-bind rule for usage with hooks
	* `feat:` Update padding-line-between-statements to align more with SpotHero coding style guide
	* `docs:` Update README

## Miscellaneous Updates
* [[061b7e0](https://github.com/spothero/eslint-config/commit/061b7e0)] - `fix:` Remove ternary parentheses rule and spothero plugin in preparation for prettier integration (Matt Przybylski)

# 1.8.4 - 07/05/2019

## Miscellaneous Updates
* [[6af2278](https://github.com/spothero/eslint-config/commit/6af2278)] - `fix:` Add eslint-plugin-babel to fix false positives (Matt Przybylski)

# 1.8.3 - 07/05/2019

## Miscellaneous Updates
* [[4d849cd](https://github.com/spothero/eslint-config/commit/4d849cd)] - `fix:` Update spothero eslint config to latest to fix issues with imports of ESLint updated files (Matt Przybylski)

# 1.8.2 - 07/05/2019

## Miscellaneous Updates
* [[0c12061](https://github.com/spothero/eslint-config/commit/0c12061)] - `chore:` Update to latest dependencies (Matt Przybylski)

# 1.8.1 - 06/21/2019

## Miscellaneous Updates
* [[c7d89aa](https://github.com/spothero/eslint-config/commit/c7d89aa)] - `fix:` Override rules that don't apply to test files (boiarqin)

# 1.8.0 - 06/17/2019
## Dependency Updates
* [[67d8a1f](https://github.com/spothero/eslint-config/commit/67d8a1f)] - Update dependencies, add Codeowners file (boiarqin)

# 1.7.0 - 05/13/2019
## New Features
* [[a3d9eae](https://github.com/spothero/eslint-config/commit/a3d9eae)] - Config Updates ([#4](https://github.com/spothero/eslint-config/pull/4)) (Matt Przybylski)
	* `fix:` Re-enable object-curly-spacing as it was turned off for some reason
	* `chore:` Update to latest dependencies
	* `feat:` Add eslint-plugin-react-hooks to configuration

# 1.6.1 - 04/08/2019

## Miscellaneous Updates
* [[4a29e60](https://github.com/spothero/eslint-config/commit/4a29e60)] - `chore:` Update deps to latest (Matt Przybylski)

# 1.6.0 - 03/20/2019
## New Features
* [[b839b6f](https://github.com/spothero/eslint-config/commit/b839b6f)] - Add cucumber/gherkin global function names (boiarqin)

# 1.5.2 - 02/28/2019

## Miscellaneous Updates
* [[351af8a](https://github.com/spothero/eslint-config/commit/351af8a)] - `chore:` Update deps to latest (Matt Przybylski)

# 1.5.1 - 01/08/2019

## Miscellaneous Updates
* [[6c45a99](https://github.com/spothero/eslint-config/commit/6c45a99)] - `fix:` Disable func-style expression setting to allow for more flexibility in modules (Matt Przybylski)
* [[46596a6](https://github.com/spothero/eslint-config/commit/46596a6)] - `fix:` Add version detection for react plugin to avoid warnings in shell (Matt Przybylski)
* [[5a4cd6a](https://github.com/spothero/eslint-config/commit/5a4cd6a)] - `chore:` Update to latest deps (Matt Przybylski)
* [[2f673d3](https://github.com/spothero/eslint-config/commit/2f673d3)] - `chore:` License under Apache 2.0 instead of MIT (Matt Przybylski)

# 1.5.0 - 12/03/2018
## New Features
* [[15915b5](https://github.com/spothero/eslint-config/commit/15915b5)] - Include spothero-eslint-plugin and custom rule (boiarqin)

# 1.4.4 - 11/05/2018

## Miscellaneous Updates
* [[a526646](https://github.com/spothero/eslint-config/commit/a526646)] - `chore:` Upgrade to latest dependencies and add newest node rules for TextEncoder and TextDecoder support (Matt Przybylski)

# 1.4.3 - 10/15/2018

## Miscellaneous Updates
* [[2a242ff](https://github.com/spothero/eslint-config/commit/2a242ff)] - `chore:` Upgrade to latest commitlint config and husky script format (Matt Przybylski)

# 1.4.2 - 09/26/2018

## Miscellaneous Updates
* [[ebaab86](https://github.com/spothero/eslint-config/commit/ebaab86)] - `fix:` Revert setting React version to latest to avoid false positives in some new React lifecycle method rules (Matt Przybylski)

# 1.4.1 - 09/25/2018

## Miscellaneous Updates
* [[1f14838](https://github.com/spothero/eslint-config/commit/1f14838)] - `fix:` Disabled buggy require-atomic-updates rule and set default react version settings to avoid warnings (Matt Przybylski)

# 1.4.0 - 09/25/2018
## Dependency Updates
* [[0884dbc](https://github.com/spothero/eslint-config/commit/0884dbc)] - Updated dependencies to latest, bump ecmaVersion to 9, add new rules (Matt Przybylski)

# 1.3.3 - 08/28/2018

## Miscellaneous Updates
* [[fb619d1](https://github.com/spothero/eslint-config/commit/fb619d1)] - `build:` Update to using newest npm-publisher for publishing to proper npm registry (Matt Przybylski)
* [[082cbd5](https://github.com/spothero/eslint-config/commit/082cbd5)] - `build:` Update to latest @spothero/npm-publisher and add unnecessary published files to .npmignore (Matt Przybylski)

# 1.3.2 - 08/01/2018
## Miscellaneous Updates
* [[2270211](https://github.com/spothero/eslint-config/commit/2270211)] - `fix:` Disable more rules that were giving false positives (Matt Przybylski)

# 1.3.1 - 07/31/2018
## Miscellaneous Updates
* [[e1d7a66](https://github.com/spothero/eslint-config/commit/e1d7a66)] - `fix:` Updated insane rules and ones firing false positives (Matt Przybylski)
* [[9c2c9b6](https://github.com/spothero/eslint-config/commit/9c2c9b6)] - `chore:` Bump commitlint version to allow longer commit messages (Matt Przybylski)

# 1.3.0 - 07/31/2018
## New Features
* [[6bef74f](https://github.com/spothero/eslint-config/commit/6bef74f)] - Added support for node and added new rules, removed deprecated (Matt Przybylski)
## Miscellaneous Updates
* [[dcab3fd](https://github.com/spothero/eslint-config/commit/dcab3fd)] - `chore:` Bumped @spothero/npm-publisher to latest (Matt Przybylski)

# 1.2.1 - 07/22/2018
## Miscellaneous Updates
* [[224fafe](https://github.com/spothero/eslint-config/commit/224fafe)] - `fix:` Change commitlint usage (Matt Przybylski)

# 1.2.0 - 06/26/2018
## Dependency Updates
* [[760a9b0](https://github.com/spothero/fe-eslint-config/commit/760a9b0)] - @spothero/config-commitlint 0.2.0 and @spothero/nexus 0.1.8 (Matt Przybylski)
## Miscellaneous Updates
* [[5b36769](https://github.com/spothero/fe-eslint-config/commit/5b36769)] - `fix:` Cleaned up React rules (Matt Przybylski)

# 1.1.0 - 06/22/2018
## New Features
* [[10cd538](https://github.com/spothero/fe-eslint-config/commit/10cd538)] - Added test environments and Cypress globals (Matt Przybylski)
## Miscellaneous Updates
* [[545d9c9](https://github.com/spothero/fe-eslint-config/commit/545d9c9)] - `build:` Updated to latest @spothero/nexus (Matt Przybylski)

# 1.0.1 - 06/21/2018
## Miscellaneous Updates
* [[59d5e07](https://github.com/spothero/fe-eslint-config/commit/59d5e07)] - `build:` Added @spothero/nexus to publish builds and commit linting (Matt Przybylski)

# 1.0.0 - 06/08/2018 - [Matt Przybylski](mailto:mattp@spothero.com)
-   **BREAKING:** Added `@spothero` scope and renamed module to `@spothero/eslint-config`.

# 0.1.5 - 10/31/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Changed dependencies to install ranges instead of specific version.

# 0.1.4 - 10/31/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Updated to latest npm dependencies and adjusted deprecated rules.

# 0.1.3 - 05/31/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Updated to latest npm dependencies.
-   Added `eslint-plugin-compat` for Browserslist support.

# 0.1.2 - 04/26/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Updated to latest npm dependencies.

# 0.1.1 - 02/09/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Reversioning to break Nexus cache for small updates to initial release.

# 0.1.0 - 01/26/2017 - [Matt Przybylski](mailto:mattp@spothero.com)
-   Initial release.
