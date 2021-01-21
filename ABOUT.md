# One repository to rule all the profile descriptions.

This repository (https://github.com/reinhart1010/reinhart1010) is dedicated to store the "Bio"s, email signatures, MediaWiki's "User Pages", and READMEs for **Reinhart "reinhart1010" Previano Koentjoro** in multiple sites and languages.

## How it's done

Most of these profile descriptions are dynamically generated from a configuration file stored in YAML, which contains required and optional information for various types of profile descriptions as shown below.

| Profile Description Types (Target) | Language | Character Limit | Multiline? | Usage |
|:-:|:-:|:-:|:-:|---|
| bio-50 | en-US | 50 | N | For bio description in 50 characters or less. Suitable for KakaoTalk (max. 60) and [Telegram](https://www.telegram.org ) (max. 70). |
| bio-100 | en-US | 100 | N | For bio description in 100 characters or less. Suitable for [WhatsApp](https://www.whatsapp.com) (max. 139). |
| bio-150 | en-US | 150 | N | For bio description in 150 characters or less. Suitable for [Instagram](https://www.instagram.com), [LinkedIn Headline](https://www.linkedin.com) (max. 220-240), [Twitter](https://twitter.com) (max. 160), and WordPress-based sites (max. 180). |
| bio-200 | en-US | 200 | N | For bio description in 200 characters or less. Suitable for [LinkedIn Headline](https://www.linkedin.com) (max. 220-240). |
| bio-250 | en-US | 250 | N | For bio description in 250 characters or less. Suitable for [Forem](https://www.forem.com)-based community websites ([DEV](https://dev.to), [CodeNewbie](https://community.codenewbie.org), etc.), [GitLab](https://gitlab.com), [LINE](https://line.me) (max. 500), and [OpenStreetMap](https://www.openstreetmap.org). |
| bio-gitee | en-US, zh-CN | ? | Y | For profile bio on [Gitee](https://gitee.com). |
| bio-wechat | en-US, zh-CN | 30 | N | For bio description in WeChat. |
| email | en-US, id-ID | - | Y | Email signature. |
| email-binus | en-US, id-ID | - | Y | Email signature for binus.ac.id email address. |
| linkedin | en-US | 2600 | Y | For LinkedIn profile "Summary" |
| readme | en-US | - | Y | For the profile README.md file in English. Suitable for [GitHub](https://github.com). |
| readme-id | id-ID | - | Y | For the profile README.md file in Bahasa Indonesia. Suitable for [Kotakode](https://kotakode.com). |
| readme-zh | zh-CN | - | Y | For the profile README.md file in (Simplified) Chinese. Suitable for [Gitee](https://gitee.com). |
| mediawiki-en | en-US | - | Y | For profile page (User:Reinhart_Previano) on MediaWiki-based websites, including English Wikipedia, OpenStreetMap Wiki, and wikiHow. |
| mediawiki-id | id-ID | - | Y | For profile page (User:Reinhart_Previano) on MediaWiki-based websites, including Wikipedia Bahasa Indonesia. |
| richtext | en-US | ? | Y | For websites which allows rich text-based profile bio, including Moodle-based MOOC websites as well as [Quora](https://quora.com). |
| richtext-id | id-ID | ? | Y | For websites which allows rich text-based profile bio, including Moodle-based MOOC websites ([BINUS CX](https://cx.apps.binus.ac.id) and [GreatNusa.com](https://www.greatnusa.com)) as well as [Quora](https://quora.com). |
| youtube | en-US | 1000 | Y | For YouTube channel description. |
| website | en-US | 1000 | Y | For the website at reinhart1010.github.io. |

The YAML file is then used to generate profile descriptions in those formats using Node.js, which will be executed by GitHub Actions, GitLab CI, as well as an internal Jenkins instance to sync this repository to other Git hosting sites. As of now, this repository will be synced across:

+ **BitBucket:** https://bitbucket.org/reinhart1010/reinhart1010
+ **Gitee:** https://gitee.com/reinhart1010/reinhart1010
+ **GitHub:** https://github.com/reinhart1010/reinhart1010
+ **GitLab:** https://gitlab.com/reinhart1010/reinhart1010

## Advertisements on profile descriptions
On some occasions, some profile descriptions may include advertisements to a certain event, campaign, or promotion. These advertisements will **only occur if Reinhart is directly affiliated or involved** to the event/campaign/company. For example, advertisements of [COMPUTERUN 2020](https://computerun.id) event have occured because Reinhart is part of the event committee, or an ad for [HOT-USAID-PDC Handwashing Station Map](https://handwashing-station.ushahidi.io) occues because Reinhart is a contributor (and one of the largest) on the project.

## Contributing to this repository
**Yes, Pull Requests from BitBucket, Gitee, GitHub, and GitLab ("Merge Requests") are enabled for this repository.** This is just one part of the [Sabilulungan]() initiative to enable and support collaboration across different websites and platforms.

However, since this will likely increase chances for merge conflicts, make sure that:

1. You have used a separate branch (i.e. other than `main` or `master`) to push your changes and submit a PR/MR.
2. Your branch has been updated (i.e. already includes recent changes from `master`) before submitting one.
3. You have set the same **commit email address** (if you have used the same email address across multiple sites), so your contributions from one site (e.g. GitHub) can be counted and rewarded across others (e.g. GitLab).
