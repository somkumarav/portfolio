<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js 16.1.1 App Router portfolio site. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), which runs automatically on the client side with session replay and error tracking enabled. A reverse proxy is configured in `next.config.ts` so all analytics traffic routes through `/ingest` rather than directly to PostHog, improving ad-blocker resilience. Environment variables are stored in `.env.local`. Four components were updated to capture user engagement events.

| Event | Description | File |
|---|---|---|
| `social_link_clicked` | User clicks a social icon (GitHub, X, LinkedIn) in the about section | `src/components/socials.tsx` |
| `project_link_clicked` | User clicks a project's external link (website or GitHub repo) | `src/components/project-external-link.tsx` |
| `experience_company_clicked` | User clicks on a company name in the experience section | `src/components/experience.tsx` |
| `connect_link_clicked` | User clicks a link in the connect section (X, GitHub, or email) | `src/components/sections/connect-section.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://eu.posthog.com/project/164442/dashboard/637532
- **Social link clicks over time**: https://eu.posthog.com/project/164442/insights/yV6G08Ia
- **Connect section link clicks by platform**: https://eu.posthog.com/project/164442/insights/2TqbuqaK
- **Project link clicks**: https://eu.posthog.com/project/164442/insights/AKhcKdQE
- **Experience company clicks**: https://eu.posthog.com/project/164442/insights/3iOge5ZL
- **Overall portfolio engagement**: https://eu.posthog.com/project/164442/insights/EKLoDEc6

> **Action required**: Run `bun add posthog-js` to install the PostHog client library — the sandbox environment prevented the automated install from completing.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
