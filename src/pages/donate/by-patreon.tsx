import React from "react";
import { DefaultLayout } from "../../components/Layout";
import Button from "../../components/Button";

export default function Page({ data, pageContext, location }) {
  let frontmatter = { title: "Donate via Patreon", breadcrumbs: "Patreon | Donate" };
  return (
    <>
      <DefaultLayout frontmatter={frontmatter}>
        <div className="flex flex-col">
          <p>
            You can now support Team Kodi on Patreon. If you do not see a tier you
            like below, you can{" "}
            <a
              className="underline text-blue-700"
              href="https://patreon.com/teamkodi"
            >
              go directly to the Patreon site
            </a>{" "}
            and pick an amount.
          </p>
          <div className="inline-flex spacing-x-3 pt-6">
            <div>
              <Button
                variant="primary"
                target="_blank"
                rel="noopener"
                href="https://www.patreon.com/join/teamkodi/checkout?rid=3395480"
              >
                Join the $10 Tier
              </Button>
            </div>

            <div>
              <Button
                variant="primary"
                target="_blank"
                rel="noopener"
                href="https://www.patreon.com/join/teamkodi/checkout?rid=3395485"
              >
                Join the $25 Tier
              </Button>
            </div>

            <div>
              <Button
                variant="primary"
                target="_blank"
                rel="noopener"
                href="https://www.patreon.com/join/teamkodi/checkout?rid=3395486"
              >
                Join the $50 Tier
              </Button>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
