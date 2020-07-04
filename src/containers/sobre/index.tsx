import * as React from 'react';

import { Container, Grid, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

import NewRouterStore from '../../mobx/router.store';

interface Props {
  router: NewRouterStore;
}

@inject('router')
@observer
export default class Sobre extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color="blue" as="h2">
                <Header.Content>
                  Sobre
                  <Header.Subheader>
                    <h3>Desenvolvido por: Alex Felipe Barbosa</h3>
                    <br />
                    <strong>
                      Pós Graduação: Desenvolvimento de Aplicações Web e Móveis
                      Escaláveis{' '}
                    </strong>
                    <br /> <br />
                    <strong>
                      Professor: Antonio Carlos Júnior
                    </strong> <br /> <br />
                    <strong>Julho/2020</strong>
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
