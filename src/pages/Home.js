import React from "react";
import Layout from "../components/Layout";
import "../assets/styles.css";
import { Button, Container, Form } from "semantic-ui-react";

function Home() {
  return (
    <Layout>
      <Container>
        <section className="py-5">
          <h1>Snack3 Staking</h1>

          <h4>
            Enjoy the benefits of weekly SNACKS yield, revenue share, gauges
            voting, farm yield boosting, and so much more!
          </h4>
          <p>
            <a href="/">Get Snacks</a>
          </p>
        </section>

        <section className="py-3">
          <form>
            <h3>ADD STAKE</h3>
            <div className="formula">
              <input placeholder="0" className="input-tag" />
              <span className="balance">Balance: 0 </span>

              <p>USD</p>
            </div>

            <div className="options mt-3">
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>Max</span>
            </div>

            <h3>ADD DURATION</h3>

            <div className="formula">
              <input placeholder="0" disabled className="input-tag" />
              <span className="balance"> Weeks </span>

              <p>USD</p>
            </div>

            <div className="options mt-3">
              <span>25%</span>
              <span>50%</span>
              <span>75%</span>
              <span>Max</span>
            </div>

            <h4>LOCK OVERVIEW</h4>

            <div style={{ margin: "auto", textAlign: "center" }}>
            <table class="table text-center">
              <tbody>
                <tr>
                  <td>
                    SNACKS TO BE LOCKED
                  </td>
                  <td>
                    {" "}
                    <span style={{ color: "grey" }}> 63,000,000,000,000</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    DURATION
                  </td>
                  <td>
                    {" "}
                    <span style={{ color: "grey" }}>
                      {" "}
                      2 WEEKS
                    </span>
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                   UNLOCK ON
                  </td>
                  <td>
                    <span style={{ color: "grey" }}>DATE TIME</span>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>


           <div className="mt-5">
           <Button primary fluid>
              Stake
            </Button>
           </div>
          </form>
        </section>
      </Container>
    </Layout>
  );
}

export default Home;
