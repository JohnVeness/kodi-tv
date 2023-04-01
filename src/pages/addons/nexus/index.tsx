import React from "react";
import { graphql } from "gatsby";
import { IconList, IconListFeatured } from "../../../components/IconList";
import { DefaultLayout } from "../../../components/Layout";
import { AddonPageSubMenu } from "../../../components/AddonPageSubMenu";

export default function AddonIndexPage({ data, pageContext, location }) {
  let frontmatter = { title: "Nexus Add-ons", breadcrumbs: "Nexus | Addons" };
  let linkroot = "/addons/nexus/";

  return (
    <DefaultLayout frontmatter={frontmatter}>
      <AddonPageSubMenu linkroot={linkroot} />
      <h2 className="text-2xl font-bold">Featured Add-Ons</h2>
      <IconListFeatured items={data.FeaturedAddons.nodes} linkroot={linkroot} />
      <h2 className="text-2xl font-bold">New Additions</h2>
      <IconListFeatured items={data.NewAddons.nodes} linkroot={linkroot} />
      <h2 className="text-2xl font-bold">Recently Updated</h2>
      <IconListFeatured items={data.UpdatedAddons.nodes} linkroot={linkroot} />
      <h2 className="text-2xl font-bold pb-3">Categories</h2>
      <h3 className="text-xl font-bold">Look and Feel</h3>
      <IconList items={data.LookAndFeel.nodes} linkroot={linkroot + "category/"} />
      <h3 className="text-xl font-bold">Information Providers</h3>
      <IconList
        items={data.InformationProviders.nodes}
        linkroot={linkroot + "category/"}
      />
      <h3 className="text-xl font-bold">Games</h3>
      <IconList items={data.Games.nodes} linkroot={linkroot + "category/"} />
      <h3 className="text-xl font-bold">Others</h3>
      <IconList items={data.Others.nodes} linkroot={linkroot + "category/"} />
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  {
    Games: allNexusCategory(
      sort: { name: ASC }
      filter: { grouping: { eq: "Games" } }
    ) {
      nodes {
        name
        slug
        icon
      }
    }
    InformationProviders: allNexusCategory(
      sort: { name: ASC }
      filter: { grouping: { eq: "Information providers" } }
    ) {
      nodes {
        name
        slug
        icon
      }
    }
    LookAndFeel: allNexusCategory(
      sort: { name: ASC }
      filter: { grouping: { eq: "Look and feel" } }
    ) {
      nodes {
        name
        slug
        icon
      }
    }
    Others: allNexusCategory(
      sort: { name: ASC }
      filter: { grouping: { eq: "Other" } }
    ) {
      nodes {
        name
        slug
        icon
      }
    }
    FeaturedAddons: allNexusAddon(limit: 5, filter: { featured: { eq: "true" } }) {
      nodes {
        name
        slug
        icon
        snippet
      }
    }
    NewAddons: allNexusAddon(
      limit: 5
      filter: { agetype: { eq: "new" } }
      sort: { firstseen: DESC }
    ) {
      nodes {
        name
        slug
        icon
        snippet
      }
    }
    UpdatedAddons: allNexusAddon(
      limit: 5
      filter: { agetype: { eq: "existing" } }
      sort: { lastupdate: DESC }
    ) {
      nodes {
        name
        slug
        icon
        snippet
      }
    }
  }
`;
