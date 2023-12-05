import React from "react";
import { Container, Button } from "semantic-ui-react";
import "../assets/styles.css"

function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a
              class="navbar-brand"
              href="/"
              style={{ fontSize: "25px", fontWeight: "bolder", color: 'lime' }}
            >
              Snack3
            </a>

            <ul style={{display: "flex"}}>
              <li >
                <a aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li>
                <a  href="/">
                  Features
                </a>
              </li>
            </ul>
            <span class="navbar-text">
              <Button primary size="small">
                Connect
              </Button>
            </span>
          </div>
        </nav>
      </Container>

      {children}

      <Container>
        <footer>Footer</footer>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
