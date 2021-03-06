import React, { Fragment } from "react";
import Header from "../../../components/header";
import { Column, Section, Title, Container, Card } from "rbx";
import logoImage from "../../../assets/images/logo.png";
import { ColumnGroup } from "rbx/grid/columns/column-group";
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";

const RegisterScreen = () => (
  <Fragment>
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <ColumnGroup centered>
          <Column size={3}>
            <Card>
              <Card.Content>
                <Section>
                  <ColumnGroup centered>
                    <Column size={12}>
                      <img src={logoImage}></img>
                    </Column>
                  </ColumnGroup>

                  <ColumnGroup>
                    <Column size={12}>
                      <Title
                        size={6}
                        className="has-text-grey has-text-centered"
                      >
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </ColumnGroup>
                  <RegisterForm />
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </ColumnGroup>
      </Container>
    </Section>
  </Fragment>
);

export default RegisterScreen;
