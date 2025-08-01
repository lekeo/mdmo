# Engineering

This handbook page details processes specific to working [with](#contact-us) and [within](#responsibilities) this department.


## Team

| Role                            | Contributor(s)           |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------|
| Chief Technology Officer (CTO)  | [Luke Heath](https://www.linkedin.com/in/lukeheath/) _([@lukeheath](https://github.com/lukeheath))_
| Engineering Manager (EM)        | <sup><sub> _See [🛩️ Product groups](https://fleetdm.com/handbook/company/product-groups#current-product-groups)_ </sup></sub>
| Quality Assurance Engineer (QA) | <sup><sub> _See [🛩️ Product groups](https://fleetdm.com/handbook/company/product-groups#current-product-groups)_ </sup></sub>
| Software Engineer               | <sup><sub> _See [🛩️ Product groups](https://fleetdm.com/handbook/company/product-groups#current-product-groups)_ </sup></sub>


## Contact us

- To **make a request** of this department, [create an issue](https://fleetdm.com/handbook/company/product-groups#current-product-groups) and a team member will get back to you within one business day (If urgent, mention a [team member](#team) in the [#help-engineering](https://fleetdm.slack.com/archives/C019WG4GH0A) Slack channel.
  - Any Fleet team member can [view the kanban boards](https://fleetdm.com/handbook/company/product-groups#current-product-groups) for this department, including pending tasks and the status of new requests.
  - Please **use issue comments and GitHub mentions** to communicate follow-ups or answer questions related to your request.


## Responsibilities

The 🚀 Engineering department at Fleet is directly responsible for writing and maintaining the [code](https://github.com/fleetdm/fleet) for Fleet's core product and infrastructure.


### Write a feature guide 

We write [guides](https://fleetdm.com/guides) for all new features. Feature guides are published before the feature is released so that our users understand how the feature is intended to work. A guide is a type of article, so the process for writing a guide and article is the same.

1. Review and follow the [Fleet writing style guide](https://fleetdm.com/handbook/company/communications#writing).
2. Make a copy of a guide in the [/articles](https://github.com/fleetdm/fleet/tree/main/articles) directory and replace the content with your article. Make sure to maintain the same heading sizes and update the metadata tags at the bottom.
3. Open a new pull request containing your article into `main` and add the pull request to the milestone this feature will be shipped in. The pull request will automatically be assigned to the appropriate reviewer.


### Create an engineering-initiated story

Engineering-initiated stories are types of user stories created by engineers to make technical changes to Fleet. Technical changes should improve the user experience or contributor experience. For example, optimizing SQL that improves the response time of an API endpoint improves user experience by reducing latency. A script that generates common boilerplate, or automated tests to cover important business logic, improves the quality of life for contributors, making them happier and more productive, resulting in faster delivery of features to our customers.

It's important to frame engineering-initiated user stories the same way we frame all user stories. Stay focused on how this technical change will drive value for our users.

1. Create a new engineering-initiated story using the [new story template](https://github.com/fleetdm/fleet/issues/new?assignees=lukeheath&labels=story,~engineering-initiated&projects=&template=story.md&title=). Make sure the `~engineering-initiated` label is added, the `:product` label is removed, and the engineering output and architecture DRI (@lukeheath) is assigned.

2. If the user story contributes to an OKR, explain how in the "Key result" section. If not, explain what key result we can measure to determine if this story is successful.

3. Set yourself as the product designer for the user story if another engineer is not DRI. By default, the engineer creating the engineering-initiated story is DRI for the story and will design and implement it.

4. Remove the "Product" section and checklist from the issue description. 

5. Create the issue. The new user story will be automatically placed in the "New Requests" column of the [engineering GitHub board](https://github.com/orgs/fleetdm/projects/73). If you feel the issue is urgent, tag your EM or the engineering output and architecture DRI (@lukeheath) in a comment.

> We prefer the term engineering-initiated stories over technical debt because the user story format helps keep us focused on our users and contributors.


### Draft an engineering-initiated story

The engineering output and architecture DRI reviews and triages engineering-initiated stories weekly on the [Engineering board](https://github.com/orgs/fleetdm/projects/73) and selects stories to prioritize for drafting by adding the `:product` label, placing it in the "Ready" column, and assigning to the engineer listed as the product designer. 

1. The assigned engineer is responsible for completing the user story drafting process by completing the specs and [defining done](https://fleetdm.com/handbook/company/product-groups#defining-done). Move the issue into "In progress" on the drafting board and populate all TODOs in the issue description, define implementation details, and draft the first version of the test plan.

2. When all sections have been populated, move it to the "User story review" column on the drafting board and assign to your EM. The EM will bring the story to [weekly user story review](https://fleetdm.com/handbook/company/product-groups#user-story-reviews), and then to estimation before prioritizing into an upcoming sprint. 


### Fix a bug

All bug fix pull requests should reference the issue they resolve with the issue number in the description. Please do not use any [automated words](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) since we don't want the issues to auto-close when the PR is merged.


### Review a community pull request

If you're assigned a community pull request for review, it is important to keep things moving for the contributor. The goal is to not go more than one business day without following up with the contributor.

If the PR is a quick fix (i.e. typo) or obvious technical improvement that doesn't change the product, it can be merged.

**For PRs that change the product:**

- Assign the PR to the appropriate product group EM (Engineering Manager).
- Notify the EM in the #help-engineering Slack channel.

The EM will be the contact point for the contributor and will ensure the PR is reviewed by the appropriate team member when ready. The EM should:

- Set the PR to draft.
- Thank the contributor for their hard work, explain that all changes to the product go through Fleet's [prioritization process](https://fleetdm.com/handbook/company/product-groups#how-feature-requests-are-prioritized), and ask them to file a [feature request](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=%3Aproduct&projects=&template=feature-request.md&title=) that describe the change their PR is introducing.

**For PRs that will not be merged:**

- Thank the contributor for their effort and explain why the changes won't be merged.
- Close the PR.


### Merge a community pull request

When merging a pull request from a community contributor:

- Ensure that the checklist for the submitter is complete.
- Verify that all necessary reviews have been approved.
- Merge the PR.
- Thank and congratulate the contributor.
- Share the merged PR with the team in the [#help-marketing channel](https://fleetdm.slack.com/archives/C01ALP02RB5) of Fleet Slack to be publicized on social media. Those who contribute to Fleet and are recognized for their contributions often become great champions for the project.


### Close a stale community issue

If a community member opens an issue that we can't reproduce leave a comment asking the author for more context. After one week with no reply, close the issue with a comment letting them know they are welcome to re-open it with any updates.


### Schedule developer on-call workload

Engineering Managers are asked to be aware of the [on-call rotation](https://docs.google.com/document/d/1FNQdu23wc1S9Yo6x5k04uxT2RwT77CIMzLLeEI2U7JA/edit#) and reduce estimate capacity for each sprint accordingly. While it varies week to week considerably, the on-call responsibilities can sometimes take up a substantial portion of the engineer's time.

On-call engineers are available during the business hours of 9am - 5pm Pacific. The [on-call support SLA](https://fleetdm.com/handbook/company/product-groups#developer-on-call-responsibilities) requires a 1-hour response time during business hours to any @oncall mention.


### Assume developer on-call alias

The on-call developer is responsible for:

- Knowing [the on-call rotation](https://fleetdm.com/handbook/company/product-groups#the-developer-on-call-rotation).
- Performing the [on-call responsibilities](https://fleetdm.com/handbook/company/product-groups#developer-on-call-responsibilities).
- [Escalating community questions and issues](https://fleetdm.com/handbook/company/product-groups#escalations).
- Successfully [transferring the on-call persona to the next developer](https://fleetdm.com/handbook/company/product-groups#changing-of-the-guard).
- Working on an [engineering-initiated story](https://fleetdm.com/handbook/engineering#create-an-engineering-initiated-story).

To provide full-time focus to the role, the on-call engineer is not expected to work on sprint issues during their on-call assignment.


### Create a release candidate

All minor releases go through the release candidate process before they are published. A release candidate for the next minor release is created on the last Friday of each sprint at 8:00 AM Pacific (see [Fleet's release calendar](https://calendar.google.com/calendar/u/0?cid=Y192Nzk0M2RlcW4xdW5zNDg4YTY1djJkOTRic0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t)). A release candidate branch is created at `rc-minor-fleet-v4.x.x` and no additional feature work or released bug fixes are merged without EM and QA approval.

[Run the first step](https://github.com/fleetdm/fleet/tree/main/tools/release#minor-release-typically-end-of-sprint) of the minor release section of the Fleet releases script to create the release candidate branch, the release QA issue, and announce the release candidate in Slack.

During the release candidate period, the release candidate is deployed to our QA Wolf instance every morning instead of `main` to ensure that any new bugs reported by QA Wolf are in the upcoming release and need to be fixed before publishing the release.

Open the [confidential repo environment variables](https://github.com/fleetdm/confidential/settings/variables/actions) page and update the `QAWOLF_DEPLOY_TAG` repository variable with the name of the release candidate branch.

### Merge unreleased bug fixes into the release candidate

Only merge unreleased bug fixes during the release candidate period to minimize code churn and help ensure a stable release. To merge a bug fix into the release candidate:

1. Merge the fix into `main`. 
2. `git checkout` the release candidate branch and create a new local branch. 
3. `git cherry-pick` your commit from `main` into your new local branch.
4. Create a pull request from your new branch to the release candidate. 

This process ensures your bug fix is included in `main` for future releases, as well as the release candidate branch for the pending release.

If there is partially merged feature work when the release candidate is created, the previously merged code must be reverted. If there is an exceptional, business-critical need to merge feature work into the release candidate, as determined by the [release ritual DRI](#rituals), the release candidate [feature merge exception process](https://fleetdm.com/handbook/engineering#request-release-candidate-feature-merge-exception) may be followed.


### Request release candidate feature merge exception

1. Notify product group EM that feature work will not merge into `main` before the release candidate is cut and requires a feature merge exception.
2. EM notifies QA lead for the product group and the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals).
3. EM, QA lead, and [release ritual DRI](#rituals) must all approve the feature work PR before it is merged into the release candidate branch.

> This exception process should be avoided whenever possible. Any feature work merged into the release candidate will likely result in a significant release delay.


### Confirm latest versions of dependencies

Before kicking off release QA, confirm that we are using the latest versions of dependencies we want to keep up-to-date with each release. Currently, those dependencies are:

1. **Go**: Latest minor release
- Check the [Go version specified in Fleet's go.mod file](https://github.com/fleetdm/fleet/blob/main/go.mod) (`go 1.XX.YY`).
- Check the [latest minor version of Go](https://go.dev/dl/). For example, if we are using `go1.19.8`, and there is a new minor version `go1.19.9`, we will upgrade.
- If the latest minor version is greater than the version included in Fleet, [file a bug](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=bug%2C%3Areproduce&projects=&template=bug-report.md&title=) and assign it to the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals) and the current oncall engineer. Add the `~release blocker` label. We must upgrade to the latest minor version before publishing the next release.
- If the latest major version is greater than the version included in Fleet, [create a story](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=story%2C%3Aproduct&projects=&template=story.md&title=) and assign it to the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals) and the current oncall engineer. This will be considered for an upcoming sprint. The release can proceed without upgrading the major version.

> In Go versioning, the number after the first dot is the "major" version, while the number after the second dot is the "minor" version. For example, in Go 1.19.9, "19" is the major version and "9" is the minor version. Major version upgrades are assessed separately by engineering.

2. **macadmins-extension**: Latest release
- Check the [latest version of the macadmins-extension](https://github.com/macadmins/osquery-extension/releases).
- Check the [version included in Fleet](https://github.com/fleetdm/fleet/blob/main/go.mod#L60).
- If the latest stable version of the macadmins-extension is greater than the version included in Fleet, [file a bug](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=bug%2C%3Areproduce&projects=&template=bug-report.md&title=) and assign it to the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals) and the [current on-call engineer](https://fleetdm.com/handbook/engineering#how-to-reach-the-oncall-engineer).
- Add the `~release blocker` label.

>**Note:** Some new versions of the macadmins-extension include updates that require code changes in Fleet. Make sure to note in the bug that the update should be checked for any changes, like new tables, that require code changes in Fleet.

Our goal is to keep these dependencies up-to-date with each release of Fleet. If a release is going out with an old dependency version, it should be treated as a [critical bug](https://fleetdm.com/handbook/engineering#critical-bugs) to make sure it is updated before the release is published.

3. **osquery**: Latest release
- Check the [latest version of osquery](https://github.com/osquery/osquery/releases).
- Check the [version included in Fleet](https://github.com/fleetdm/fleet/blob/main/.github/workflows/generate-osqueryd-targets.yml#L27).
- If the latest release of osquery is greater than the version included in Fleet, [file a bug](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=bug%2C%3Areproduce&projects=&template=bug-report.md&title=) and assign it to the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals) and the [current on-call engineer](https://fleetdm.com/handbook/engineering#how-to-reach-the-oncall-engineer).
- Do not add the `~release blocker` label. 
- Update the bug description to note that changes to [osquery command-line flags](https://osquery.readthedocs.io/en/stable/installation/cli-flags/) require updates to Fleet's flag validation and related documentation [as shown in this pull request](https://github.com/fleetdm/fleet/pull/16239/files). 

4. Vulnerability data sources
- Check the [NIST National Vulnerability Database website](https://nvd.nist.gov/) for any announcements that might impact our [NVD data feed](https://github.com/fleetdm/fleet/blob/5e22f1fb4647a6a387ca29db6dd75d492f1864d6/cmd/cpe/generate.go#L53). 
- Check the [CISA website](https://www.cisa.gov/) for any news or announcements that might impact our [CISA data feed](https://github.com/fleetdm/fleet/blob/5e22f1fb4647a6a387ca29db6dd75d492f1864d6/server/vulnerabilities/nvd/sync.go#L137). 

If an announcement is found for either data source that may impact data feed availability, notify the current [on-call engineer](https://fleetdm.com/handbook/engineering#how-to-reach-the-oncall-engineer). Notify them that it is their responsibility to investigate and file a bug or take further action as necessary. 

5. [Fleetd](https://fleetdm.com/docs/get-started/anatomy#fleetd) components
- Check for code changes to [Orbit](https://github.com/fleetdm/fleet/blob/main/orbit/) or [Desktop](https://github.com/fleetdm/fleet/tree/main/orbit/cmd/desktop) since the last `orbit-*` tag was published.
- Check for code changes to the [fleetd-chrome extension](https://github.com/fleetdm/fleet/tree/main/ee/fleetd-chrome) since the last `fleetd-chrome-*` tag was published.

If code changes are found for any `fleetd` components, create a new release QA issue to update `fleetd`. Delete the top section for Fleet core, and retain the bottom section for `fleetd`. Populate the necessary version changes for each `fleetd` component.


### Indicate your product group is release-ready

Once a product group completes its QA process during the release candidate period, its QA lead moves the smoke testing ticket to the "Ready for release" column on their GitHub board. They then notify the release ritual DRI by tagging them in a comment, indicating that their group is prepared for release. The release ritual DRI starts the [release process](https://github.com/fleetdm/fleet/blob/main/docs/Contributing/workflows/releasing-fleet.md) after all QA leads have made these updates and confirmed their readiness for release.


### Submit test coverage requests to QA Wolf

Fleet QA owns the test planning process and identifies what needs to be automated. After each sprint, we review merged PRs, release notes, and demo recordings to find new automation candidates.
We track these in a shared [Google Doc](https://docs.google.com/document/d/1jr8wxZZNTvcAB2IMOrsqY4NTW4eceX-3CABiYKpb_pY/edit?usp=sharing) and categorize them as:
- New test requests (feature + what to test)
- Existing tests to update

Once coverage is agreed on, Fleet QA submits the request via [QA Wolf’s Coverage Request form](https://app.qawolf.com/fleet/coverage-requests). The most recent sprints are prioritized first.
This workflow lets QA Wolf focus on test implementation while Fleet QA stays accountable for identifying clear, high-value test needs


### Prepare Fleet release

See the ["Releasing Fleet" contributor guide](https://github.com/fleetdm/fleet/blob/main/docs/Contributing/guides/releasing-fleet.md).

### Prepare fleetd agent release

See [Fleet's TUF release documentation](https://github.com/fleetdm/fleet/blob/main/tools/tuf/README.md).


### Deploy a new release to dogfood

After each Fleet release, the new release is deployed to Fleet's "dogfood" (internal) instance. To avoid interruptions to sales demos using this instance, deploys should occur outside of the business hours of 7am - 5pm Pacific time Monday - Friday. If a deployment is necessary during business hours, coordinate with the Sales department in the #g-sales Slack channel.

How to deploy a new release to dogfood:

1. Head to the **Tags** page on the fleetdm/fleet Docker Hub: https://hub.docker.com/r/fleetdm/fleet/tags
2. In the **Filter tags** search bar, type in the latest release (ex. v4.19.0).
3. Locate the tag for the new release and copy the image name. An example image name is "fleetdm/fleet:v4.19.0".
4. Head to the "Deploy Dogfood Environment" action on GitHub: https://github.com/fleetdm/fleet/actions/workflows/dogfood-deploy.yml
5. Select **Run workflow** and paste the image name in the **The image tag wished to be deployed.** field.

> Note that this action will not handle down migrations. Always deploy a newer version than is currently deployed.
>
> Note that "fleetdm/fleet:main" is not an image name, instead use the commit hash in place of "main".


### Conclude current milestone 

Immediately after publishing a new release, close out the associated GitHub issues and milestones. 

1. **Update product group boards**: In GitHub Projects, go to each product group board tracking the current release and filter by the current milestone.

2. **Move user stories to drafting board**: Select all items in "Ready for release" that have the `story` label. Apply the `:product` label and remove the `:release` label. These items will move back to the product drafting board.

3. **Confirm and close**: Make sure that all items with the `story` label have left the "Ready for release" column. Select all remaining items in the "Ready for release" column and move them to the "Closed" column. This will close the related GitHub issues.

4. **Confirm and celebrate**: Open the [Drafting](https://github.com/orgs/fleetdm/projects/67) board. Filter by the current milestone and move all stories to the "Confirm and celebrate" column. Product will close the issues during their [confirm and celebrate ritual](https://fleetdm.com/handbook/product#rituals).

5. **Close GitHub milestone**: Visit [GitHub's milestone page](https://github.com/fleetdm/fleet/milestones) and close the current milestone.

6. Announce that the release milestone has been closed in #help-engineering.

7. Visit the [confidential repo variables](https://github.com/fleetdm/confidential/settings/variables/actions) page and update the `QAWOLF_DEPLOY_TAG` repository variable to `main` so that the latest code is deployed to QA Wolf every morning.


### Update the Fleet releases calendar

The [Fleet releases Google calendar](https://calendar.google.com/calendar/embed?src=c_v7943deqn1uns488a65v2d94bs%40group.calendar.google.com&ctz=America%2FChicago) is kept up-to-date by the [release ritual DRI](https://fleetdm.com/handbook/engineering#rituals). Any change to targeted release dates is reflected on this calendar.


### Handle process exceptions for non-released code

Some of our code does not go through a scheduled release process and is released immediately via GitHub workflows:

1. The [fleetdm/nvd](https://github.com/fleetdm/nvd) repository.
2. The [fleetdm/vulnerabilities](https://github.com/fleetdm/vulnerabilities) repository.
3. Our [website](https://github.com/fleetdm/fleet/tree/main/website) directory.

In these cases there are two differences in our pull request process:

- QA is done before merging the code change to the main branch.
- Tickets are not moved to "Ready for release". Bug are closed, and user stories are moved to the product drafting board's "Confirm and celebrate" column.


### Notify stakeholders when a user story is pushed to the next release

[User stories](https://fleetdm.com/handbook/company/product-groups#scrum-items) are intended to be completed in a single sprint. When the EM knows a user story will be pushed, it is the product group EM's responsibility to notify stakeholders:

1. Add the `~pushed` label to the user story.
2. Update the user story's milestone to the next minor version milestone.
3. Comment on the GitHub issue and at-mention the Head of Product Design and anyone listed in the requester field.
4. If `customer-` labels are applied to the user story, at-mention the [VP of Customer Success](https://fleetdm.com/handbook/customer-success#team) in the #g-mdm, #g-software, or #g-orchestration Slack channel.

> Instead of waiting until the end of the sprint, notify stakeholders as soon as you know the story is being pushed.


### Run Fleet locally for QA purposes

To try Fleet locally for QA purposes, run `fleetctl preview`, which defaults to running the latest stable release.

To target a different version of Fleet, use the `--tag` flag to target any tag in [Docker Hub](https://hub.docker.com/r/fleetdm/fleet/tags?page=1&ordering=last_updated), including any git commit hash or branch name. For example, to QA the latest code on the `main` branch of fleetdm/fleet, you can run: `fleetctl preview --tag=main`.

To start a preview without starting the simulated hosts, use the `--no-hosts` flag (e.g., `fleetctl preview --no-hosts`).

For each bug found, please use the [bug report template](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=bug%2C%3Areproduce&template=bug-report.md&title=) to create a new bug report issue.

For unreleased bugs in an active sprint, a new bug is created with the `~unreleased bug` label. The `:release` label and associated product group label is added, and the milestone is set to the version that the feature will be released in. For example, if the feature will be released in v4.71.0 and the bug did not exist prior to that version, the milestone is set to `v4.71.0`. The engineer responsible for the feature is assigned. If QA is unsure who the bug should be assigned to, it is assigned to the EM. Fixing the bug becomes part of the story.


### Interview a developer candidate

Ensure the interview process follows these steps in order. This process must follow [creating a new position](https://fleetdm.com/handbook/company/leadership#creating-a-new-position) through [receiving job applications](https://fleetdm.com/handbook/company/leadership#receiving-job-applications). Once the position is approved manage this process per candidate in a [hiring pipeline](https://drive.google.com/drive/folders/1dLZaor9dQmAxcxyU6prm-MWNd-C-U8_1?usp=drive_link)

1. **Reach out**: Send an email or LinkedIn message introducing yourself. Include the URL for the position, your Calendly URL, and invite the candidate to schedule a 30-minute introduction call.
2. **Conduct screening call**: Discuss the requirements of the position with the candidate, and answer any questions they have about Fleet. Look for alignment with [Fleet's values](https://fleetdm.com/handbook/company#values) and technical expertise necessary to meet the requirements of the role.
2. **Deliver technical assessment**: Download the zip of the [code challenge](https://github.com/fleetdm/wordgame) and ask them to complete and send their project back within 5 business days.
3. **Test technical assessment**: Verify the code runs and completes the challenge correctly. Check the code for best practices, good style, and tests that meet our standards.
5. **Schedule technical interview**: Send the candidate a calendly link for 1hr to talk to a Software Engineer on your team where the goal is to understand the thechnical capabilities of the candidate. An additional Software Engineer can optionally join if available. Share the candidate's project with the Software Engineers and ask them to review in advance so they are prepared with questions about the candidate's code.
6. **Schedule HOPD interview**: Send the candidate a calendly link for 30m talk to the Head of Product Design @noahtalerman.
7. **Schedule CTO interview**: Send the candidate a calendly link for 30m talk with our CTO @lukeheath.

If the candidate passes all of these steps then continue with [hiring a new team member](https://fleetdm.com/handbook/company/leadership#hiring-a-new-team-member).


### Perform an incident postmortem

Conduct a postmortem meetings for every service or feature outage and every critical bug, whether it's a customer's environment or on fleetdm.com.

1. Copy this [postmortem template](https://docs.google.com/document/d/1Ajp2LfIclWfr4Bm77lnUggkYNQyfjePiWSnBv1b1nwM/edit?usp=sharing) document and pre-populate where possible.
2. Invite stakeholders. Typically the EM, PM, QA, and engineers involved. If a customer incident, include the CSM.
3. Follow and populate document topic by topic. Determine the root cause (why it happened), as well as why our controls did not catch it before release.
4. Assign each action item an owner that who is responsible for creating a Github issue promptly and working with with the relevant PM/EM to prioritize.

[Example Finished Document](https://docs.google.com/document/d/1YnETKhH9R7STAY-PaFnPy2qxhNht2EAFfkv-kyEwebQ/edit?usp=share_link)


### Maintain TUF repo for secure agent updates

Instructions for creating and maintaining a TUF repo are available on our [TUF handbook page](https://fleetdm.com/handbook/engineering/tuf). 


### Provide same-day support for major version macOS releases

Beginning with macOS 16, Fleet offers same-day support for all major version macOS releases. 

1. Install major version macOS beta release on test devices. 
2. Create a new [QA release issue](https://github.com/fleetdm/fleet/issues/new?assignees=xpkoala%2Cpezhub&labels=%23g-mdm%2C%23g-endpoint-ops%2C%3Arelease&projects=&template=release-qa.md&title=Release+QA%3A+macOS+16) with the new major version in the issue title.
3. Complete all manual smoke tests in the issue and confirm they are passing. 
4. Confirm all automated tests are passing.
5. [File bugs](https://github.com/fleetdm/fleet/issues/new?assignees=&labels=P1%2Cbug%2C%3Areproduce%2C%3Aincoming&projects=&template=bug-report.md&title=) with a `P1` label and assign to the appropriate [product group](https://fleetdm.com/handbook/company/product-groups#current-product-groups).
6. When all bugs are fixed, follow the [writing a feature guide](https://fleetdm.com/handbook/engineering#write-a-feature-guide) process to publish an article announcing Fleet same-day support for the new major release.


### Fix flaky Go tests

Sometimes automated tests fail intermittently, causing PRs to become blocked and engineers to become sad and vengeful. Debugging a "flaky" or "rando" test failure typically involves:

- Adding extra logs to the test and/or related code to get more information about the failure.
- Running the test multiple times to reproduce the failure.
- Implementing an attempted fix to the test (or the related code, if there's an actual bug).
- Running the test multiple times to try and verify that the test no longer fails.

To aid in this process, we have the Stress Test Go Test action (aka the RandoKiller™).  This is a Github Actions workflow that can be used to run one or more Go tests repeatedly until they fail (or until they pass a certain number of times).  To use the RandoKiller:

- Create a branch whose name ends with `-randokiller` (for example `sgress454/enqueue-mdm-command-randokiller`).
- Modify the [.github/workflows/config/randokiller.json](https://github.com/fleetdm/fleet/blob/main/.github/workflows/config/randokiller.json) file to your specifications (choosing the packages and tests to run, the mysql matrix, and the number of runs to do).
- Push up the branch with whatever logs/changes you need to help diagnose or fix the flaky test.
- Monitor the [Stress Test Go Test](https://github.com/fleetdm/fleet/actions/workflows/randokiller-go.yml) workflow for your branch.
- Repeat until the stress test passes!  Every push to your branch will trigger a new run of the workflow.


### Create and use Architectural Decision Records (ADRs)

Architectural Decision Records (ADRs) document important architectural decisions made along with their context and consequences. They help teams understand why certain technical decisions were made, provide historical context, and ensure knowledge is preserved as the team evolves.

**When to create an ADR:**

Create an ADR when making a significant architectural decision that:

- Has a substantial impact on the system architecture
- Affects multiple components or product groups
- Introduces new technologies or frameworks
- Changes established patterns or approaches
- Requires trade-offs that should be documented
- Would benefit future contributors by explaining the reasoning

Examples include choosing a new technology, changing authentication mechanisms, changing a dependency, or establishing a new pattern for handling specific types of data or workflows.

**How to create an ADR:**

1. Navigate to the `docs/Contributing/adr/` directory in the Fleet repository
2. Copy the `template.md` file to a new file named `NNNN-descriptive-title.md` where:
   - `NNNN` is the next number in sequence (e.g., `0001`, `0002`)
   - `descriptive-title` is a brief, hyphenated description of the decision
3. Fill in the template with your decision details:
   - **Title**: A descriptive title that summarizes the decision
   - **Status**: Start with "Proposed" and update as appropriate (Accepted, Rejected, Deprecated, or Superseded)
   - **Context**: Explain the problem and background that led to this decision
   - **Decision**: Clearly state the decision that was made
   - **Consequences**: Describe the resulting context after applying the decision, including both positive and negative consequences
   - **References**: Include links to related documents or resources
4. Submit a pull request with your new ADR
5. Update the ADR's status after review and discussion

**Updating existing ADRs:**

If a decision is superseded by a new decision:

1. Create a new ADR that references the old one
2. Update the status of the old ADR to "Superseded by [link to new ADR]"

**ADR review process:**

ADRs should be reviewed by:

- The engineering team members most affected by the decision
- At least one engineering manager
- The CTO for significant architectural changes

The goal of the review is to ensure the decision is well-documented, the context is clear, and the consequences are thoroughly considered.


### Request product group transfer

Product groups are organized by core use case to allow each product group to develop subject matter expertise. Transferring between product groups offers engineers the opportunity to gain experience contributing to other areas of Fleet. To request a product group transfer, notify the Engineering Manager of your [product group](https://fleetdm.com/handbook/company/product-groups#current-product-groups) or the [CTO](https://fleetdm.com/handbook/engineering#team) to be considered for transfer the next time the requested product group has an available position.


### Record engineering KPIs

We track the effectiveness of our processes by observing issue throughput and identifying where buildups (and therefore bottlenecks) are occurring.

At the end of each week, the Engineering KPIs are recorded by the engineering output DRI using the [get bug and PR report script](https://github.com/fleetdm/fleet/blob/main/website/scripts/get-bug-and-pr-report.js).


### Edit a DNS record

We use Cloudflare to manage the DNS records of fleetdm.com and our other domains. To make DNS changes in Cloudflare:

1. Log into your Cloudflare account and select the "Fleet" account.
2. Select the domain you want to change and go to the DNS panel on that domain's dashboard.
3. To add a record, click the "Add record" button, select the record's type, fill in the required values, and click "Save". If you're making changes to an existing record, you only need to click on the record, update the record's values, and save your changes.

> If you need access to Fleet's Cloudflare account, please ask the [DRI](https://fleetdm.com/handbook/company/why-this-way#why-direct-responsibility) [Luke Heath](https://fleetdm.com/handbook/engineering#team) in Slack for an invitation.


### Accept new Apple developer account terms

Engineering is responsible for managing third-party accounts required to support engineering infrastructure. We use the official Fleet Apple developer account to notarize installers we generate for Apple devices. Whenever Apple releases new terms of service, we are unable to notarize new packages until the new terms are accepted.

When this occurs, we will begin receiving the following error message when attempting to notarize packages: "You must first sign the relevant contracts online." To resolve this error, follow the steps below.

1. Visit the [Apple developer account login page](https://appleid.apple.com/account?appId=632&returnUrl=https%3A%2F%2Fdeveloper.apple.com%2Fcontact%2F).

2. Log in using the credentials stored in 1Password under "Apple developer account".

3. Contact the Head of Digital Experience to determine which phone number to use for 2FA.

4. Complete the 2FA process to log in.

5. Accept the new terms of service.


### Renew MDM certificate signing request (CSR) 

The certificate signing request (CSR) certificate expires every year. It needs to be renewed prior to expiring. This is notified to the team by the MDM calendar event [IMPORTANT: Renew MDM CSR certificate](https://calendar.google.com/calendar/u/0/r/eventedit/MmdqNTY4dG9nbWZycnNxbDBzYjQ5dGplM2FfMjAyNDA5MDlUMTczMDAwWiBjXzMyMjM3NjgyZGRlOThlMzI4MjVhNTY1ZDEyZjk0MDEyNmNjMWI0ZDljYjZjNjgyYzQ2MjcxZGY0N2UzNjM5NDZAZw)

Steps to renew the certificate:

1. Visit the [Apple developer account login page](https://developer.apple.com/account).
2. Log in using the credentials stored in 1Password under **Apple developer account**.
3. Verify you are using the **Enterprise** subaccount for Fleet Device Management Inc.
4. Generate a new certificate following the instructions in [MicroMDM](https://github.com/micromdm/micromdm/blob/c7e70b94d0cfc7710e5c92be20d4534d9d5a0640/docs/user-guide/quickstart.md?plain=1#L103-L118).
5. Note: `mdmctl` (a micromdm command for MDM vendors) will generate a `VendorPrivateKey.key` and `VendorCertificateRequest.csr` using an appropriate shared email relay and a passphrase (suggested generation method with pwgen available in brew / apt / yum `pwgen -s 32 -1vcy`)
6. Uploading `VendorCertificateRequest.csr` to Apple you will download a corresponding `mdm.cer` file
7. Convert the downloaded cert to PEM with `openssl x509 -inform DER -outform PEM -in mdm.cer -out server.crt.pem`
8. Update the **Config vars** in [Heroku](https://dashboard.heroku.com/apps/production-fleetdm-website/settings):
* Update `sails_custom__mdmVendorCertPem` with the results from step 7 `server.crt.pem`
* Update `sails_custom__mdmVendorKeyPassphrase` with the passphrase used in step 4
* Update `sails_custom__mdmVendorKeyPem` with `VendorPrivateKey.key` from step 4
9. Store updated values in [Confidential 1Password Vault](https://start.1password.com/open/i?a=N3F7LHAKQ5G3JPFPX234EC4ZDQ&v=lcvkjobeheaqdgnz33ontpuhxq&i=byyfn2knejwh42a2cbc5war5sa&h=fleetdevicemanagement.1password.com)
10. Verify by logging into a normal apple account (not billing@...) and Generate a new Push Certificate following our [setup MDM](https://fleetdm.com/docs/using-fleet/mdm-setup) steps and verify the Expiration date is 1 year from today.
11. Adjust calendar event to be between 2-4 weeks before the next expiration.


## Rituals

<rituals :rituals="rituals['handbook/engineering/engineering.rituals.yml']"></rituals>



<meta name="maintainedBy" value="lukeheath">
<meta name="title" value="🚀 Engineering">
