---
title: "CI/CD"
layout: notes
---

[CI/CD]: https://en.wikipedia.org/wiki/CI/CD
[DevOps]: https://en.wikipedia.org/wiki/DevOps
[GitHub Actions]: https://docs.github.com/en/actions
[GitLab CI/CD]: https://docs.gitlab.com/ee/ci/
[Jenkins]: https://jenkins.io
[CircleCI]: https://circleci.com

[CICD Pipleline]: https://images.ctfassets.net/wfutmusr1t3h/522vhdOxPe5fxBb1zqDlUd/f981c8602d975821818a2dbb2b777e2c/Group_48096049__1_.png?w=1012&q=75

[Continuous Integration]: https://en.wikipedia.org/wiki/Continuous_integration
[Continuous Delivery]: https://en.wikipedia.org/wiki/Continuous_delivery
[Continuous Deployment]: https://en.wikipedia.org/wiki/Continuous_deployment

[CD Process]: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Continuous_Delivery_process_diagram.svg/1462px-Continuous_Delivery_process_diagram.svg.png

# [CI/CD]
* Composed of two combined practices
	* CI - Continuous Integration
	* CD - Continuous Delivery/Deployment
* Core components of [DevOps]/DevSecOps:
	* [DevOps] - characterized by shared ownership, workflow automation, and rapid feedback
* [GitHub Actions], [GitLab CI/CD], [Jenkins], [CircleCI]

# CICD Pipleline
![CICD Pipleline]


# [Continuous Integration]
> Practice of merging all developer working copies to a shared mainline several times a day [Wikipedia]<br/>
> Automatically builds, tests, and integrates code changes within a shared repository [GitHub]

* Best practices:
	* Maintain code repository
	* Automate build
	* Build is self-testing
	* Each commit is built

# [Continuous Delivery]
> Automatically delivers code changes to production-ready environments for approval [GitHub]

* Human signs off before final release to production

# [Continuous Deployment]
> Automatically deploys code changes to customers directly [GitHub]

* No human sign off on final release, direct to production
* Rigorous testing tools and a mature testing culture

# CD Process
![CD Process]