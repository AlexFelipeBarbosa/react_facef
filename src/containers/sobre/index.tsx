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
                    <h2>
                      <a href="http://www.alexbarbosa.info">
                        {' '}
                        Desenvolvido por: Alex Felipe Barbosa
                      </a>
                      <p>
                        Pós Graduação: Desenvolvimento de Aplicações Web e
                        Móveis Escaláveis{' '}
                      </p>
                      <p>Professor: Antonio Carlos Nascimento Júnior</p>
                      <p>Julho/2020</p>
                      <h3>
                        <strong>Contatos:</strong>{' '}
                      </h3>
                    </h2>
                    <h3>
                      <a href="https://github.com/AlexFelipeBarbosa"> GitHub</a>
                    </h3>
                    <h3>
                      <a href="http://www.alexbarbosa.info"> Blog</a>
                    </h3>
                    <h3>
                      <a href="https://www.linkedin.com/in/alexfelipebarbosa/">
                        {' '}
                        Linkedin
                      </a>
                    </h3>
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
