/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/website/views/Content.ts::module>>
 * BESPOKE<<DEPRECATE, Content>>
 * SIGNED<<bbeo+Vr7WwvvxBj2wFNWvRto1hzvufjJZR4ijRCtNKGATIEOr/YFThChol29xSTf9Hj5GXY2f+OWHE3PJt3d2Q==>>
 */

import * as React from "react";
import {
  Card,
  CardMedia,
  CardPrimaryAction,
  Grid,
  GridCell,
  List,
  SimpleListItem,
  Typography,
} from "rmwc";

import {
  goto,
} from "../util";

interface ITools {
  graphic: string;
  link: string;
  subtitle: string;
  title: string;
}

interface IReleases {
  titleA: string;
  titleB: string;
  version: string;
}

/* BESPOKE START <<DEPRECATE>> */
const tools: ITools[] = [
  {
    graphic: "memory",
    link: "https://aws.amazon.com/lambda/",
    subtitle: "Server(less)",
    title: "Lambda",
  },
  {
    graphic: "share",
    link: "https://www.postgresql.org/",
    subtitle: "Database",
    title: "PostgreSQL",
  },
  {
    graphic: "storage",
    link: "https://aws.amazon.com/s3/",
    subtitle: "Storage",
    title: "S3",
  },
  {
    graphic: "bug_report",
    link: "https://travis-ci.org/",
    subtitle: "CI/CD",
    title: "Travis CI",
  },
  {
    graphic: "language",
    link: "https://www.typescriptlang.org/",
    subtitle: "Language",
    title: "TypeScript",
  },
  {
    graphic: "widgets",
    link: "https://github.com/arichiv/typescriptase",
    subtitle: "Code Generation",
    title: "Typescriptase",
  },
  {
    graphic: "cached",
    link: "https://nodejs.org/en/",
    subtitle: "Runtime",
    title: "Node.js",
  },
  {
    graphic: "desktop_mac",
    link: "https://electronjs.org/",
    subtitle: "Desktop",
    title: "Electron",
  },
  {
    graphic: "unarchive",
    link: "https://www.npmjs.com/",
    subtitle: "Dependency",
    title: "npm",
  },
  {
    graphic: "build",
    link: "https://gulpjs.com/",
    subtitle: "Toolchain",
    title: "Gulp",
  },
  {
    graphic: "playlist_add_check",
    link: "https://facebook.github.io/jest/",
    subtitle: "Testing",
    title: "Jest",
  },
  {
    graphic: "graphic_eq",
    link: "https://graphql.org/",
    subtitle: "API",
    title: "GraphQL",
  },
  {
    graphic: "flip_to_front",
    link: "https://reactjs.org/",
    subtitle: "Interface",
    title: "React",
  },
  {
    graphic: "local_library",
    link: "http://facebook.github.io/relay/",
    subtitle: "Fetch",
    title: "Relay",
  },
  {
    graphic: "style",
    link: "https://material.io/components/web/",
    subtitle: "Theme",
    title: "Material Design",
  },
  {
    graphic: "line_style",
    link: "https://sass-lang.com/",
    subtitle: "Style",
    title: "SASS",
  },
];

const releases: IReleases[] = [
  { titleA: "Pragmatic", titleB: "Plotter", version: "v7" },
  { titleA: "Radical", titleB: "Robot", version: "v6" },
  { titleA: "Fierce", titleB: "Feline", version: "v5" },
  { titleA: "Staunch", titleB: "Sibling", version: "v4" },
  { titleA: "Tilted", titleB: "Turtle", version: "v3" },
  { titleA: "Assertive", titleB: "Actor", version: "v2" },
  { titleA: "Dogged", titleB: "Dapper", version: "v1" },
  { titleA: "Cocksure", titleB: "Castle", version: "v0" },
];
/* BESPOKE END <<DEPRECATE>> */

export function Content(
): JSX.Element {
  /* BESPOKE START <<Content>> */
  return (
    <Grid>
      <GridCell span={12}>
        <Typography use="display2" tag="div">
          A confidently immature starting point
        </Typography>
      </GridCell>
      <GridCell span={12}>
        <Typography use="subheading2" tag="div">
          The hardest part of building a new dynamic website is avoiding
          all the dragons. Starting a development environment can freeze us
          with choice overload.
          {" "}
          <Typography
            theme="text-secondary-on-background"
            onClick={(): void => { goto("https://github.com/arichiv/opinionated.baby/"); }}>
            Opinionated Baby
          </Typography>
          {" "}
          solves this by moving the starting line past the quagmire of setup
          and into the pleasure of production logic.
        </Typography>
      </GridCell>
      <GridCell span={12}>
        <Typography use="display2" tag="div">
          Important choices I made for you
        </Typography>
      </GridCell>
      {tools.map((item: ITools, index: number) => (
        <GridCell span={3} key={index}>
          <List twoLine>
            <SimpleListItem
              graphic={item.graphic}
              text={item.title}
              secondaryText={item.subtitle}
              onClick={(): void => { goto(item.link); }}
            />
          </List>
        </GridCell>
      ))}
      <GridCell span={12}>
        <Typography use="display2" tag="div">
          <span style={{textDecoration: "line-through"}}>
            Self justification
          </span>
          {" "}
          Philosophy
        </Typography>
      </GridCell>
      <GridCell span={12}>
        <Typography use="subheading2" tag="div">
          This framework is one-size-fits-me. It's an open source
          version of a system I use when building complex websites.
          Anyone may attempt to use, critique, or contribute to it. The
          consistency with which feedback is incorporated will be nothing
          short of capricious. My general mission and purpose is to support
          the vitality and happy, healthy development of our
          {" "}
          <Typography
            theme="text-secondary-on-background"
            onClick={(): void => { goto("http://www.nic.baby/policies.html"); }}>
            babies and children
          </Typography>
          .
        </Typography>
      </GridCell>
      <GridCell span={12}>
        <Typography use="display2" tag="div">
          Release history
        </Typography>
      </GridCell>
      {releases.map((item: IReleases, index: number) => (
        <GridCell span={4} key={index}>
          <Card>
            <CardPrimaryAction
              onClick={(): void => { goto(`https://github.com/arichiv/opinionated.baby/releases/tag/${item.version}/`); }}>
              <CardMedia
                square
                style={{backgroundImage: `url(/images/${item.version}.jpg)`}}
              />
              <Typography
                use="display1"
                style={{padding: "1rem"}}>
                <Typography theme="text-secondary-on-background">
                  {item.version}
                </Typography>
                <br />
                {item.titleA}
                <br />
                {item.titleB}
              </Typography>
            </CardPrimaryAction>
          </Card>
        </GridCell>
      ))}
    </Grid>
  );
  /* BESPOKE END <<Content>> */
}
