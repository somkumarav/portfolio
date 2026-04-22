"use client";

import posthog from "posthog-js";
import { LinkCTA } from "../link";
import { Section } from "../section";

export const ConnectSection = () => {
  return (
    <Section title='Connect'>
      <p>
        Follow me on{" "}
        <LinkCTA
          href='https://x.com/somkumar_va'
          onClick={() => posthog.capture("connect_link_clicked", { platform: "x" })}
        >
          X
        </LinkCTA>
        , view my code and projects on{" "}
        <LinkCTA
          href='https://github.com/somkumarav'
          onClick={() => posthog.capture("connect_link_clicked", { platform: "github" })}
        >
          Github
        </LinkCTA>
        , or email me directly{" "}
        <LinkCTA
          href='mailto:somkumarav@gmail.com'
          onClick={() => posthog.capture("connect_link_clicked", { platform: "email" })}
        >
          somkumarav@gmail.com.
        </LinkCTA>
      </p>
    </Section>
  );
};
