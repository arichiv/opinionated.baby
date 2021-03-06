import * as React from "react";
import {
  createFragmentContainer,
  graphql,
} from "react-relay";

import Card, {
  CardPrimaryContent,
  CardMedia,
} from "@material/react-card";
import {
  Cell,
  Grid,
  Row,
} from "@material/react-layout-grid";
import List, {ListItem, ListItemGraphic, ListItemText} from "@material/react-list";
import {
  Headline2,
  Headline4,
  Body1,
} from "@material/react-typography";
import MaterialIcon from '@material/react-material-icon';

import {
  goto,
} from "../utility";

import {
  Content_data as ContentQuery,
} from "./__generated__/Content_data.graphql";

export interface IContentProps {
  data: ContentQuery;
}

class __Content extends React.Component<IContentProps> {

  public render(
  ): JSX.Element {
    return (
      <Grid>
       <Row>
          <Cell columns={12}>
            <Headline2>
              A confidently immature starting point
            </Headline2>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>
              The hardest part of building a new dynamic website is avoiding
              all the dragons. Starting a development environment can freeze us
              with choice overload.
              {" "}
              <a
                onClick={(): void => { goto("https://github.com/AriChivukula/opinionated.baby/"); }}>
                Opinionated Baby
              </a>
              {" "}
              solves this by moving the starting line past the quagmire of setup
              and into the pleasure of production logic.
            </Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Headline2>
              Important choices I made for you
            </Headline2>
          </Cell>
        </Row>
        {this.renderTools()}
        <Row>
          <Cell columns={12}>
            <Headline2>
              <span style={{textDecoration: "line-through"}}>
                Self justification
              </span>
              {" "}
              Philosophy
            </Headline2>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Body1>
              This framework is one-size-fits-me. It's an open source
              version of a system I use when building complex websites.
              Anyone may attempt to use, critique, or contribute to it. The
              consistency with which feedback is incorporated will be nothing
              short of capricious. My general mission and purpose is to support
              the vitality and happy, healthy development of our
              {" "}
              <a onClick={(): void => { goto("http://www.nic.baby/policies.html"); }}>
                babies and children
              </a>
              .
            </Body1>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <Headline2>
              Release history
            </Headline2>
          </Cell>
        </Row>
        {this.renderReleases()}
      </Grid>
    );
  }

  private renderReleases(
  ): JSX.Element {
    return (
      <Row>
        {Array(...(this.props.data.releases || [])).sort((a: any, b: any) => parseInt(a.id) - parseInt(b.id)).map((item: any, index: number) => (
          <Cell columns={4} key={index}>
            <a onClick={(): void => { goto(`https://github.com/AriChivukula/opinionated.baby/releases/tag/v${item.id}/`); }}>
              <Card>
                <CardPrimaryContent>
                  <CardMedia
                   square
                   imageUrl={"images/v" + item.id + ".jpg"}
                  />
                </CardPrimaryContent>
              </Card>
            </a>
          </Cell>
        ))}
      </Row>
    );
  }

  private renderTools(
  ): JSX.Element {
    return (
      <Row>
        {this.props.data.tools!.map((item: any, index: number) => (
          <Cell columns={3} key={index}>
            <List twoLine>
              <a onClick={(): void => { goto(item.link); }}>
                <ListItem>
                  <ListItemGraphic graphic={<MaterialIcon icon={item.icon} />} />
                  <ListItemText
                    primaryText={item.title}
                    secondaryText={item.id}
                  />
                </ListItem>
              </a>
            </List>
          </Cell>
        ))}
      </Row>
    );
  }
}

const _Content = createFragmentContainer(
  __Content,
  {
    data: graphql`
      fragment Content_data on Query {
        releases {
          id
          title
          subtitle
        }
        tools {
          id
          icon
          link
          title
        }
      }
    `,
  },
);

export { _Content as Content };
