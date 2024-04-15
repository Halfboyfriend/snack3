import React from "react";
import { Container, Button } from "semantic-ui-react";
import "../assets/styles.css";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <nav>
          <div className="mt-5">
            <a
              class="navbar-brand"
              href="/"
              style={{ fontSize: "30px", fontWeight: "bolder"}}
            >
              Snack3
            </a>

            <span class="navbar-text" style={{float: "right", marginTop: "-20px"}}>
              <w3m-button />
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
