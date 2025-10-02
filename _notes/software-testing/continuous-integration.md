---
title: "Continuous Integration"
layout: notes
---

# [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
* Practice of merging all developer working copies to a shared mainline several times a day
* A few best practices:
	* Maintain code repository
	* Automate build
	* **Build is self-testing**
	* Each commit is built
* Tools: [Jenkins](https://jenkins.io), [CircleCI](https://circleci.com)


# [CircleCI](https://circleci.com)
* Free and supported by GitHub
* Pushing to GitHub repo spawns a Job
* Developer writes what is executed in Job, e.g., build and test
* Subscribers emailed results of Job (E.g., Success/Failure)
* Integrated with [Docker](https://www.docker.com)
* Supports [workflows](https://circleci.com/docs/guides/orchestrate/workflows/)


# Adding CircleCI
* Add Project to [CircleCI](https://app.circleci.com)
* Need a top-level directory `.circleci`
* Directory contains a file `config.yml`
* Contents written in [YAML](https://en.wikipedia.org/wiki/YAML) - a data serialization standard
* [CircleCI YAML Guide](https://circleci.com/docs/guides/getting-started/introduction-to-yaml-configurations/)


# Live Example
* Code posted on GitHub


# Adding a Project to CircleCI	


# Simple `.circleci/config.yuml`
<script src="https://gist.github.com/mjdecker/4b467fec78585bf494e9446470e590e0.js?file=circleci-simple.yml"></script>

# More Complex `.circleci/config.yuml`
<script src="https://gist.github.com/mjdecker/4b467fec78585bf494e9446470e590e0.js?file=circleci.yml"></script>


# Pushing a Change Triggers Process


# Running and Completed Process on CircleCI
